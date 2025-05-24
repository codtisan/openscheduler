import App from '@/App';
import Home from '@/pages/HomePage';
import IAMPage from '@/pages/IAMPage';
import SettingPage from '@/pages/SettingPage';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/settings',
        element: <SettingPage />,
    },
    {
        path: '/iam',
        element: <IAMPage />,
    },
]);
