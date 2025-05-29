import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RoleDataSample } from '@/constants/role';
import { RoleColumns } from '../iam/RoleColumn';
import CreateRoleSection from '../iam/CreateRole';
import { UserRoundPen, Users } from 'lucide-react';
import { WorkflowEditor } from './WorkflowEditor';
import { WorkflowTaskList } from './TaskList';

export const Workflow = () => {
    return (
        <Tabs defaultValue="workflow editor" className="w-[100%] py-3">
            <TabsList className="grid w-[50%] grid-cols-3">
                <TabsTrigger value="workflow editor">
                    <Users />
                    Workflow Editor
                </TabsTrigger>
                <TabsTrigger value="workflow instance">
                    <UserRoundPen />
                    Workflow Instances
                </TabsTrigger>
            </TabsList>
            <TabsContent value="workflow editor">
                <div className="flex flex-row">
                    <WorkflowTaskList />
                    <WorkflowEditor />
                </div>
            </TabsContent>
            <TabsContent value="workflow instance">
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
};
