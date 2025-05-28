import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { IUserData } from '@/interfaces/user-table';
import type { Row } from '@tanstack/react-table';

export interface EditUserProps {
    rowData: Row<IUserData>;
}

export const EditUserSection = ({ rowData }: EditUserProps) => {
    return (
        <div className="ml-4 flex flex-col gap-6">
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Email</Label>
                <Input value={rowData.getValue('email')} />
            </div>
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Username</Label>
                <Input value={rowData.getValue('username')} />
            </div>
            <div className="flex flex-row gap-5 max-w-[80%] items-center">
                <Label>Role</Label>
                <Input value={rowData.getValue('role')} />
            </div>
        </div>
    );
};
