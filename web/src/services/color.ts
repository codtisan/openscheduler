export const statusToColor = (status: 'success' | 'failed' | 'timeout' | 'processing' | 'pending'): string => {
    switch (status.toLowerCase()) {
        case 'success':
            return 'bg-green-300';
        case 'failed':
            return 'bg-red-300';
        case 'in use':
            return 'bg-green-300';
        case 'not in use':
            return 'bg-red-300';
        case 'timeout':
            return 'bg-yellow-300';
        case 'processing':
            return 'bg-purple-300';
        case 'pending':
            return 'bg-orange-300';
        default:
            return 'bg-gray-300';
    }
};
