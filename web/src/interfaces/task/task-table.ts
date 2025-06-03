export interface ITaskRecord {
    id: string;
    status: 'Running' | 'Stopped' | 'Created' | 'Deleting' | 'Restarting';
    name: string;
    type: 'HTTP' | 'Shell' | 'Remote Shell' | 'Python';
    description: string;
    target: string;
    interval: number;
    numOfRetry: number;
    createdAt: string;
    updatedAt: string;
}
