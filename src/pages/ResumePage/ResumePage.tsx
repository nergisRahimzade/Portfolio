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
import resumeList from './resumeList.json'

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

type ResumeEntry = {
  organization: string
  dates: string
  role?: string
  bullets?: string[]
}

type ResumeProject = {
  name: string
  meta: string
  bullets: string[]
}

type ResumeData = {
  header: { overline: string; title: string; summary: string }
  contact: {
    name: string
    title: string
    address: string
    phoneLabel: string
    phoneHref: string
    email: string
    githubUrl: string
    githubLabel: string
  }
  experience: ResumeEntry[]
  education: ResumeEntry[]
  projects: ResumeProject[]
  skills: string[]
  languages: { name: string; level: string }[]
}

const resume = resumeList as unknown as ResumeData

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

function BulletList({ items }: { items: string[] }) {
  return (
    <Stack component="ul" spacing={1} sx={{ m: 0, pl: 2.25 }}>
      {items.map((text) => (
        <Typography
          key={text}
          component="li"
          variant="body2"
          color="text.secondary"
          sx={{ lineHeight: 1.75, display: 'list-item' }}
        >
          {text}
        </Typography>
      ))}
    </Stack>
  )
}

function EntryItem({
  organization,
  dates,
  role,
  roleBold,
  bullets,
}: ResumeEntry & { roleBold?: boolean }) {
  const hasBullets = Boolean(bullets && bullets.length > 0)
  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2, mb: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: cream }}>
          {organization}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
          {dates}
        </Typography>
      </Box>
      {role ? (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: hasBullets ? 1.5 : 0, fontWeight: roleBold ? 600 : undefined }}
        >
          {role}
        </Typography>
      ) : null}
      {hasBullets ? <BulletList items={bullets as string[]} /> : null}
    </Box>
  )
}

export function ResumePage() {
  const { header, contact, experience, education, projects, skills, languages } = resume

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
              {header.overline}
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              {header.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              {header.summary}
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
                {contact.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {contact.title}
              </Typography>

              <Stack spacing={1.25} divider={<Divider flexItem sx={{ borderColor: 'divider' }} />}>
                <Typography variant="body2" color="text.secondary">
                  {contact.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href={contact.phoneHref} color="primary.light" underline="hover">
                    {contact.phoneLabel}
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Link href={`mailto:${contact.email}`} color="primary.light" underline="hover">
                    {contact.email}
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GitHub:{' '}
                  <Link
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary.light"
                    underline="hover"
                  >
                    {contact.githubLabel}
                  </Link>
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <ResumeSectionCard title="Experience">
            <Stack spacing={3}>
              {experience.map((item) => (
                <EntryItem key={item.organization} {...item} roleBold />
              ))}
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Education">
            <Stack spacing={3}>
              {education.map((item) => (
                <EntryItem key={item.organization} {...item} />
              ))}
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Projects">
            <Stack spacing={3} divider={<Divider sx={{ borderColor: 'divider' }} />}>
              {projects.map((project) => (
                <EntryItem
                  key={project.name}
                  organization={project.name}
                  dates={project.meta}
                  bullets={project.bullets}
                />
              ))}
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Skills">
            <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} {...chipProps} />
              ))}
            </Stack>
          </ResumeSectionCard>

          <ResumeSectionCard title="Languages">
            <Stack spacing={1}>
              {languages.map((language) => (
                <Typography key={language.name} variant="body2" color="text.secondary">
                  <Box component="span" sx={{ fontWeight: 700, color: cream }}>
                    {language.name}
                  </Box>{' '}
                  — {language.level}
                </Typography>
              ))}
            </Stack>
          </ResumeSectionCard>
        </Stack>
      </Container>
    </Box>
  )
}
