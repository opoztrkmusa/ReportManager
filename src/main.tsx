import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';
import { Provider } from "react-redux"
import { store } from './redux/store';


createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <MantineProvider>
      <App />
    </MantineProvider >
  </Provider>
);
