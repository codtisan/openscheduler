import { Label } from '@/components/ui/label';
import { Switch } from '../../ui/switch';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languageList, type ILanguageChoice } from '@/constants/languages';
import { Input } from '@/components/ui/input';

export function PreferenceSetting() {
    return (
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Dark Mode
                </Label>
                <Switch id="airplane-mode" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="language" className="text-right">
                    Language
                </Label>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-40">
                            Select a language
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40" side="right">
                        <DropdownMenuGroup>
                            <Input type="search" placeholder="Search language" />
                            <DropdownMenuSeparator />
                            {languageList.map((language: ILanguageChoice) => {
                                return <DropdownMenuItem>{language.title}</DropdownMenuItem>;
                            })}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
