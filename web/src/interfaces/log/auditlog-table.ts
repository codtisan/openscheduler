export type IAuditlogData = {
    id: string;
    userId: string;
    useragent: string;
    ip: string;
    resource: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    api: string;
    body: object;
    createdAt: string;
};
