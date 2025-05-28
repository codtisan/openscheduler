import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '../ui/button';
import { Pencil, Power, RotateCcw, StopCircle, Trash } from 'lucide-react';

export const DataTableActions = () => {
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
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="rounded-4xl">
                        <Trash />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Delete</p>
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className="rounded-4xl bg-purple-500">
                        <Pencil />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Edit</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
