import { BackendServices } from '@/services/http';

export interface CreateProjectOptions {
    name: string;
    description: string;
}

export const UseCreateServiceAccount = async (createOptions: CreateProjectOptions) => {
    try {
        const res = await BackendServices.post('/project/create', createOptions);
        return res;
    } catch {
        return false;
    }
};
