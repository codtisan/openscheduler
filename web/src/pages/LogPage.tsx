import { AppSidebar } from '@/components/app/AppBar';
import { AuditLogDataTable } from '@/components/app/Log/AuditLogDataTable';
import { SidebarProvider } from '@/components/ui/sidebar';

function LogPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Log</div>
                    <AuditLogDataTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default LogPage;
