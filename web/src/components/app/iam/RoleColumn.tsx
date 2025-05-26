import { DeleteAlertDialog } from '@/components/bases/DeleteAlert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import type { IRoleData } from '@/interfaces/role-table';
import { cn } from '@/lib/utils';
import { statusToColor } from '@/services/color';
import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, PencilLine } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IAMPolicies } from '@/constants/iam-policy';

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
    {
        accessorKey: 'Edit',
        header: () => {
            return <div>Edit</div>;
        },
        cell: ({ row }) => {
            return (
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <Button variant="ghost">
                            <PencilLine className="size-6" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="min-w-[28vw]">
                        <div className="w-full">
                            <DrawerHeader>
                                <DrawerTitle>Edit User</DrawerTitle>
                            </DrawerHeader>
                            <div className="ml-4 flex flex-col gap-6">
                                <div className="flex flex-row gap-5 max-w-[80%] items-center">
                                    <Label>Name</Label>
                                    <Input value={row.getValue('name')} />
                                </div>
                                <div className="flex flex-row gap-2 max-w-[80%] items-center">
                                    <Label>Log Policy</Label>
                                    {IAMPolicies.logViewPolicy.policies.map((policy) => {
                                        const hasPolicy = (row.getValue('logPolicy') as string[]).includes(policy.toLowerCase());
                                        return (
                                            <div className="flex flex-row items-center gap-2">
                                                <Label>{policy}</Label>
                                                <Checkbox checked={hasPolicy} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <DrawerFooter className="pt-6">
                                <Button>Submit</Button>
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
];
