import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { IMetricsLogData } from '@/interfaces/log/metricslog-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { DataTableDeleteButton } from '@/components/bases/DataTableActions';

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
        cell: ({ row }) => (
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
                                <Label>CPU Usage</Label>
                                <Label>{row.getValue('cpuUsage')}</Label>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Label>RAM Usage</Label>
                                <Label>{row.getValue('ramUsage')}</Label>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Label>Disk Available</Label>
                                <Label>{row.getValue('diskAvailable')}</Label>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Label>Network Bandwidth</Label>
                                <Label>{row.getValue('netBandwidth')}</Label>
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
                <DataTableDeleteButton />
            </div>
        ),
    },
];
