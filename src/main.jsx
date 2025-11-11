import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App.jsx'
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';

const router = createBrowserRouter(
    [
        { path: "/", element: <App /> },
        { path: "/sobre", element: <Sobre /> },
        { path: "/contato", element: <Contato /> },
    ]
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
