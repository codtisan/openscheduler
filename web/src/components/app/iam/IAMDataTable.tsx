import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserDataSample } from '@/constants/user';
import { UserColumns } from './UserColumn';
import { ServiceAccountDataSample } from '@/constants/service-account';
import { ServiceAccountColumns } from './ServiceAccountColumn';
import { RoleDataSample } from '@/constants/role';
import { RoleColumns } from './RoleColumn';
import CreateUserSection from './CreateUser';
import CreateRoleSection from './CreateRole';
import CreateServiceAccountSection from './CreateServiceAccount';

export function IAMDataTable() {
    return (
        <Tabs defaultValue="user" className="w-[100%] py-3">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="role">Role</TabsTrigger>
                <TabsTrigger value="service account">Service Account</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
                <DataTableBase
                    tableData={UserDataSample}
                    tableColumns={UserColumns}
                    filteredColumnName="username"
                    createRecordElement={<CreateUserSection />}
                />
            </TabsContent>
            <TabsContent value="service account">
                <DataTableBase
                    tableData={ServiceAccountDataSample}
                    tableColumns={ServiceAccountColumns}
                    filteredColumnName="username"
                    createRecordElement={<CreateServiceAccountSection />}
                />
            </TabsContent>
            <TabsContent value="role">
                <DataTableBase
                    tableData={RoleDataSample}
                    tableColumns={RoleColumns}
                    filteredColumnName="name"
                    maxRowPerPage={8}
                    createRecordElement={<CreateRoleSection />}
                />
            </TabsContent>
        </Tabs>
    );
}
