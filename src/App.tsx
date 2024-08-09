import { AppBar, Container, createTheme, ThemeProvider, Toolbar } from '@mui/material'
import Search from './components/Search/Search';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    background: {
      default: '#00838F',
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <AppBar position='fixed' sx={{ backgroundColor: theme.palette.background.default }}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Search />
          </Toolbar>
        </Container>
      </AppBar>

    </ThemeProvider>
  )
}

export default App
