import { DisplaySuccessNotification } from '@/components/bases/ToastNotification';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UseCreateUser } from '@/hooks/use-create-user';
import { UseGetRoleList, UseGetUserList } from '@/hooks/use-list-iam';
import type { IRoleData } from '@/interfaces/role-table';
import { useState } from 'react';

function CreateUserSection() {
    const { mutate } = UseGetUserList(10, 0);
    const { data } = UseGetRoleList(10, 0);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleCreateSubmit = async () => {
        DisplaySuccessNotification('User is creating');
        const res = await UseCreateUser({ email: email, username: username, password: password, role: role });
        console.log(res);
        await mutate();
        DisplaySuccessNotification('User has been created');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="ml-4 w-[16%]">
                    Create User
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create User</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" className="col-span-3" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" className="col-span-3" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input id="password" type="password" className="col-span-3" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            Role
                        </Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-50">
                                    {role === '' ? 'Select a role' : role}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-50">
                                {data.map((roleData: IRoleData) => {
                                    return <DropdownMenuItem onSelect={() => setRole(roleData.name)}>{roleData.name}</DropdownMenuItem>;
                                })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button type="submit" onClick={handleCreateSubmit}>
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateUserSection;
