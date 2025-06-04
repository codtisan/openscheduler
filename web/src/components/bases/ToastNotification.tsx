import { toast } from 'sonner';

export const DisplaySuccessNotification = (message: string) => {
    return toast.success(message, {
        action: {
            label: 'Cancel',
            onClick: () => console.log('Cancel'),
        },
    });
};

export const DisplayErrorNotification = (message: string) => {
    return toast.error(message, {
        action: {
            label: 'Cancel',
            onClick: () => console.log('Cancel'),
        },
    });
};
