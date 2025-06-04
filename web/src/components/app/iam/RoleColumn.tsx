import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IRoleData } from '@/interfaces/role-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { DataTableActions } from '@/components/bases/DataTableActions';
import { EditRoleSection } from './EditRole';

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
        accessorKey: 'log',
        header: 'Log Policy',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue('log') as string[]).map((item: string) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: 'dashboard',
        header: 'Dashboard Policy',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue('dashboard') as string[]).map((item: string) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: 'workflow',
        header: 'Workflow Policy',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue('workflow') as string[]).map((item: string) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: 'alert',
        header: 'Alert Policy',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue('alert') as string[]).map((item: string) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>
            );
        },
    },
    {
        accessorKey: 'task',
        header: 'Task Policy',
        cell: ({ row }) => {
            return (
                <div className="flex flex-col">
                    {(row.getValue('task') as string[]).map((item: string) => (
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
        cell: ({ row }) => {
            return <div className="lowercase">{row.getValue('createdAt')}</div>;
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
            return <div className="lowercase">{row.getValue('updatedAt')}</div>;
        },
    },
    {
        accessorKey: 'Actions',
        header: () => {
            return <div>Actions</div>;
        },
        cell: ({ row }) => (
            <div className="lowercase">
                <DataTableActions EditPage={<EditRoleSection rowData={row} />} headerName="Role" url="/user" id={row.original.id} />
            </div>
        ),
    },
];
