import App from '@/App';
import AlertPage from '@/pages/AlertPage';
import DashboardPage from '@/pages/DashboardPage';
import Home from '@/pages/HomePage';
import IAMPage from '@/pages/IAMPage';
import LogPage from '@/pages/LogPage';
import ProjectPage from '@/pages/ProjectPage';
import SettingPage from '@/pages/SettingPage';
import TaskPage from '@/pages/TaskPage';
import WorkflowPage from '@/pages/WorkflowPage';
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
    {
        path: '/workflow',
        element: <WorkflowPage />,
    },
    {
        path: '/project',
        element: <ProjectPage />,
    },
    {
        path: '/dashboard',
        element: <DashboardPage />,
    },
]);
