import { DeleteAlertDialog } from '@/components/bases/DeleteAlert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IMetricsLogData } from '@/interfaces/log/metricslog-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye } from 'lucide-react';

export const MetricsLogColumns: ColumnDef<IMetricsLogData>[] = [
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
        cell: () => (
            <div className="lowercase">
                <Button variant="ghost">
                    <Eye className="size-6" />
                </Button>
            </div>
        ),
    },
    {
        accessorKey: 'cpuUsage',
        header: 'CPU Usage',
        cell: ({ row }) => <div className="capitalize">{row.getValue('cpuUsage')}</div>,
    },
    {
        accessorKey: 'ramUsage',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    RAM Usage
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('ramUsage')}</div>,
    },
    {
        accessorKey: 'diskAvailable',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Available Disk Space
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('diskAvailable')}</div>,
    },
    {
        accessorKey: 'netBandwidth',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Network Bandwidth
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('netBandwidth')}</div>,
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
                <DeleteAlertDialog />
            </div>
        ),
    },
];
