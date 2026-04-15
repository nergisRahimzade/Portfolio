import 'dotenv/config'
import express, { type Request, type Response } from 'express'
import cors from 'cors'
import OpenAI from 'openai'
import { getSiteContent } from './siteContent'

type ClientMessage = { role: 'user' | 'assistant'; content: string }

const PORT = Number(process.env.PORT ?? 8787)

const app = express()
app.use(cors())
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ ok: true })
})

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      res.status(500).json({
        error:
          'OPENAI_API_KEY is not set on the server. Add it to your environment variables and restart the server.',
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

    const system = [
      `You are a helpful assistant embedded in a portfolio website for ${content.person.fullName}.`,
      'Answer ONLY using the website content provided below. If the answer is not in the content, say you do not know and suggest which page to check.',
      'Be concise, friendly, and accurate. Prefer bullet points when summarizing.',
      '',
      'WEBSITE CONTENT (JSON):',
      JSON.stringify(content),
    ].join('\n')

    const openai = new OpenAI({ apiKey })

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'system', content: system },
        ...clientMessages.map((m) => ({ role: m.role, content: m.content })),
        ...(prompt ? [{ role: 'user' as const, content: prompt }] : []),
      ],
    })

    const text = completion.choices[0]?.message?.content?.trim() ?? ''
    res.json({ text })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    res.status(500).json({ error: message })
  }
})

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
})

