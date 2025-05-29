export interface ITaskRecord {
    id: string;
    status: 'Running' | 'Stopped' | 'Created' | 'Deleting' | 'Restarting';
    name: string;
    description: string;
    target: string;
    interval: number;
    numOfRetry: number;
    createdAt: string;
    updatedAt: string;
}
