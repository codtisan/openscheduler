import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TaskRecordSample } from '@/constants/task';
import { TaskRecordColumns } from './TaskRecordColumn';
import CreateTaskSection from './CreateTaskSection';

export function TaskRecordTable() {
    return (
        <Tabs defaultValue="task" className="w-[100%] py-3">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="task">Tasks</TabsTrigger>
            </TabsList>
            <TabsContent value="task">
                <DataTableBase
                    tableData={TaskRecordSample}
                    tableColumns={TaskRecordColumns}
                    filteredColumnName="task"
                    createRecordElement={<CreateTaskSection />}
                />
            </TabsContent>
        </Tabs>
    );
}
