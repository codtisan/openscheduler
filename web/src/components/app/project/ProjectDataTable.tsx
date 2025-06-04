import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users } from 'lucide-react';
import { ProjectColumns } from './ProjectColumn';
import { CreateProjectSection } from './CreateProject';
import { UseGetProjectList } from '@/hooks/use-list-project';
import { Spinner } from '@/components/ui/spinner';

export function ProjectDataTable() {
    const { data, isLoading, error } = UseGetProjectList(10, 0);

    if (isLoading) {
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner size="lg" className="bg-black dark:bg-white" />
            </div>
        );
    }
    if (error) {
        return <div className="h-[80vh] flex items-center justify-center">Error Occurs</div>;
    }

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
                    tableData={data}
                    tableColumns={ProjectColumns}
                    filteredColumnName="name"
                    createRecordElement={<CreateProjectSection />}
                />
            </TabsContent>
        </Tabs>
    );
}
