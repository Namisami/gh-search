import { AppBar, Container, ThemeProvider, Toolbar, Typography, Box } from '@mui/material';
import theme from './ui/theme';
import Search from './components/Search/Search';
import styles from './App.module.sass';

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <AppBar 
        position='static' 
        sx={{ backgroundColor: theme.palette.background.default }}
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Search />
          </Toolbar>
        </Container>
      </AppBar>
      <Container className={ styles.main } maxWidth='xl'>
        <div className={ styles.welcomeWrapper }>
          <Typography 
            className={ styles.welcome }
            variant='body1'
            component='span'
          >
            Добро пожаловать
          </Typography>
        </div>
      </Container>
      <Box className={ styles.footer }/>
    </ThemeProvider>
  )
};

export default App;
