export const statusToColor = (status: 'success' | 'failed' | 'timeout' | 'processing' | 'pending'): string => {
    switch (status.toLowerCase()) {
        case 'success':
            return 'bg-green-300';
        case 'failed':
            return 'bg-red-300';
        case 'online':
            return 'bg-green-300';
        case 'offline':
            return 'bg-red-300';
        case 'timeout':
            return 'bg-yellow-300';
        case 'processing':
            return 'bg-purple-300';
        case 'pending':
            return 'bg-orange-300';
        case 'running':
            return 'bg-green-300';
        case 'restarting':
            return 'bg-yellow-300';
        case 'deleting':
            return 'bg-red-300';
        case 'stopped':
            return 'bg-gray-300';
        case 'created':
            return 'bg-blue-300';
        default:
            return 'bg-gray-300';
    }
};
