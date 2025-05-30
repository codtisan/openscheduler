import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';
import KeyGeneration from './KeyGeneration';
import { CreateServiceAccount } from '@/hooks/use-create-service-account';
import type { CreateServiceAccountOptions } from '@/hooks/use-create-service-account';
function CreateServiceAccountSection() {
    const [createOptions, setCreateOptions] = useState<CreateServiceAccountOptions>({
        email: '',
        username: '',
        role: '',
    });
    const [isKeyGeneration, setIsKeyGeneration] = React.useState(false);

    if (isKeyGeneration) {
        return <KeyGeneration isOpen={isKeyGeneration} setIsOpen={setIsKeyGeneration} />;
    }

    const handleCreateSubmit = async () => {
        const res = await CreateServiceAccount(createOptions);
        if (res.status === 'success') {
            setIsKeyGeneration(true);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="ml-4 w-[16%]">
                    Create Service Account
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Service Account</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            className="col-span-3"
                            onChange={(e) =>
                                setCreateOptions((previousOptions) => {
                                    return { ...previousOptions, email: e.target.value };
                                })
                            }
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            className="col-span-3"
                            onChange={(e) =>
                                setCreateOptions((previousOptions) => {
                                    return { ...previousOptions, username: e.target.value };
                                })
                            }
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="role" className="text-right">
                            Role
                        </Label>
                        <Input
                            id="role"
                            className="col-span-3"
                            onChange={(e) =>
                                setCreateOptions((previousOptions) => {
                                    return { ...previousOptions, role: e.target.value };
                                })
                            }
                        />
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

export default CreateServiceAccountSection;
