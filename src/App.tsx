import { AppBar, Container, TextField, Toolbar } from '@mui/material'
import './App.css'

function App() {

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <TextField label='Введите поисковый запрос' variant='outlined' />
          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}

export default App
