import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c4b5fd',
    },
    secondary: {
      main: '#22d3ee',
    },
    background: {
      default: '#06060a',
      paper: 'rgba(255, 255, 255, 0.06)',
    },
    text: {
      primary: '#f4f4f8',
      secondary: 'rgba(244, 244, 248, 0.72)',
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Syne", "DM Sans", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: '"Syne", "DM Sans", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Syne", "DM Sans", sans-serif',
      fontWeight: 700,
    },
    subtitle1: {
      lineHeight: 1.65,
    },
    body1: {
      lineHeight: 1.75,
    },
    body2: {
      lineHeight: 1.7,
    },
    overline: {
      letterSpacing: '0.14em',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: 'rgba(255,255,255,0.2) transparent',
        },
      },
    },
  },
})
