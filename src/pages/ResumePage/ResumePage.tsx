import type { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const cream = '#ECDFD2'

const cardSx = {
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.22)',
} as const

const chipProps = {
  size: 'small' as const,
  sx: {
    borderColor: 'rgba(236, 223, 210, 0.35)',
    color: 'text.primary',
    bgcolor: 'rgba(236, 223, 210, 0.08)',
    fontWeight: 600,
  },
  variant: 'outlined' as const,
}

type BulletItem = { text: string }

function ResumeSectionCard({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <Card elevation={0} sx={cardSx}>
      <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: '1.15rem',
            fontWeight: 800,
            fontFamily: '"Syne", "Nunito", sans-serif',
            mb: 2,
            color: cream,
          }}
        >
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  )
}

function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.25 }}>
      {items.map((item) => (
        <Typography
          key={item.text}
          component="li"
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.75, display: 'list-item' }}
        >
          {item.text}
        </Typography>
      ))}
    </Stack>
  )
}

export function ResumePage() {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        py: { xs: 4, md: 6 },
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22%3E%3Cpath d=%22M0 40h80M40 0v80%22 fill=%22none%22 stroke=%22%23ECDFD2%22 stroke-opacity=%220.12%22 stroke-width=%220.9%22/%3E%3C/svg%3E')`,
          backgroundSize: '80px 80px',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, pl: { xs: 2.5, sm: 3 }, pr: { xs: 2.5, sm: 3 } }}>
        <Stack spacing={3}>
          <Stack spacing={1.5}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontSize: '0.75rem' }}>
              CV · Professional summary
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Resume
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              A concise view of my experience, education, and projects — aligned with what you&apos;ll find across
              this site.
            </Typography>
          </Stack>

          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.65rem' },
                  fontWeight: 800,
                  fontFamily: '"Syne", "Nunito", sans-serif',
                  letterSpacing: '-0.02em',
                  mb: 0.5,
                  color: cream,
                }}
              >
                Nergiz Rahimzade
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Front-end developer intern · Computer science student
              </Typography>

              <Stack spacing={1.25} divider={<Divider flexItem sx={{ borderColor: 'divider' }} />}>
                <Typography variant="body2" color="text.secondary">
                  1503 Fulton Ave, Sacramento, CA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="tel:+14423592299" color="primary.light" underline="hover">
                    (442) 359-2299
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href="mailto:nergisrahimzade123@gmail.com" color="primary.light" underline="hover">
                    nergisrahimzade123@gmail.com
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GitHub:{' '}
                  <Link
                    href="https://github.com/nergisRahimzade"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary.light"
                    underline="hover"
                  >
                    github.com/nergisRahimzade
                  </Link>
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <ResumeSectionCard title="Experience">
            <Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                  Irisco Solutions, Istanbul
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                  November 2025 – Present
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontWeight: 600 }}>
                Front-end developer intern
              </Typography>
              <BulletList
                items={[
                  { text: 'Develop responsive user interfaces using HTML, CSS, and JavaScript.' },
                  { text: 'Collaborate with developers to implement UI components and improve usability.' },
                  { text: 'Apply best practices for clean, maintainable front-end code.' },
                ]}
              />
            </Box>
          </ResumeSectionCard>

          <ResumeSectionCard title="Education">
            <Stack spacing={3}>
              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 0.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    Cosumnes River College, Sacramento
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    March 2026 – Present
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Computer science student
                </Typography>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    Marmara University, Istanbul
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    September 2024 – June 2025
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  Computer engineering student
                </Typography>
                <BulletList items={[{ text: 'GPA: 3.52 / 4.00.' }]} />
              </Box>

              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    Prof. Dr. Fuat Sezgin Science High School, Istanbul
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    October 2020 – June 2024
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                  High school diploma
                </Typography>
                <BulletList
                  items={[
                    { text: 'Graduated with 96% average.' },
                    {
                      text: 'Ranked top 0.3% among 3+ million students in Turkey’s national university entrance exam.',
                    },
                  ]}
                />
              </Box>
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Projects">
            <Stack spacing={3}>
              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    Tower Defense Game
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    April 2024 · Java, JavaFX
                  </Typography>
                </Box>
                <BulletList
                  items={[
                    { text: 'Developed a tower defense game in a team of three using Java and JavaFX.' },
                    { text: 'Implemented enemy movement, tower placement, and game logic.' },
                  ]}
                />
              </Box>

              <Divider sx={{ borderColor: 'divider' }} />

              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    Task Management Website
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    November 2025 · React, TypeScript
                  </Typography>
                </Box>
                <BulletList
                  items={[
                    { text: 'Built a task management web application with React and TypeScript.' },
                    { text: 'Implemented component-based architecture and state management.' },
                  ]}
                />
              </Box>

              <Divider sx={{ borderColor: 'divider' }} />

              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    Distance Calculator Website
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    December 2025 · React, TypeScript
                  </Typography>
                </Box>
                <BulletList
                  items={[
                    { text: 'Created a web application that calculates distance and travel duration between two cities.' },
                    { text: 'Integrated an external API to fetch real-time distance and duration data.' },
                  ]}
                />
              </Box>

              <Divider sx={{ borderColor: 'divider' }} />

              <Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
                    MUI Practice Website
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                    November 2025 · React, MUI
                  </Typography>
                </Box>
                <BulletList
                  items={[
                    { text: 'Built a website to practice using Material UI components.' },
                    { text: 'Customized themes and responsive layouts using MUI.' },
                  ]}
                />
              </Box>
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Skills">
            <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
              {[
                'Java',
                'C/C++',
                'CSS',
                'HTML',
                'JavaScript',
                'React',
                'Problem solving',
                'Creative thinking',
                'Collaboration',
              ].map((skill) => (
                <Chip key={skill} label={skill} {...chipProps} />
              ))}
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Languages">
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">
                <Box component="span" sx={{ fontWeight: 700, color: cream }}>
                  English
                </Box>{' '}
                — Professional
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Box component="span" sx={{ fontWeight: 700, color: cream }}>
                  Turkish
                </Box>{' '}
                — Native / bilingual
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Box component="span" sx={{ fontWeight: 700, color: cream }}>
                  Persian
                </Box>{' '}
                — Native / bilingual
              </Typography>
            </Stack>
          </ResumeSectionCard>
        </Stack>
      </Container>
    </Box>
  )
}
