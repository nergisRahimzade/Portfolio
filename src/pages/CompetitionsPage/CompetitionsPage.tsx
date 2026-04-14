import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded'

const cream = '#ECDFD2'

const cardSx = {
  border: '1px solid',
  borderColor: 'divider',
  bgcolor: 'background.paper',
  boxShadow: '6px 6px 0 rgba(0, 0, 0, 0.22)',
} as const

type Competition = {
  name: string
  year: string
  awardsWon?: string
}

const competitions: Competition[] = [
  { name: 'SacHacks VII', year: '2026', awardsWon: 'Best Design with No Code' },
]

export function CompetitionsPage() {
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
              Hackathons · Competitions · Community
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Competitions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              A small timeline of the hackathons and competitions I’ve attended — with outcomes, what I practiced, and
              (soon) photo memories.
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
                  Timeline
                </Typography>

                <Stack spacing={2.5} divider={<Divider flexItem sx={{ borderColor: 'divider' }} />}>
                  {competitions.map((c) => (
                    <Box key={`${c.name}-${c.year}`} sx={{ display: 'flex', gap: 2.25 }}>
                      <Box
                        aria-hidden
                        sx={{
                          mt: 0.8,
                          width: 10,
                          flex: '0 0 auto',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: 999,
                            bgcolor: 'secondary.main',
                            boxShadow: '0 0 0 4px rgba(95, 52, 117, 0.18)',
                          }}
                        />
                      </Box>

                      <Box sx={{ flex: 1, minWidth: 0 }}>
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
                            {c.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
                            {c.year}
                          </Typography>
                        </Box>

                        {c.awardsWon ? (
                          <Stack direction="row" flexWrap="wrap" gap={1} useFlexGap sx={{ mb: 1.5 }}>
                            <Chip
                              icon={<EmojiEventsRoundedIcon sx={{ color: cream }} />}
                              label={`🏆 ${c.awardsWon}`}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: 'rgba(236, 223, 210, 0.38)',
                                bgcolor: 'rgba(95, 52, 117, 0.26)',
                                color: cream,
                                fontWeight: 800,
                                '& .MuiChip-icon': { color: cream },
                              }}
                            />
                          </Stack>
                        ) : null}

                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                          Add a short story here later (what you built, your role, and what you learned). When you share
                          photos, I’ll turn this into a gallery section under each entry.
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
              <Stack spacing={1.25}>
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
                  Photos (coming next)
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  When you send the hackathon photos, I’ll add a responsive, cropped gallery that matches the site’s
                  card style (with captions and optional “view full” modal).
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  )
}
