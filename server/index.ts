import 'dotenv/config'
import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { GoogleGenAI } from '@google/genai'
import { getSiteContent } from './siteContent.ts'

type ClientMessage = { role: 'user' | 'assistant'; content: string }

const PORT = Number(process.env.PORT ?? 3000)

const app = express()
app.use(cors())
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true })
})

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function isQuotaError(err: unknown): boolean {
  const msg = err instanceof Error ? err.message.toLowerCase() : ''
  return msg.includes('429') || msg.includes('quota') || msg.includes('rate limit') || msg.includes('resource_exhausted')
}

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      res.status(500).json({
        error:
          'GEMINI_API_KEY is not set on the server. Add it to your environment variables and restart the server.',
      })
      return
    }

    const body = req.body as { messages?: ClientMessage[]; prompt?: string }
    const clientMessages = Array.isArray(body.messages) ? body.messages : []
    const prompt = typeof body.prompt === 'string' ? body.prompt : ''

    const userText = prompt || clientMessages.filter((m) => m.role === 'user').at(-1)?.content || ''
    if (!userText.trim()) {
      res.status(400).json({ error: 'Missing prompt.' })
      return
    }

    const content = await getSiteContent()

    const systemInstruction = [
      `You are a helpful assistant embedded in a portfolio website for ${content.person.fullName}.`,
      'Answer ONLY using the website content provided below. If the answer is not in the content, say you do not know and suggest which page to check.',
      'Be concise, friendly, and accurate. Prefer bullet points when summarizing.',
      '',
      'WEBSITE CONTENT (JSON):',
      JSON.stringify(content),
    ].join('\n')

    const ai = new GoogleGenAI({ apiKey })

    const allMessages: ClientMessage[] = [
      ...clientMessages,
      ...(prompt ? [{ role: 'user' as const, content: prompt }] : []),
    ]

    const model = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash-preview-04-17'
    const requestPayload = {
      model,
      config: { systemInstruction, temperature: 0.2 },
      contents: allMessages.map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      })),
    }

    let lastErr: unknown
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        if (attempt > 0) await sleep(2000 * attempt)
        const completion = await ai.models.generateContent(requestPayload)
        const text = completion.text?.trim() ?? ''
        res.json({ text })
        return
      } catch (err) {
        lastErr = err
        if (!isQuotaError(err)) break
      }
    }

    const message = lastErr instanceof Error ? lastErr.message : 'Unknown error'
    const isQuota = isQuotaError(lastErr)
    res.status(isQuota ? 429 : 500).json({
      error: isQuota
        ? 'API quota exceeded. Please wait a moment and try again.'
        : message,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
})

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})
