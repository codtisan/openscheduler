export type IRoleData = {
    id: string;
    name: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    logPolicy: string[];
    dashboardPolicy: string[];
    logViewPolicy: string[];
    workflowPolicy: string[];
    alertPolicy: string[];
    taskPolicy: string[];
    createdAt: string;
    updatedAt: string;
};
