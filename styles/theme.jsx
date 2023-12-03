import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    allVariants: {
      color: "#FFFFFF",
    },
    h1: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '48px',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '40px'
      }
    },
    h2: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '40px',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '32px'
      }
    },
    h3: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '32px',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px'
      }
    },
    h4: {
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24px',
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px'
      }
    },
    p: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face{
                    font-family: "'Plus Jakarta Sans', sans-serif";
                    font-style: 'normal';
                    color: red';
                }`,
    },
  },
  palette: {
    text: {
      primary: "#000",
    },
    primary: {
      main: "#0066FF",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;