import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import projectsListRaw from './projectsList.txt?raw'

export type Project = {
  name: string
  description: string
  techStack: string[]
  date: number
  githubRepoLink: string
}

const projects: Project[] = JSON.parse(projectsListRaw) as Project[]

export function ProjectsPage() {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 }, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 1 }}>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          A few things I&apos;ve built — each card links to the GitHub repository.
        </Typography>

        <Stack spacing={3}>
          {projects.map((project) => (
            <Card
              key={project.githubRepoLink}
              elevation={0}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.22)',
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 1, columnGap: 2 }}>
                    <Link
                      href={project.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="h2"
                      sx={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        fontFamily: '"Syne", "Nunito", sans-serif',
                        color: 'primary.light',
                        textDecoration: 'underline',
                        textUnderlineOffset: 4,
                        '&:hover': { color: 'secondary.light' },
                      }}
                    >
                      {project.name}
                    </Link>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                      {project.date}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {project.description}
                  </Typography>

                  <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ pt: 0.5 }}>
                    {project.techStack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          borderColor: 'rgba(236, 223, 210, 0.35)',
                          color: 'text.primary',
                          bgcolor: 'rgba(236, 223, 210, 0.08)',
                          fontWeight: 600,
                        }}
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
