'use client';

import * as React from 'react';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import type { ColumnFiltersState, SortingState, VisibilityState } from '@tanstack/react-table';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { data } from '@/constants/user';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserColumns } from './UserColumn';
import { ServiceAccountColumns } from './ServiceAccountColumn';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { BackendServices } from '@/services/http';
import { ServiceAccounts } from '@/constants/service-account';

export function UserDataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns: UserColumns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const serviceAccountTable = useReactTable({
        data: ServiceAccounts,
        columns: ServiceAccountColumns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const [createUserInfo, setCreateUserInfo] = React.useState({
        email: '',
        username: '',
        password: '',
    });

    const handleCreateUser = async () => {
        try {
            const res = await BackendServices.post('/user/create', createUserInfo);
            if (res.status === 200) {
                console.log('create');
            } else {
                console.error('Create User Error: ', res.data.message);
            }
        } catch (error) {
            console.error('Create User Error: ', error);
        }
    };

    return (
        <Tabs defaultValue="user" className="w-[100%] py-3">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="role">Role</TabsTrigger>
                <TabsTrigger value="service account">Service Account</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
                <div className="w-full">
                    <div className="flex items-center py-3">
                        <Input
                            placeholder="Filter emails..."
                            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
                            onChange={(event) => table.getColumn('email')?.setFilterValue(event.target.value)}
                            className="max-w-sm"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-6 w-[8%]">
                                    Columns <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="ml-6 w-[10%]">Create User</Button>
                            </DialogTrigger>
                            <DialogContent className="w-[60%]">
                                <DialogHeader>
                                    <DialogTitle>Create User</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 ">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            placeholder="Enter your email"
                                            className="col-span-3"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setCreateUserInfo((prevState) => ({
                                                    ...prevState,
                                                    email: event.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            placeholder="Enter your username"
                                            className="col-span-3"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setCreateUserInfo((prevState) => ({
                                                    ...prevState,
                                                    username: event.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="password" className="text-right">
                                            Password
                                        </Label>
                                        <Input
                                            id="passowrd"
                                            type="password"
                                            placeholder="Enter your passowrd"
                                            className="col-span-3"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setCreateUserInfo((prevState) => ({
                                                    ...prevState,
                                                    password: event.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="submit" onClick={handleCreateUser}>
                                            Create
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={UserColumns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="flex-1 text-sm text-muted-foreground">
                            {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                        <div className="space-x-2">
                            <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                                Previous
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="service account">
                <div className="w-full">
                    <div className="flex items-center py-3">
                        <Input
                            placeholder="Filter emails..."
                            value={(serviceAccountTable.getColumn('email')?.getFilterValue() as string) ?? ''}
                            onChange={(event) => serviceAccountTable.getColumn('email')?.setFilterValue(event.target.value)}
                            className="max-w-sm"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-6 w-[8%]">
                                    Columns <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {serviceAccountTable
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="ml-6 w-[16%]">Create Service Account</Button>
                            </DialogTrigger>
                            <DialogContent className="w-[60%]">
                                <DialogHeader>
                                    <DialogTitle>Create Service Account</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 ">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            placeholder="Enter your email"
                                            className="col-span-3"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setCreateUserInfo((prevState) => ({
                                                    ...prevState,
                                                    email: event.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            placeholder="Enter your username"
                                            className="col-span-3"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setCreateUserInfo((prevState) => ({
                                                    ...prevState,
                                                    username: event.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="password" className="text-right">
                                            Password
                                        </Label>
                                        <Input
                                            id="passowrd"
                                            type="password"
                                            placeholder="Enter your passowrd"
                                            className="col-span-3"
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                setCreateUserInfo((prevState) => ({
                                                    ...prevState,
                                                    password: event.target.value,
                                                }))
                                            }
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="submit" onClick={handleCreateUser}>
                                            Create
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {serviceAccountTable.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {serviceAccountTable.getRowModel().rows?.length ? (
                                    serviceAccountTable.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={ServiceAccountColumns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="flex-1 text-sm text-muted-foreground">
                            {serviceAccountTable.getFilteredSelectedRowModel().rows.length} of {serviceAccountTable.getFilteredRowModel().rows.length}{' '}
                            row(s) selected.
                        </div>
                        <div className="space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => serviceAccountTable.previousPage()}
                                disabled={!serviceAccountTable.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => serviceAccountTable.nextPage()}
                                disabled={!serviceAccountTable.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
}
