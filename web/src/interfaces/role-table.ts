export type IRoleData = {
    id: string;
    name: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    logPolicy: string[];
    createdAt: string;
    updatedAt: string;
};
