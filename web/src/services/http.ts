import axios from 'axios';
import type { AxiosInstance } from 'axios';

export class HTTPRequest {
    // Declare the axiosInstance property with its type
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:8000',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    public async post(path: string, body: unknown) {
        const res = await this.axiosInstance.post(path, body);
        return res.data;
    }
    public async get(path: string) {
        const res = await this.axiosInstance.get(path);
        return res.data;
    }
    public async delete(path: string) {
        const res = await this.axiosInstance.delete(path);
        return res.data;
    }
    public async put(path: string, body: unknown) {
        const res = await this.axiosInstance.put(path, body);
        return res.data;
    }
}

export const BackendServices = new HTTPRequest();
