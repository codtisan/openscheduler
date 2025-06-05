import { BackendServices } from '@/services/http';

export interface CreateUserOptions {
    email: string;
    username: string;
    password: string;
    role: string;
}

export const UseCreateUser = async (createOptions: CreateUserOptions) => {
    try {
        const res = await BackendServices.post('/user/create', createOptions);
        return res;
    } catch {
        return false;
    }
};
