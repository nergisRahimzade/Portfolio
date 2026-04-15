import { useMemo, useRef, useState } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CloseIcon from '@mui/icons-material/Close'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { localAnswerForPrompt, siteContent } from './siteContent'

type ChatRole = 'user' | 'assistant'

type ChatMessage = {
  id: string
  role: ChatRole
  content: string
}

const QUICK_TOPICS = [
  { label: 'Summarize projects', prompt: 'Summarize projects' },
  { label: 'How can I contact Nergis?', prompt: 'How can I contact Nergis?' },
  { label: "Tell me about Nergis's resume", prompt: "Tell me about Nergis's resume" },
] as const

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function AiChatbot() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: makeId(),
      role: 'assistant',
      content: `Hi! I’m Nergis’s site assistant. Ask me anything about ${siteContent.person.fullName}’s projects, competitions, certificates, resume, or contact info.`,
    },
  ])

  const scrollRef = useRef<HTMLDivElement | null>(null)

  const canSend = draft.trim().length > 0

  const title = useMemo(() => 'Ask about this portfolio', [])

  function append(role: ChatRole, content: string) {
    setMessages((prev) => [...prev, { id: makeId(), role, content }])
    queueMicrotask(() => {
      const el = scrollRef.current
      if (el) el.scrollTop = el.scrollHeight
    })
  }

  async function send(prompt: string) {
    const trimmed = prompt.trim()
    if (!trimmed) return

    append('user', trimmed)

    const answer = localAnswerForPrompt(trimmed)
    append('assistant', answer)
  }

  function onSubmit() {
    void send(draft)
    setDraft('')
  }

  return (
    <>
      <Fab
        color="secondary"
        aria-label="Open AI chat"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          right: 18,
          bottom: 18,
          zIndex: (theme) => theme.zIndex.modal + 1,
        }}
      >
        <AutoAwesomeIcon />
      </Fab>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 420 },
            bgcolor: 'background.default',
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Stack sx={{ height: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1.5 }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: '1.05rem' }}>
                {title}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                Step 1: UI + site-aware shortcuts (no OpenAI yet)
              </Typography>
            </Box>
            <IconButton aria-label="Close chat" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider />

          <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ px: 2, py: 1.5 }}>
            {QUICK_TOPICS.map((t) => (
              <Chip
                key={t.label}
                label={t.label}
                onClick={() => void send(t.prompt)}
                variant="outlined"
                sx={{
                  borderColor: 'rgba(236, 223, 210, 0.35)',
                  bgcolor: 'rgba(236, 223, 210, 0.06)',
                  fontWeight: 700,
                }}
              />
            ))}
          </Stack>

          <Divider />

          <Box
            ref={scrollRef}
            sx={{
              flex: 1,
              overflowY: 'auto',
              px: 2,
              py: 2,
            }}
          >
            <Stack spacing={1.5}>
              {messages.map((m) => {
                const isUser = m.role === 'user'
                return (
                  <Box
                    key={m.id}
                    sx={{
                      display: 'flex',
                      justifyContent: isUser ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '92%',
                        whiteSpace: 'pre-wrap',
                        borderRadius: 3,
                        px: 1.5,
                        py: 1.25,
                        border: '1px solid',
                        borderColor: isUser ? 'rgba(236, 223, 210, 0.25)' : 'divider',
                        bgcolor: isUser ? 'rgba(95, 52, 117, 0.26)' : 'rgba(236, 223, 210, 0.06)',
                        boxShadow: isUser ? '4px 4px 0 rgba(0, 0, 0, 0.18)' : 'none',
                      }}
                    >
                      <Typography variant="body2" color={isUser ? 'text.primary' : 'text.secondary'}>
                        {m.content}
                      </Typography>
                    </Box>
                  </Box>
                )
              })}
            </Stack>
          </Box>

          <Divider />

          <Box sx={{ p: 2 }}>
            <Stack direction="row" spacing={1} alignItems="flex-end">
              <TextField
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask a question…"
                fullWidth
                multiline
                minRows={1}
                maxRows={4}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    if (canSend) onSubmit()
                  }
                }}
              />
              <IconButton aria-label="Send" onClick={onSubmit} disabled={!canSend}>
                <SendIcon />
              </IconButton>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              Tip: press Enter to send, Shift+Enter for a new line.
            </Typography>
          </Box>
        </Stack>
      </Drawer>
    </>
  )
}

