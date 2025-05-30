import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '../ui/button';
import { Pencil, Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import type React from 'react';

export interface DataTableEditProps {
    EditPage: React.ReactNode | null;
    headerName: string;
}

export const DataTableDeleteButton = () => {
    return (
        <Tooltip>
            <AlertDialog>
                <TooltipTrigger asChild>
                    <AlertDialogTrigger asChild>
                        <Button className="rounded-4xl">
                            <Trash />
                        </Button>
                    </AlertDialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Delete</p>
                </TooltipContent>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure to delete?</AlertDialogTitle>
                        <AlertDialogDescription>This action cannot be undone. This will permanently delete the data.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Tooltip>
    );
};

export const DataTableEditButton = ({ EditPage, headerName }: DataTableEditProps) => {
    return (
        <Tooltip>
            <Drawer direction="right">
                <TooltipTrigger asChild>
                    <DrawerTrigger asChild>
                        <Button variant="ghost" className="rounded-4xl bg-blue-500">
                            <Pencil />
                        </Button>
                    </DrawerTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Edit</p>
                </TooltipContent>
                <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Edit {headerName}</DrawerTitle>
                        </DrawerHeader>
                        {EditPage}
                        <DrawerFooter className="pt-6">
                            <Button>Submit</Button>
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </Tooltip>
    );
};

export const DataTableActions = ({ EditPage, headerName }: DataTableEditProps) => {
    return (
        <div className="flex gap-2">
            <TooltipProvider>
                <DataTableDeleteButton />
                <DataTableEditButton EditPage={EditPage} headerName={headerName} />
            </TooltipProvider>
        </div>
    );
};
