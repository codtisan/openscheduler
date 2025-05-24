import axios from 'axios';
import type { AxiosInstance } from 'axios';

export class HTTPRequest {
    // Declare the axiosInstance property with its type
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:5000',
            timeout: 10000,
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
}

export const BackendServices = new HTTPRequest();
