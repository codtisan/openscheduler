import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export interface LogDataDownloadMenuProps<T> {
    tableRows: T[];
}

export const LogDataDownloadMenu = <T,>({ tableRows }: LogDataDownloadMenuProps<T>) => {
    const handleLogDataDownload = (fileType: 'csv' | 'json') => {
        let fileName = '';
        switch (fileType) {
            case 'csv':
                fileName = 'data.csv';
                break;
            case 'json':
                fileName = 'data.json';
                break;
        }
        const data = JSON.stringify(tableRows, null, 2);
        const blob = new Blob([data], { type: fileType === 'json' ? 'application/json' : 'text/csv' });
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="default" className="ml-6">
                    Download
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleLogDataDownload('csv')}>csv</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLogDataDownload('json')}>json</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
