import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    background: {
      default: '#00838F',
      paper: '#4F4F4F',
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 32px !important',
        }
      }
    }
  }
});

export default theme;
