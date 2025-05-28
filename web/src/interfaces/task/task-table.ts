export interface ITaskRecord {
    id: string;
    status: 'Online' | 'Offline';
    name: string;
    description: string;
    target: string;
    interval: number;
    numOfRetry: number;
    createdAt: string;
    updatedAt: string;
}
