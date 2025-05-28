import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '../ui/button';
import { Power, RotateCcw, StopCircle } from 'lucide-react';
import { DataTableDeleteButton, DataTableEditButton } from './DataTableActions';
import { EditTaskSection } from '../app/task/EditTaskSection';
import type { ITaskRecord } from '@/interfaces/task/task-table';
import type { Row } from '@tanstack/react-table';

export interface EditTaskProps {
    rowData: Row<ITaskRecord>;
}

export const DataTableOperations = ({ rowData }: EditTaskProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="rounded-4xl bg-green-500">
                        <Power />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Run</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="rounded-4xl bg-red-500">
                        <StopCircle />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Stop</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="rounded-4xl bg-blue-500">
                        <RotateCcw />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Restart</p>
                </TooltipContent>
            </Tooltip>
            <DataTableDeleteButton />
            <DataTableEditButton EditPage={<EditTaskSection rowData={rowData} />} headerName="Task" />
        </TooltipProvider>
    );
};
