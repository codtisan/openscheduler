import App from '@/App';
import AlertPage from '@/pages/AlertPage';
import Home from '@/pages/HomePage';
import IAMPage from '@/pages/IAMPage';
import LogPage from '@/pages/LogPage';
import SettingPage from '@/pages/SettingPage';
import TaskPage from '@/pages/TaskPage';
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
    {
        path: '/log',
        element: <LogPage />,
    },
    {
        path: '/alert',
        element: <AlertPage />,
    },
    {
        path: '/task',
        element: <TaskPage />,
    },
]);
