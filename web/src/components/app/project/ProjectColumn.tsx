import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { DataTableActions } from '@/components/bases/DataTableActions';
import type { IProjectData } from '@/interfaces/project-table';
import { EditProjectSection } from './EditProject';
import { convertDate } from '@/utils/time';

export const ProjectColumns: ColumnDef<IProjectData>[] = [
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
        accessorKey: 'description',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Description
                    <ArrowUpDown />
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue('description')}</div>,
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
        cell: ({ row }) => {
            return (
                <div className="lowercase">
                    <DataTableActions EditPage={<EditProjectSection rowData={row} />} headerName="Project" url="/project" id={row.original.id} />
                </div>
            );
        },
    },
];
