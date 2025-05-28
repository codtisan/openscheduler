import type { ITaskRecord } from '@/interfaces/task/task-table';

export const TaskRecordSample: ITaskRecord[] = [
    {
        id: 'task001',
        status: 'Online',
        name: 'Daily Backup',
        description: 'Automated daily backup of the database',
        target: 'https://api.example.com/database/backup',
        interval: 86400, // 24 hours in seconds
        numOfRetry: 3,
        createdAt: '2025-05-01T10:00:00Z',
        updatedAt: '2025-05-27T09:00:00Z',
    },
    {
        id: 'task002',
        status: 'Offline',
        name: 'User Sync',
        description: 'Synchronize user data with external API',
        target: 'https://api.user-service.com/sync',
        interval: 3600, // 1 hour in seconds
        numOfRetry: 5,
        createdAt: '2025-04-15T14:30:00Z',
        updatedAt: '2025-05-20T12:00:00Z',
    },
    {
        id: 'task003',
        status: 'Online',
        name: 'Log Cleanup',
        description: 'Remove logs older than 30 days',
        target: 'https://logs.example.com/cleanup',
        interval: 604800, // 7 days in seconds
        numOfRetry: 2,
        createdAt: '2025-03-10T08:00:00Z',
        updatedAt: '2025-05-25T07:00:00Z',
    },
    {
        id: 'task004',
        status: 'Online',
        name: 'Cache Refresh',
        description: 'Refresh application cache',
        target: 'https://cache.example.com/refresh',
        interval: 1800, // 30 minutes in seconds
        numOfRetry: 4,
        createdAt: '2025-05-05T16:00:00Z',
        updatedAt: '2025-05-27T15:00:00Z',
    },
    {
        id: 'task005',
        status: 'Offline',
        name: 'Report Generation',
        description: 'Generate monthly performance report',
        target: 'https://reports.example.com/generate',
        interval: 2592000, // 30 days in seconds
        numOfRetry: 1,
        createdAt: '2025-02-20T09:00:00Z',
        updatedAt: '2025-05-01T10:00:00Z',
    },
    {
        id: 'task006',
        status: 'Online',
        name: 'Health Check',
        description: 'Perform system health checks',
        target: 'https://monitor.example.com/health',
        interval: 300, // 5 minutes in seconds
        numOfRetry: 3,
        createdAt: '2025-04-01T11:00:00Z',
        updatedAt: '2025-05-27T10:00:00Z',
    },
    {
        id: 'task007',
        status: 'Offline',
        name: 'Data Migration',
        description: 'Migrate data to new storage',
        target: 'https://storage.example.com/migrate',
        interval: 0, // One-time task
        numOfRetry: 2,
        createdAt: '2025-01-15T13:00:00Z',
        updatedAt: '2025-03-10T14:00:00Z',
    },
    {
        id: 'task008',
        status: 'Online',
        name: 'Index Optimization',
        description: 'Optimize database indexes',
        target: 'https://db.example.com/optimize',
        interval: 604800, // 7 days in seconds
        numOfRetry: 3,
        createdAt: '2025-05-10T12:00:00Z',
        updatedAt: '2025-05-26T11:00:00Z',
    },
    {
        id: 'task009',
        status: 'Online',
        name: 'Email Notifications',
        description: 'Send user notification emails',
        target: 'https://email.example.com/notify',
        interval: 3600, // 1 hour in seconds
        numOfRetry: 5,
        createdAt: '2025-04-25T15:00:00Z',
        updatedAt: '2025-05-27T14:00:00Z',
    },
    {
        id: 'task010',
        status: 'Offline',
        name: 'Audit Log',
        description: 'Generate audit logs for compliance',
        target: 'https://audit.example.com/logs',
        interval: 86400, // 24 hours in seconds
        numOfRetry: 2,
        createdAt: '2025-03-01T10:00:00Z',
        updatedAt: '2025-05-15T09:00:00Z',
    },
];
