import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Link as RouterLink, Route, Routes, useLocation } from 'react-router-dom'
import { CertificatesPage } from './pages/CertificatesPage/CertificatesPage'
import { CompetitionsPage } from './pages/CompetitionsPage/CompetitionsPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { HomePage } from './pages/HomePage/HomePage'
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage'
import { ResumePage } from './pages/ResumePage/ResumePage'
import { AiChatbot } from './components/AiChatbot/AiChatbot'
import { theme } from './theme'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/competitions', label: 'Competitions' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/contact', label: 'Contact' },
] as const

function isNavActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

function SiteHeader() {
  const location = useLocation()

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap', gap: 0.5, py: 1, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
        {navItems.map(({ to, label }) => {
          const active = isNavActive(location.pathname, to)
          return (
            <Button
              key={to}
              component={RouterLink}
              to={to}
              size="small"
              color="inherit"
              sx={{
                textTransform: 'none',
                minWidth: 'auto',
                fontWeight: active ? 800 : 600,
                borderBottom: active ? '2px solid' : '2px solid transparent',
                borderColor: active ? 'secondary.main' : 'transparent',
                borderRadius: 0,
                px: 1,
                py: 0.5,
              }}
            >
              {label}
            </Button>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

function AppRoutes() {
  return (
    <>
      <SiteHeader />
      <Box sx={{ bgcolor: 'background.default', minHeight: 'calc(100vh - 57px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
      <AiChatbot />
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
