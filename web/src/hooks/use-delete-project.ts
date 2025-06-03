import { BackendServices } from '@/services/http';

export const UseDelete = async (url: string, id: string) => {
    try {
        const res = await BackendServices.delete(`${url}/${id}`);
        return res;
    } catch {
        return false;
    }
};
