import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

/** Placeholder portrait for layout — swap with your real photo when ready. */
const PLACEHOLDER_PORTRAIT =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80'

const projectChips = [
  'Java game',
  'Task manager (frontend)',
  'Destination calculator (frontend)',
  'Recipe finder (frontend, vibe-coding)',
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
      }}
    >
      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 55% at 15% 10%, rgba(139, 92, 246, 0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 20%, rgba(34, 211, 238, 0.22), transparent 50%), radial-gradient(ellipse 60% 45% at 50% 95%, rgba(236, 72, 153, 0.12), transparent 45%)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          top: '12%',
          right: '-8%',
          width: { xs: 280, md: 420 },
          height: { xs: 280, md: 420 },
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.45,
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: { xs: 260, md: 380 },
          height: { xs: 260, md: 380 },
          borderRadius: '50%',
          filter: 'blur(72px)',
          opacity: 0.35,
          background: 'linear-gradient(135deg, #ec4899, #6366f1)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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

            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.35rem', sm: '2.85rem', md: '3.35rem' },
                background: 'linear-gradient(120deg, #f8fafc 0%, #e9d5ff 45%, #67e8f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Interfaces, curiosity, and a roadmap to ML mastery
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
              I&apos;m <strong>Nergis</strong> — a front-end developer intern who started coding in{' '}
              <strong>September 2024</strong>. I&apos;m still new to the software world, and I&apos;m
              genuinely excited to keep learning: new tools, better patterns, and how far I can push
              what I build on the web.
            </Typography>

            <Box
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'rgba(255,255,255,0.12)',
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(12px)',
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
                {projectChips.map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    sx={{
                      borderColor: 'rgba(167, 139, 250, 0.45)',
                      color: 'primary.light',
                      backgroundColor: 'rgba(139, 92, 246, 0.12)',
                    }}
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Box>

            <Box
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: '1px solid rgba(34, 211, 238, 0.25)',
                background: 'rgba(34, 211, 238, 0.06)',
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
                inset: -3,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #a78bfa, #22d3ee, #f472b6)',
                opacity: 0.85,
                filter: 'blur(0.5px)',
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
                borderRadius: 3.5,
                border: '3px solid rgba(6, 6, 10, 0.85)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
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
