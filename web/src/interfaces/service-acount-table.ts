export type IServiceAccountData = {
    id: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    email: string;
    username: string;
    privateKey: string;
    publicKey: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};
