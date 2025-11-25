import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.jsx'
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';

import ChamadosIndex from './pages/chamados/ChamadosIndex.jsx';
import ChamadosCreate from './pages/chamados/ChamadosCreate.jsx';
import ChamadosShow from './pages/chamados/ChamadosShow.jsx';
import ChamadosEdit from './pages/chamados/ChamadosEdit.jsx';

const router = createBrowserRouter(
    [
        { path: "/", element: <App /> },
        { path: "/sobre", element: <Sobre /> },
        { path: "/contato", element: <Contato /> },

        { path: "/chamados", element: <ChamadosIndex /> },
        { path: "/chamados/create", element: <ChamadosCreate /> },
        { path: "/chamados/:id", element: <ChamadosShow /> },
        { path: "/chamados/:id/edit", element: <ChamadosEdit /> },
    ]
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
