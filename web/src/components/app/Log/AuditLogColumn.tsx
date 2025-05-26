import { DeleteAlertDialog } from '@/components/bases/DeleteAlert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { IAuditlogData } from '@/interfaces/log/auditlog-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Eye } from 'lucide-react';
import ReactJson from 'react-json-view';

export const AuditLogColumns: ColumnDef<IAuditlogData>[] = [
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
        accessorKey: 'userId',
        header: 'User ID',
        cell: ({ row }) => <div className="capitalize">{row.getValue('userId')}</div>,
    },
    {
        accessorKey: 'useragent',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    User Agent
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('useragent')}</div>,
    },
    {
        accessorKey: 'ip',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    IP Address
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('ip')}</div>,
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
        accessorKey: 'api',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    API Route
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('api')}</div>,
    },
    {
        accessorKey: 'body',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Request Body
                </Button>
            );
        },
        cell: ({ row }) => (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="lowercase">{JSON.stringify(row.getValue('body')).slice(0, 20) + ' ...'}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <ReactJson src={row.getValue('body')} theme="pop" name={false} />
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
