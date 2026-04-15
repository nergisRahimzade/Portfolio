import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import certificatesList from './certificatesList.json'

const cream = '#ECDFD2'

const cardSx = {
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.22)',
} as const

type Certificate = {
  name: string
  year: string
  description: string
  tags: string[]
}

const certificates: Certificate[] = certificatesList as unknown as Certificate[]

export function CertificatesPage() {
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

      <Container
        maxWidth="md"
        sx={{ position: 'relative', zIndex: 1, pl: { xs: 2.5, sm: 3 }, pr: { xs: 2.5, sm: 3 } }}
      >
        <Stack spacing={3}>
          <Stack spacing={1.5} sx={{ mb: 1 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontSize: '0.75rem' }}>
              Learning · Credentials · Progress
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Certificates
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              Certificates I’ve earned while building my fundamentals — with the topics they map to across my projects.
            </Typography>
          </Stack>

          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
              <Stack spacing={2}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    fontFamily: '"Syne", "Nunito", sans-serif',
                    color: cream,
                  }}
                >
                  Certificates
                </Typography>

                <Stack spacing={2.5} divider={<Divider flexItem sx={{ borderColor: 'divider' }} />}>
                  {certificates.map((cert) => (
                    <Box key={`${cert.name}-${cert.year}`}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'baseline',
                          gap: 1,
                          columnGap: 2,
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="h2"
                          component="h3"
                          sx={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            fontFamily: '"Syne", "Nunito", sans-serif',
                            color: 'primary.light',
                          }}
                        >
                          {cert.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                          {cert.year}
                        </Typography>
                      </Box>

                      <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ mb: 2 }}>
                        {cert.tags.map((topic) => (
                          <Chip
                            key={topic}
                            label={topic}
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

                      <Box
                        sx={{
                          borderRadius: 3,
                          border: '1px solid',
                          borderColor: 'divider',
                          bgcolor: 'rgba(236, 223, 210, 0.06)',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            color: cream,
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            letterSpacing: '0.14em',
                            display: 'block',
                            mb: 0.75,
                          }}
                        >
                          Description
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                          {cert.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
