import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const deepNavy = '#081849'
const cream = '#ECDFD2'

const paperLine = 'rgba(33, 56, 133, 0.22)'
const paperInk = '#081849'

const RULED_LINE_PX = 28

const contact = {
  name: 'Nergis Rahimzade',
  email: 'nergisrahimzade123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nergiz-rahimzade-183967337/',
  github: 'https://github.com/nergisRahimzade',
} as const

export function ContactPage() {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        py: { xs: 4, md: 6 },
        backgroundColor: deepNavy,
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
        <Stack spacing={3.5}>
          <Stack spacing={1.5} sx={{ mb: 1 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontSize: '0.75rem' }}>
              Let’s connect
            </Typography>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Contact
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              If you want to collaborate, ask about a project, or just say hi, the easiest way is email or LinkedIn.
            </Typography>
          </Stack>

          <Box
            component="section"
            aria-labelledby="contact-card-title"
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              border: '1px solid rgba(236, 223, 210, 0.35)',
              boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.28)',
              transform: 'rotate(-0.25deg)',
              maxWidth: 760,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                bgcolor: cream,
                color: paperInk,
                pl: { xs: 2.25, sm: 3 },
                pr: { xs: 2, sm: 2.5 },
                pt: 2.25,
                pb: 2,
                backgroundImage: `repeating-linear-gradient(
                  transparent 0,
                  transparent ${RULED_LINE_PX - 1}px,
                  ${paperLine} ${RULED_LINE_PX - 1}px,
                  ${paperLine} ${RULED_LINE_PX}px
                )`,
                backgroundSize: `100% ${RULED_LINE_PX}px`,
                backgroundPosition: '0 12px',
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 12,
                  bottom: 12,
                  left: { xs: 18, sm: 22 },
                  width: 3,
                  borderRadius: 1,
                  bgcolor: '#d64550',
                  opacity: 0.95,
                }}
              />

              <Box sx={{ pl: { xs: 2.5, sm: 3.25 } }}>
                <Typography
                  id="contact-card-title"
                  variant="h3"
                  component="h2"
                  sx={{
                    fontFamily: '"Syne", "Nunito", sans-serif',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    lineHeight: `${RULED_LINE_PX}px`,
                    mb: `${RULED_LINE_PX}px`,
                    color: paperInk,
                  }}
                >
                  Contact details
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(8, 24, 73, 0.72)',
                    lineHeight: `${RULED_LINE_PX}px`,
                    mb: `${RULED_LINE_PX}px`,
                    fontWeight: 700,
                  }}
                >
                  {contact.name}
                </Typography>

                <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                  {[
                    {
                      label: 'Email',
                      value: contact.email,
                      href: `mailto:${contact.email}`,
                      emoji: '✉️',
                    },
                    {
                      label: 'LinkedIn',
                      value: 'linkedin.com/in/nergiz-rahimzade-183967337',
                      href: contact.linkedin,
                      emoji: '🔗',
                    },
                    {
                      label: 'GitHub',
                      value: 'github.com/nergisRahimzade',
                      href: contact.github,
                      emoji: '💻',
                    },
                  ].map((item) => (
                    <Box
                      key={item.label}
                      component="li"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        minHeight: RULED_LINE_PX,
                        lineHeight: `${RULED_LINE_PX}px`,
                        flexWrap: 'wrap',
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          width: { xs: 92, sm: 110 },
                          flex: '0 0 auto',
                          fontFamily: '"Nunito", sans-serif',
                          fontWeight: 900,
                          letterSpacing: '0.01em',
                          color: paperInk,
                        }}
                      >
                        {item.emoji} {item.label}
                      </Typography>

                      <Link
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        sx={{
                          color: paperInk,
                          fontWeight: 800,
                          textDecoration: 'underline',
                          textUnderlineOffset: 4,
                          '&:hover': { color: 'rgba(8, 24, 73, 0.75)' },
                        }}
                      >
                        {item.value}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
