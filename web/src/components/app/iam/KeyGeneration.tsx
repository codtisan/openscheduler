import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { KeyJsonSample } from '@/constants/key';
import { Download } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface KeyGenerationProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function KeyGeneration({ isOpen, setIsOpen }: KeyGenerationProps) {
    const handleKeyDownload = () => {
        const fileName = 'key.json';
        const data = JSON.stringify(KeyJsonSample, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Service Account</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="key" className="text-right">
                            Secret Key:
                        </Label>
                        <Label htmlFor="json" className="text-right">
                            key.json
                        </Label>
                        <Button onClick={handleKeyDownload}>
                            <Download />
                        </Button>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default KeyGeneration;
