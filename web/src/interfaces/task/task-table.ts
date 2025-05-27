export interface ITaskRecord {
    id: string;
    status: 'In Use' | 'Not In Use';
    name: string;
    description: string;
    target: string;
    interval: number;
    numOfRetry: number;
    createdAt: string;
    updatedAt: string;
}
