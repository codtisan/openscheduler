export type IAlertData = {
    id: string;
    type: 'task' | 'workflow';
    name: string;
    description: string;
    statusCode: number;
    status: 'Success' | 'Failed' | 'Timeout';
    createdAt: string;
};
