import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import homePageProfile from '../../assets/homePageProfile.jpeg'
import { TechStackRuledPaper } from './TeckStackRuledPaper.tsx'

/** Placeholder portrait for layout — swap with your real photo when ready. */
const PLACEHOLDER_PORTRAIT = homePageProfile

// Palette from Figma link:
// https://www.figma.com/color-palette-generator/?colors=213885-081849-ECDFD2-CCCACC-5F3475-893172
const deepNavy = '#081849'
const cream = '#ECDFD2'

export function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        py: { xs: 4, md: 8 },
        backgroundColor: deepNavy,
      }}
    >
      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: 0.18,
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22%3E%3Cpath d=%22M0 40h80M40 0v80%22 fill=%22none%22 stroke=%22%23ECDFD2%22 stroke-opacity=%220.12%22 stroke-width=%220.9%22/%3E%3C/svg%3E')`,
          backgroundSize: '80px 80px',
        }}
      />

      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, pl: { xs: 2.5, sm: 3 }, pr: { xs: 2.5, sm: 3 } }}
      >
        <Stack spacing={{ xs: 5, md: 6 }}>
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
                    color: cream,
                  }}
                >
                  Interfaces, curiosity, and a roadmap to ML mastery
                </Typography>
              </Box>

              <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
                I&apos;m <strong>Nergis Rahimzade</strong>, a front-end developer intern who started coding in{' '}
                <strong>September 2024</strong> — eager to learn fast and build better every day.
              </Typography>

              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 3,
                  border: '2px solid',
                  borderColor: 'rgba(236, 223, 210, 0.24)',
                  backgroundColor: 'rgba(95, 52, 117, 0.22)',
                  boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.22)',
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
                component="img"
                src={PLACEHOLDER_PORTRAIT}
                alt="Portrait"
                sx={{
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4 / 3.35',
                  objectFit: 'cover',
                  objectPosition: '50% 10%',
                  borderRadius: 4,
                  border: `4px solid ${cream}`,
                  boxShadow: '12px 12px 0 rgba(0, 0, 0, 0.26), 0 16px 40px rgba(0, 0, 0, 0.25)',
                  bgcolor: 'rgba(236, 223, 210, 0.08)',
                  transform: 'scale(1.08)',
                  transformOrigin: '50% 10%',
                }}
              />
            </Box>
          </Stack>

          <TechStackRuledPaper />
        </Stack>
      </Container>
    </Box>
  )
}
