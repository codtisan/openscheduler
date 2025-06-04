import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserColumns } from './UserColumn';
import { ServiceAccountColumns } from './ServiceAccountColumn';
import { RoleColumns } from './RoleColumn';
import CreateUserSection from './CreateUser';
import CreateRoleSection from './CreateRole';
import CreateServiceAccountSection from './CreateServiceAccount';
import { Fingerprint, UserRoundPen, Users } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { UseGetRoleList, UseGetServiceAccountList, UseGetUserList } from '@/hooks/use-list-iam';

export function IAMDataTable() {
    const { data: userData, isLoading: isUserLoading } = UseGetUserList(10, 0);
    const { data: roleData, isLoading: isRoleLoading } = UseGetRoleList(10, 0);
    const { data: serviceAccountData, isLoading: isServiceAccountLoading } = UseGetServiceAccountList(10, 0);

    if (isUserLoading || isRoleLoading || isServiceAccountLoading) {
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner size="lg" className="bg-black dark:bg-white" />
            </div>
        );
    }

    return (
        <Tabs defaultValue="user" className="w-[100%] py-3">
            <TabsList className="grid w-[50%] grid-cols-3">
                <TabsTrigger value="user">
                    <Users />
                    User
                </TabsTrigger>
                <TabsTrigger value="role">
                    <UserRoundPen />
                    Role
                </TabsTrigger>
                <TabsTrigger value="service account">
                    <Fingerprint />
                    Service Account
                </TabsTrigger>
            </TabsList>
            <TabsContent value="user">
                <DataTableBase
                    tableData={userData}
                    tableColumns={UserColumns}
                    filteredColumnName="username"
                    createRecordElement={<CreateUserSection />}
                />
            </TabsContent>
            <TabsContent value="service account">
                <DataTableBase
                    tableData={serviceAccountData}
                    tableColumns={ServiceAccountColumns}
                    filteredColumnName="username"
                    createRecordElement={<CreateServiceAccountSection />}
                />
            </TabsContent>
            <TabsContent value="role">
                <DataTableBase
                    tableData={roleData}
                    tableColumns={RoleColumns}
                    filteredColumnName="name"
                    maxRowPerPage={8}
                    createRecordElement={<CreateRoleSection />}
                />
            </TabsContent>
        </Tabs>
    );
}
