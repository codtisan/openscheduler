import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from './routes/routes.tsx';
import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Toaster richColors={true} position="bottom-center" />
        <RouterProvider router={router} />
    </StrictMode>
);
