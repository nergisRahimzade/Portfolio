import { createTheme } from '@mui/material/styles'

/**
 * Palette from:
 * https://www.figma.com/color-palette-generator/?colors=213885-081849-ECDFD2-CCCACC-5F3475-893172
 */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#213885',
      dark: '#081849',
      contrastText: '#ECDFD2',
    },
    secondary: {
      main: '#5F3475',
      dark: '#893172',
      contrastText: '#ECDFD2',
    },
    background: {
      default: '#ECDFD2',
      paper: '#CCCACC',
    },
    text: {
      primary: '#081849',
      secondary: 'rgba(8, 24, 73, 0.75)',
    },
    divider: 'rgba(8, 24, 73, 0.18)',
  },
  typography: {
    fontFamily: '"Nunito", "DM Sans", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: '#081849',
    },
    h2: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#081849',
    },
    h3: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 700,
      color: '#213885',
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
          scrollbarColor: 'rgba(33, 56, 133, 0.45) transparent',
        },
      },
    },
  },
})
