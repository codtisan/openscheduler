import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IServiceAccountData } from '@/interfaces/service-acount-table';
import { cn } from '@/lib/utils';
import { statusToColor } from '@/services/color';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { DataTableActions } from '@/components/bases/DataTableActions';
import { EditServiceAccountSection } from './EditServiceAccount';

export const ServiceAccountColumns: ColumnDef<IServiceAccountData>[] = [
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
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Email
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
    },
    {
        accessorKey: 'username',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Username
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('username')}</div>,
    },
    {
        accessorKey: 'token',
        header: () => {
            return <div>Token</div>;
        },
        cell: ({ row }) => <div>{row.getValue('token')}</div>,
    },
    {
        accessorKey: 'role',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Role
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('role')}</div>,
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
        accessorKey: 'Actions',
        header: () => {
            return <div>Actions</div>;
        },
        cell: ({ row }) => (
            <div className="lowercase">
                <DataTableActions EditPage={<EditServiceAccountSection rowData={row} />} headerName="Service Account" />
            </div>
        ),
    },
];
