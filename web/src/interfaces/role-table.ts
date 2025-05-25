export type IRoleData = {
    id: string;
    name: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    createdAt: string;
    logPolicy: string[];
};
