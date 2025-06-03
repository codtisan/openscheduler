import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { UseCreateServiceAccount } from '@/hooks/use-create-project';
import { UseGetProjectList } from '@/hooks/use-list-project';
import { useState } from 'react';

export const CreateProjectSection = () => {
    const { mutate } = UseGetProjectList(10, 0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateSubmit = async () => {
        const res = await UseCreateServiceAccount({ name: name, description: description });
        console.log(res);
        await mutate();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="ml-4 w-[16%]">
                    Create Project
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" className="col-span-3" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea placeholder="Put your description here" className="h-40" onChange={(e) => setDescription(e.target.value)} />
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
};
