import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDataSample } from '@/constants/alert';
import { AlertColumns } from './AlertColumn';

export function AlertDataTable() {
    return (
        <Tabs defaultValue="alert" className="w-[100%] py-3">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="alert">Alert</TabsTrigger>
            </TabsList>
            <TabsContent value="alert">
                <DataTableBase tableData={AlertDataSample} tableColumns={AlertColumns} filteredColumnName="name" />
            </TabsContent>
        </Tabs>
    );
}
