import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: ['Chakra Petch', 'sans-serif'].join(','),
    },
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[500],
    },
       
  },
});
