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
        errorElement: <Error />
      },
    ]
  }
]);

const theme = ThemeSettings();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
