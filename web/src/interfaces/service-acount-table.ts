export type ServiceAccountRow = {
    id: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    email: string;
    username: string;
    token: string;
    role: string;
    createdAt: string;
};
