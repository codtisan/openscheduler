export type Payment = {
    id: string;
    status: 'pending' | 'processing' | 'success' | 'failed';
    email: string;
    username: string;
    role: string;
};
