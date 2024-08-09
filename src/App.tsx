import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './ui/theme';
import router from './routers/router';

function App() {

  return (
    <ThemeProvider theme={ theme }>
      <RouterProvider router={ router } />
    </ThemeProvider>
  )
};

export default App;
