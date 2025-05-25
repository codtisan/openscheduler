import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Switch } from '../../ui/switch';

export function PreferenceSetting() {
    return (
        <Dialog key="preference">
            <DialogTrigger asChild>
                <Button className="size-full text-4xl">Preference</Button>
            </DialogTrigger>
            <DialogContent className="w-[60%]">
                <DialogHeader>
                    <DialogTitle>Edit Preference</DialogTitle>
                    <DialogDescription>Make changes to your preference here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Dark Mode
                        </Label>
                        <Switch id="airplane-mode" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit">Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
