import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IAMPolicies } from '@/constants/iam-policy';

function CreateRoleSection() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="ml-4 w-[16%]">
                    Create Role
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Role</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Role Name
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>

                    {Object.values(IAMPolicies).map((iamComponent) => {
                        return (
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="log policy" className="text-right">
                                    {iamComponent.name}
                                </Label>
                                <div className="flex flex-row gap-4">
                                    {iamComponent.policies.map((policy: string) => {
                                        return (
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {policy}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default CreateRoleSection;
