import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IRoleData } from '@/interfaces/role-table';
import { cn } from '@/lib/utils';
import { statusToColor } from '@/services/color';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { DataTableActions } from '@/components/bases/DataTableActions';
import { EditRoleSection } from './EditRole';
import { convertDate } from '@/utils/time';

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
        accessorKey: 'dashboardPolicy',
        header: 'Dashboard Policy',
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
        accessorKey: 'workflowPolicy',
        header: 'Workflow Policy',
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
        accessorKey: 'alertPolicy',
        header: 'Alert Policy',
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
        accessorKey: 'taskPolicy',
        header: 'Task Policy',
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
