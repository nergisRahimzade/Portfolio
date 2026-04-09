import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { DoodleWaves, SketchDecorations } from '../components/sketch/SketchDecorations'
import homePageProfile from '../assets/homePageProfile.jpeg'

/** Placeholder portrait for layout — swap with your real photo when ready. */
const PLACEHOLDER_PORTRAIT =
  homePageProfile

// Palette from Figma link:
// https://www.figma.com/color-palette-generator/?colors=213885-081849-ECDFD2-CCCACC-5F3475-893172
const navy = '#213885'
const deepNavy = '#081849'
const cream = '#ECDFD2'
const paper = '#CCCACC'
const purple = '#5F3475'
const magentaPurple = '#893172'

const projectChips = [
  'Java game',
  'Task manager (frontend)',
  'Destination calculator (frontend)',
  'Recipe finder (frontend, vibe-coding)',
] as const

const chipStyles = [
  { borderColor: navy, bg: cream, color: deepNavy },
  { borderColor: purple, bg: cream, color: purple },
  { borderColor: magentaPurple, bg: cream, color: magentaPurple },
  { borderColor: deepNavy, bg: cream, color: deepNavy },
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
        backgroundColor: cream,
      }}
    >
      <SketchDecorations />

      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: 0.18,
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M0 40h80M40 0v80' fill='none' stroke='%23081849' stroke-opacity='0.09' stroke-width='0.9'/%3E%3C/svg%3E\")`,
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
                  color: deepNavy,
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
                borderColor: 'rgba(8, 24, 73, 0.28)',
                backgroundColor: paper,
                boxShadow: '6px 6px 0 rgba(8, 24, 73, 0.12)',
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
                borderColor: 'rgba(95, 52, 117, 0.45)',
                backgroundColor: cream,
                boxShadow: '4px 4px 0 rgba(8, 24, 73, 0.12)',
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
                bgcolor: paper,
                border: `3px solid ${navy}`,
                boxShadow: '3px 3px 0 rgba(8,24,73,0.18)',
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
                bgcolor: cream,
                border: `3px solid ${purple}`,
                transform: 'rotate(-8deg)',
                boxShadow: '3px 3px 0 rgba(8,24,73,0.16)',
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
                border: `4px solid ${deepNavy}`,
                boxShadow: '12px 12px 0 rgba(8, 24, 73, 0.14), 0 16px 40px rgba(8, 24, 73, 0.12)',
                bgcolor: paper,
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
