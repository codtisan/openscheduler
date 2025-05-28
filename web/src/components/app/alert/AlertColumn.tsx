import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IAlertData } from '@/interfaces/alert/alert-table';
import { cn } from '@/lib/utils';
import { statusToColor } from '@/services/color';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { DataTableDeleteButton } from '@/components/bases/DataTableActions';

export const AlertColumns: ColumnDef<IAlertData>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const statusColor = statusToColor(row.getValue('status'));
            return (
                <div className={cn('capitalize text-center rounded-2xl h-[2rem] flex items-center justify-center', statusColor)}>
                    {row.getValue('status')}
                </div>
            );
        },
    },
    {
        accessorKey: 'detail',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Detail
                </Button>
            );
        },
        cell: ({ row }) => {
            return (
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <Button variant="ghost">
                            <Eye className="size-6" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                                <DrawerTitle>Detail</DrawerTitle>
                            </DrawerHeader>
                            <div className="ml-4 flex flex-col gap-6">
                                <div className="flex flex-row gap-3">
                                    <Label>Status Code</Label>
                                    <Label>{row.getValue('statusCode')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Type</Label>
                                    <Label>{row.getValue('type')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Name</Label>
                                    <Label>{row.getValue('name')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Description</Label>
                                    <Label>{row.getValue('description')}</Label>
                                </div>
                            </div>
                            <DrawerFooter className="pt-6">
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </div>
                    </DrawerContent>
                </Drawer>
            );
        },
    },
    {
        accessorKey: 'statusCode',
        header: 'Status Code',
        cell: ({ row }) => <div>{row.getValue('statusCode')}</div>,
    },
    {
        accessorKey: 'type',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Type
                </Button>
            );
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue('type')}</div>,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Name
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'description',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Description
                </Button>
            );
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue('description')}</div>,
    },
    {
        accessorKey: 'createdAt',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Created At
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('createdAt')}</div>,
    },
    {
        accessorKey: 'Delete',
        header: () => {
            return <div>Delete</div>;
        },
        cell: () => (
            <div className="lowercase">
                <DataTableDeleteButton />
            </div>
        ),
    },
];
