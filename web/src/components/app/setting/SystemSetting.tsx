import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ColourfulText } from '@/components/ui/colourful-text';

export function SystemSetting() {
    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="version" className="text-right">
                    Version
                </Label>
                <Input id="version" className="col-span-3" value="0.1.0" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="version" className="text-right">
                    Name
                </Label>
                <h1 className="text-[90%]">
                    <ColourfulText text="Open Scheduler" />
                </h1>
            </div>
        </div>
    );
}
