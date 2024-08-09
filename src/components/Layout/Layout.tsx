import { AppBar, Container, Toolbar, Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Search from '../../components/Search/Search';
import styles from './Layout.module.sass';

const Layout = () => {
  const theme = useTheme();
  
  return (
    <>
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
        <Outlet />
      </Container>
      <Box className={ styles.footer }/>
    </>
  )
};

export default Layout;
