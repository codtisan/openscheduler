import { Label } from '@/components/ui/label';
import { Switch } from '../../ui/switch';

export function PreferenceSetting() {
    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Dark Mode
                </Label>
                <Switch id="airplane-mode" />
            </div>
        </div>
    );
}
