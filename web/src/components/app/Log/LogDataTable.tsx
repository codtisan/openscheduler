import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTableBase } from '@/components/bases/DataTable';
import { AuditLogColumns } from './AuditLogColumn';
import { AuditLogDataSample } from '@/constants/auditlog';
import { MetricsLogDataSample } from '@/constants/metricslog';
import { ResponseLogDataSample } from '@/constants/responselog';
import { MetricsLogColumns } from './MetricsLogColumn';
import { ResponseLogColumns } from './ResponseLogColumn';
import { LogDataDownloadMenu } from './LogDataDownload';
import type { IAuditlogData } from '@/interfaces/log/auditlog-table';
import type { IMetricsLogData } from '@/interfaces/log/metricslog-table';
import type { IResponseLogData } from '@/interfaces/log/responselog-table';
import { Activity, Cable, Cpu } from 'lucide-react';

export function AuditLogDataTable() {
    return (
        <Tabs defaultValue="audit log" className="w-[100%] py-3">
            <TabsList className="grid w-[50%] grid-cols-3">
                <TabsTrigger value="audit log">
                    <Activity />
                    Audit Log
                </TabsTrigger>
                <TabsTrigger value="metrics log">
                    <Cpu />
                    Metrics Log
                </TabsTrigger>
                <TabsTrigger value="response log">
                    <Cable />
                    Response Log
                </TabsTrigger>
            </TabsList>
            <TabsContent value="audit log">
                <DataTableBase
                    tableData={AuditLogDataSample}
                    tableColumns={AuditLogColumns}
                    filteredColumnName="resource"
                    createRecordElement={<LogDataDownloadMenu<IAuditlogData> tableRows={AuditLogDataSample} />}
                />
            </TabsContent>
            <TabsContent value="metrics log">
                <DataTableBase
                    tableData={MetricsLogDataSample}
                    tableColumns={MetricsLogColumns}
                    filteredColumnName="ramUsage"
                    createRecordElement={<LogDataDownloadMenu<IMetricsLogData> tableRows={MetricsLogDataSample} />}
                />
            </TabsContent>
            <TabsContent value="response log">
                <DataTableBase
                    tableData={ResponseLogDataSample}
                    tableColumns={ResponseLogColumns}
                    filteredColumnName="resource"
                    createRecordElement={<LogDataDownloadMenu<IResponseLogData> tableRows={ResponseLogDataSample} />}
                />
            </TabsContent>
        </Tabs>
    );
}
