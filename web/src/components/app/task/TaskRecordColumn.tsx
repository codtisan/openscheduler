import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { statusToColor } from '@/services/color';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye } from 'lucide-react';
import type { ITaskRecord } from '@/interfaces/task/task-table';
import { Label } from '@/components/ui/label';
import { DataTableOperations } from '@/components/bases/DataTableOperations';
import { convertDate } from '@/utils/time';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';

export const TaskRecordColumns: ColumnDef<ITaskRecord>[] = [
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
        accessorKey: 'detail',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Detail
                </Button>
            );
        },
        cell: ({ row }) => {
            const statusColor = statusToColor(row.getValue('status'));
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
                                    <Label>Name</Label>
                                    <Label>{row.getValue('name')}</Label>
                                </div>
                                <div className="flex flex-row gap-3 ">
                                    <Label>Status</Label>
                                    <Label
                                        className={cn(
                                            'capitalize text-center rounded-2xl h-[2rem] w-20 flex items-center justify-center',
                                            statusColor
                                        )}
                                    >
                                        {row.getValue('status')}
                                    </Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Description</Label>
                                    <Label>{row.getValue('description')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Target</Label>
                                    <Label>{row.getValue('target')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Interval</Label>
                                    <Label>{row.getValue('interval')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Retry</Label>
                                    <Label>{row.getValue('numOfRetry')}</Label>
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
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const statusColor = statusToColor(row.getValue('status'));
            return (
                <div className={cn('capitalize text-center rounded-2xl h-[2rem] w-20 flex items-center justify-center', statusColor)}>
                    {row.getValue('status')}
                </div>
            );
        },
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
        cell: ({ row }) => <div className="lowercase">{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'type',
        header: 'Type',
        cell: ({ row }) => {
            return <div className="flex flex-col">{row.getValue('type')}</div>;
        },
    },
    {
        accessorKey: 'description',
        header: 'Description',
        cell: ({ row }) => {
            return <div className="flex flex-col">{row.getValue('description')}</div>;
        },
    },
    {
        accessorKey: 'target',
        header: 'Target',
        cell: ({ row }) => {
            return <div className="flex flex-col">{row.getValue('target')}</div>;
        },
    },
    {
        accessorKey: 'interval',
        header: 'Interval',
        cell: ({ row }) => {
            return <div className="flex flex-col">{(row.getValue('interval') as number) / 60} mins</div>;
        },
    },
    {
        accessorKey: 'numOfRetry',
        header: 'Retry',
        cell: ({ row }) => {
            return <div className="flex flex-col">{row.getValue('numOfRetry')}</div>;
        },
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
        cell: ({ row }) => {
            const formattedTime: string = convertDate(row.getValue('createdAt'));
            return <div className="lowercase">{formattedTime}</div>;
        },
    },
    {
        accessorKey: 'updatedAt',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Updated At
                </Button>
            );
        },
        cell: ({ row }) => {
            const formattedTime: string = convertDate(row.getValue('updatedAt'));
            return <div className="lowercase">{formattedTime}</div>;
        },
    },
    {
        accessorKey: 'actions',
        header: () => {
            return <Label>Actions</Label>;
        },
        cell: ({ row }) => (
            <div className="lowercase flex flex-row gap-2">
                <DataTableOperations rowData={row} />
            </div>
        ),
    },
];
