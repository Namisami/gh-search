import { AppBar, Container, Toolbar, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Search from '../../components/Search/Search';
import styles from './Layout.module.sass';

const Layout = () => {  
  return (
    <>
      <AppBar 
        position='static' 
        sx={{ backgroundColor: '#00838F' }}
        elevation={ 0 }
      >
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Search />
          </Toolbar>
        </Container>
      </AppBar>
      <main className={ styles.main }>
        <Outlet />
      </main>
      <Box className={ styles.footer }/>
    </>
  )
};

export default Layout;
