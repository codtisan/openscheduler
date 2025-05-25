export type IResponseLogData = {
    id: string;
    auditlogId: string;
    resource: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    api: string;
    latency: number;
    payload: object;
    createdAt: string;
};
