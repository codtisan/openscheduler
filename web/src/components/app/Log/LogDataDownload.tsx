import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export interface LogDataDownloadMenuProps<T extends object> {
    tableRows: T[];
}

export const LogDataDownloadMenu = <T extends object>({ tableRows }: LogDataDownloadMenuProps<T>) => {
    const handleLogDataDownload = (fileType: 'csv' | 'json') => {
        let fileName = '';
        let data = '';
        switch (fileType) {
            case 'csv': {
                fileName = 'data.csv';
                const headers = Object.keys(tableRows[0]);
                const rows = tableRows.map((row: T) => {
                    const stringifiedData = Object.values(row).map((data) => {
                        if (typeof data === 'object') {
                            return JSON.stringify(data);
                        }
                        return data;
                    });
                    return stringifiedData.join(',');
                });
                data = [headers.join(','), ...rows].join('\n');
                break;
            }
            case 'json':
                fileName = 'data.json';
                data = JSON.stringify(tableRows, null, 2);
                break;
        }
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
