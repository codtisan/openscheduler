import { AppSidebar } from '@/components/app/AppBar';
import { TaskRecordTable } from '@/components/app/task/TaskRecordTable';
import { SidebarProvider } from '@/components/ui/sidebar';

function DashboardPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Dashboard</div>
                    <TaskRecordTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default DashboardPage;
