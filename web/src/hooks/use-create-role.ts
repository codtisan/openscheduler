import { BackendServices } from '@/services/http';

export interface CreateRoleOptions {
    name: string;
    dashboard: string[];
    log: string[];
    task: string[];
    workflow: string[];
    alert: string[];
}

export const UseCreateRole = async (createOptions: CreateRoleOptions) => {
    try {
        const res = await BackendServices.post('/role/create', createOptions);
        return res;
    } catch {
        return false;
    }
};
