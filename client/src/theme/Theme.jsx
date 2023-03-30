import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ba933e',
    },
    secondary: {
      main: '#1a1a1a',
      light: '#ba933e',
      dark: '#ba933e',
      contrastText: '#fff',
    },
  },
});

export default theme;
