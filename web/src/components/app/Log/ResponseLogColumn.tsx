import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { IResponseLogData } from '@/interfaces/log/responselog-table';
import type { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import ReactJson from 'react-json-view';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';
import { DataTableDeleteButton } from '@/components/bases/DataTableActions';
import { convertDate } from '@/utils/time';

export const ResponseLogColumns: ColumnDef<IResponseLogData>[] = [
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
                                    <Label>Auditlog ID</Label>
                                    <Label>{row.getValue('auditlogId')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Resource</Label>
                                    <Label>{row.getValue('resource')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Method</Label>
                                    <Label>{row.getValue('method')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>API Route</Label>
                                    <Label>{row.getValue('route')}</Label>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Label>Latency</Label>
                                    <Label>{row.getValue('latency')}</Label>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Label>Payload</Label>
                                    <ReactJson src={row.getValue('payload')} theme="pop" />
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
        accessorKey: 'auditlogId',
        header: 'Audit Log ID',
        cell: ({ row }) => <div className="capitalize">{row.getValue('auditlogId')}</div>,
    },
    {
        accessorKey: 'resource',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Resource
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('resource')}</div>,
    },
    {
        accessorKey: 'method',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Method
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('method')}</div>,
    },
    {
        accessorKey: 'route',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    API Route
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('route')}</div>,
    },
    {
        accessorKey: 'latency',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Latency
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('latency')}</div>,
    },
    {
        accessorKey: 'payload',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Payload
                </Button>
            );
        },
        cell: ({ row }) => (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="lowercase">{JSON.stringify(row.getValue('payload')).slice(0, 20)}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <ReactJson src={row.getValue('payload')} theme="pop" name={false} />
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        ),
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
        accessorKey: 'Delete',
        header: () => {
            return <div>Delete</div>;
        },
        cell: ({ row }) => (
            <div className="lowercase">
                <DataTableDeleteButton url="/responselog" id={row.original.id} />
            </div>
        ),
    },
];
