import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { DoodleWaves, SketchDecorations } from '../components/sketch/SketchDecorations'

/** Placeholder portrait for layout — swap with your real photo when ready. */
const PLACEHOLDER_PORTRAIT =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80'

const navy = '#1a3554'
const creamPaper = '#fffef6'
const lightYellow = '#fff3c4'
const lightPink = '#ffd6e8'
const lightGreen = '#c5e8d0'
const darkBrown = '#3d2918'

const projectChips = [
  'Java game',
  'Task manager (frontend)',
  'Destination calculator (frontend)',
  'Recipe finder (frontend, vibe-coding)',
] as const

const chipStyles = [
  { borderColor: '#7aab8a', bg: lightGreen, color: '#2d4a38' },
  { borderColor: '#d48aa8', bg: lightPink, color: '#5c3040' },
  { borderColor: '#c9a227', bg: lightYellow, color: darkBrown },
  { borderColor: '#5a7a8f', bg: '#d4e8f0', color: '#243a5f' },
] as const

export function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        py: { xs: 4, md: 8 },
        background: `
          radial-gradient(ellipse 90% 60% at 10% 0%, ${lightYellow} 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 92% 8%, ${lightPink} 0%, transparent 50%),
          radial-gradient(ellipse 65% 45% at 50% 100%, ${lightGreen} 0%, transparent 52%),
          linear-gradient(180deg, #fdf6e9 0%, #faf0df 45%, #f7ead4 100%)
        `,
      }}
    >
      <SketchDecorations />

      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M0 40h80M40 0v80' fill='none' stroke='%231a3554' stroke-opacity='0.06' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, pl: { xs: 2.5, sm: 3 }, pr: { xs: 2.5, sm: 3 } }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 5, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack spacing={3} sx={{ flex: 1, maxWidth: { md: 'min(640px, 100%)' } }}>
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                fontSize: '0.75rem',
              }}
            >
              Front-end developer intern · Computer Science student
            </Typography>

            <Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.15rem' },
                  color: navy,
                }}
              >
                Interfaces, curiosity, and a roadmap to ML mastery
              </Typography>
              <Box sx={{ mt: 0.5 }}>
                <DoodleWaves />
              </Box>
            </Box>

            <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
              I&apos;m <strong>Nergis</strong> — a front-end developer intern who started coding in{' '}
              <strong>September 2024</strong>. I&apos;m still new to the software world, and I&apos;m
              genuinely excited to keep learning: new tools, better patterns, and how far I can push
              what I build on the web.
            </Typography>

            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: '2px dashed',
                borderColor: 'rgba(26, 53, 84, 0.28)',
                backgroundColor: creamPaper,
                boxShadow: '6px 6px 0 rgba(26, 53, 84, 0.12)',
              }}
            >
              <Typography variant="h3" component="h2" sx={{ fontSize: '1.1rem', mb: 1.5 }}>
                What I&apos;ve been building
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                I&apos;ve worked on a <strong>Java game</strong> project and several{' '}
                <strong>frontend-only</strong> apps: a task manager, a destination calculator, and a
                recipe finder (that last one was built with <strong>vibe-coding</strong> — a fun way
                to move fast and experiment). For my React work I&apos;ve used{' '}
                <strong>React + Vite</strong> across the board.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
                {projectChips.map((label, i) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    sx={{
                      borderColor: chipStyles[i].borderColor,
                      color: chipStyles[i].color,
                      backgroundColor: chipStyles[i].bg,
                      fontWeight: 600,
                      borderWidth: 2,
                      borderStyle: 'solid',
                    }}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: '2px solid',
                borderColor: 'rgba(92, 64, 50, 0.35)',
                background: `linear-gradient(135deg, ${lightPink} 0%, ${creamPaper} 55%, ${lightGreen} 100%)`,
                boxShadow: '4px 4px 0 rgba(61, 41, 24, 0.1)',
              }}
            >
              <Typography variant="h3" component="h2" sx={{ fontSize: '1.1rem', mb: 1 }}>
                Learning & direction
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I recently earned a certificate in{' '}
                <strong>&quot;AI Agents in TypeScript/JavaScript with Generative AI&quot;</strong>. I
                want to become highly skilled at shipping <strong>complex websites</strong> with{' '}
                <strong>AI integration</strong> and <strong>beautiful, intentional design</strong> —
                ideally getting to a point where I can assemble that kind of experience in just a few
                hours when the idea is right. Long term, my north star is to grow into a true{' '}
                <strong>Machine Learning Engineer</strong> — that&apos;s the mastery I&apos;m
                chasing.
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: { xs: 360, sm: 400, md: 420 },
              flexShrink: 0,
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: -12,
                right: -12,
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: lightYellow,
                border: `3px solid ${navy}`,
                boxShadow: '3px 3px 0 rgba(26,53,84,0.2)',
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                bottom: 36,
                left: -14,
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: lightGreen,
                border: `3px solid ${navy}`,
                transform: 'rotate(-8deg)',
                boxShadow: '3px 3px 0 rgba(26,53,84,0.18)',
              }}
            />
            <Box
              component="img"
              src={PLACEHOLDER_PORTRAIT}
              alt="Placeholder portrait — replace with your photo"
              sx={{
                position: 'relative',
                display: 'block',
                width: '100%',
                height: 'auto',
                aspectRatio: '4 / 5',
                objectFit: 'cover',
                borderRadius: 4,
                border: `4px solid ${navy}`,
                boxShadow: '12px 12px 0 rgba(26, 53, 84, 0.15), 0 16px 40px rgba(61, 41, 24, 0.12)',
                bgcolor: creamPaper,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 1.5,
                textAlign: 'center',
                color: 'text.secondary',
                letterSpacing: '0.02em',
              }}
            >
              Decorative placeholder image
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
