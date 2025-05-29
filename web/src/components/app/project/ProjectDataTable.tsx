import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users } from 'lucide-react';
import { ProjectDataSample } from '@/constants/project';
import { ProjectColumns } from './ProjectColumn';
import { CreateProjectSection } from './CreateProject';

export function ProjectDataTable() {
    return (
        <Tabs defaultValue="project" className="w-[100%]">
            <TabsList className="grid w-[50%] grid-cols-3">
                <TabsTrigger value="project">
                    <Users />
                    Project
                </TabsTrigger>
            </TabsList>
            <TabsContent value="project">
                <DataTableBase
                    tableData={ProjectDataSample}
                    tableColumns={ProjectColumns}
                    filteredColumnName="name"
                    createRecordElement={<CreateProjectSection />}
                />
            </TabsContent>
        </Tabs>
    );
}
