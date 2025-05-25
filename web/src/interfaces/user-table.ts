export type IUserData = {
    id: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    email: string;
    username: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};
