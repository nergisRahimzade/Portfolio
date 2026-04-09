import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export function CertificatesPage() {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 }, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
          Certificates
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Coming soon.
        </Typography>
      </Container>
    </Box>
  )
}
