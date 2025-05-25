import useSettingSearchStore from '@/store/useSettingSearchStore';
import { SettingList, type ISettingItem } from './SettingList';
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

function SettingPanel() {
    const { searchInput } = useSettingSearchStore();
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedSetting, setSelectedSetting] = React.useState<ISettingItem | null>(null);

    const handleOpenDialog = (setting: ISettingItem) => {
        setSelectedSetting(setting);
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
        setSelectedSetting(null);
    };

    return (
        <div className="flex gap-4">
            {SettingList.map((setting) => {
                if (setting.title.toLowerCase().includes(searchInput)) {
                    return (
                        <div className="w-[20%] h-50" key={setting.title}>
                            <Button className="size-full text-4xl" onClick={() => handleOpenDialog(setting)}>
                                {setting.title}
                            </Button>
                        </div>
                    );
                }
            })}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-[60%]">
                    <DialogHeader>
                        <DialogTitle>Edit {selectedSetting?.title}</DialogTitle>
                        <DialogDescription>Make changes to your {selectedSetting?.title} here. Click save when you're done.</DialogDescription>
                    </DialogHeader>
                    {selectedSetting?.element}
                    <DialogFooter>
                        <Button variant="ghost" onClick={handleCloseDialog}>
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleCloseDialog}>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SettingPanel;
