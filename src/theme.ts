import { createTheme } from '@mui/material/styles'

/**
 * Palette from:
 * https://www.figma.com/color-palette-generator/?colors=213885-081849-ECDFD2-CCCACC-5F3475-893172
 */
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#213885',
      // Explicit tints for links on dark backgrounds (auto-generated `light` was too faint).
      light: '#A8BFFF',
      dark: '#081849',
      contrastText: '#ECDFD2',
    },
    secondary: {
      main: '#5F3475',
      light: '#D8B8EC',
      dark: '#893172',
      contrastText: '#ECDFD2',
    },
    background: {
      default: '#081849',
      paper: '#213885',
    },
    text: {
      primary: '#ECDFD2',
      secondary: 'rgba(236, 223, 210, 0.78)',
    },
    divider: 'rgba(236, 223, 210, 0.18)',
  },
  typography: {
    fontFamily: '"Nunito", "DM Sans", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: '#ECDFD2',
    },
    h2: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#ECDFD2',
    },
    h3: {
      fontFamily: '"Syne", "Nunito", sans-serif',
      fontWeight: 700,
      color: '#ECDFD2',
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
          scrollbarColor: 'rgba(236, 223, 210, 0.35) transparent',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.light,
          fontWeight: 600,
          '&:hover': {
            color: theme.palette.secondary.light,
          },
        }),
      },
    },
  },
})
