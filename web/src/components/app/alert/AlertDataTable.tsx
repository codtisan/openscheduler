import { DataTableBase } from '@/components/bases/DataTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDataSample } from '@/constants/alert';
import { AlertColumns } from './AlertColumn';
import { TriangleAlert } from 'lucide-react';
import { LogDataDownloadMenu } from '../Log/LogDataDownload';
import type { IAlertData } from '@/interfaces/alert/alert-table';

export function AlertDataTable() {
    return (
        <Tabs defaultValue="alert" className="w-[100%] py-3">
            <TabsList className="grid w-[50%] grid-cols-3">
                <TabsTrigger value="alert">
                    <TriangleAlert />
                    Alert
                </TabsTrigger>
            </TabsList>
            <TabsContent value="alert">
                <DataTableBase
                    tableData={AlertDataSample}
                    tableColumns={AlertColumns}
                    filteredColumnName="name"
                    createRecordElement={<LogDataDownloadMenu<IAlertData> tableRows={AlertDataSample} />}
                />
            </TabsContent>
        </Tabs>
    );
}
