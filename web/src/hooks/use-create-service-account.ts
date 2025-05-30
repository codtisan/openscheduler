import { BackendServices } from '@/services/http';

export interface CreateServiceAccountOptions {
    username: string;
    email: string;
    role: string;
}

export const CreateServiceAccount = async (createOptions: CreateServiceAccountOptions) => {
    try {
        const res = await BackendServices.post('/serviceaccount/create', createOptions);
        return res;
    } catch {
        return false;
    }
};
