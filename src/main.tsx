import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './pages/Error.tsx';
import HomePage from './pages/HomePage.tsx';
import { ThemeSettings } from './utils/theme/Theme.tsx';
import { ThemeProvider } from '@mui/material/styles';
import ClientsList from './components/clients/clientsList.tsx';
import ClientForm from './components/clients/clientForm.tsx';
import { Provider } from 'react-redux';
import store from './store/appStore';
import { ClientProvider } from './context/ClientContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
        errorElement: <Error />
      },
      {
        path: "/clients",
        element: <ClientsList />,
        errorElement: <Error />,
      },
      {
        path: "/clients/register/",
        element: <ClientForm />,
        errorElement: <Error />,
      },
    ]
  }
]);

const theme = ThemeSettings();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <ClientProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </ClientProvider>
    </Provider>
  </StrictMode>
);