import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { IUserData } from '@/interfaces/user-table';
import type { Row } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { RoleDataSample } from '@/constants/role';
import type { IRoleData } from '@/interfaces/role-table';

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
                <Label htmlFor="role" className="text-right">
                    Role
                </Label>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-50">
                            Select a role
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-50">
                        {RoleDataSample.map((roleData: IRoleData) => {
                            return <DropdownMenuItem>{roleData.name}</DropdownMenuItem>;
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
