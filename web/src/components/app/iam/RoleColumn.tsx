import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IRoleData } from '@/interfaces/role-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, PencilLine, Trash2 } from 'lucide-react';

export const RoleColumns: ColumnDef<IRoleData>[] = [
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
        cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
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
        accessorKey: 'logPolicy',
        header: 'Log Policy',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue('logPolicy') as string[]).map((item: string) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            );
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
        accessorKey: 'Delete',
        header: () => {
            return <div>Delete</div>;
        },
        cell: () => (
            <div className="lowercase">
                <Button variant="ghost">
                    <Trash2 className="size-6" />
                </Button>
            </div>
        ),
    },
    {
        accessorKey: 'Edit',
        header: () => {
            return <div>Edit</div>;
        },
        cell: () => (
            <div className="lowercase">
                <Button variant="ghost">
                    <PencilLine className="size-6" />
                </Button>
            </div>
        ),
    },
];
