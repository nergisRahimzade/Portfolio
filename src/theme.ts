import { createTheme } from '@mui/material/styles'

/** Youthful palette: cream, light yellow, navy, dark brown + light green & pink accents */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a3554',
      light: '#2d4a6e',
      dark: '#0f2138',
      contrastText: '#fffef8',
    },
    secondary: {
      main: '#5c4032',
      light: '#7d5c4a',
      dark: '#3d2a20',
      contrastText: '#fffef8',
    },
    background: {
      default: '#fdf6e9',
      paper: '#fffef6',
    },
    text: {
      primary: '#3d2918',
      secondary: 'rgba(61, 41, 24, 0.78)',
    },
    success: {
      main: '#6b9e7d',
      light: '#c5e8d0',
      dark: '#3d6b4d',
    },
    error: {
      main: '#c97b8f',
      light: '#ffd6e4',
      dark: '#8f4a5c',
    },
    info: {
      main: '#5a7a8f',
      light: '#d4e8f0',
      dark: '#2d4a5c',
    },
    warning: {
      main: '#c9a227',
      light: '#fff3c4',
      dark: '#8a6e18',
    },
  },
  typography: {
    fontFamily: '"Nunito", "DM Sans", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: '#1a3554',
    },
    h2: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#1a3554',
    },
    h3: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 700,
      color: '#243a5f',
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
      letterSpacing: '0.12em',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: 'rgba(26, 53, 84, 0.35) transparent',
        },
      },
    },
  },
})
