import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { statusToColor } from '@/services/color';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import type { ITaskRecord } from '@/interfaces/task/task-table';
import { Label } from '@/components/ui/label';
import { DataTableActions } from '@/components/bases/DataTableActions';

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
        cell: ({ row }) => <div className="lowercase">{row.getValue('createdAt')}</div>,
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
        cell: ({ row }) => <div className="lowercase">{row.getValue('updatedAt')}</div>,
    },
    {
        accessorKey: 'actions',
        header: () => {
            return <Label>Actions</Label>;
        },
        cell: () => (
            <div className="lowercase flex flex-row gap-2">
                <DataTableActions />
            </div>
        ),
    },
];
