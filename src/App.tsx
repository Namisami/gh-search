import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import theme from './ui/theme';
import router from './routers/router';
import { store } from './store/store';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Provider store={ store }>
        <RouterProvider router={ router } />
      </Provider>
    </ThemeProvider>
  )
};

export default App;
