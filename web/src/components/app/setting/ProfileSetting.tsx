import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ProfileSetting() {
    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Username
                </Label>
                <Input id="username" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="avatar" className="text-right">
                    Avatar
                </Label>
                <Input id="avatar" className="col-span-3" type="file" />
            </div>
        </div>
    );
}
