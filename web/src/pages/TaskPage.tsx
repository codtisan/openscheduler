import { AppSidebar } from '@/components/app/AppBar';
import { TaskRecordTable } from '@/components/app/task/TaskRecordTable';
import { SidebarProvider } from '@/components/ui/sidebar';

function TaskPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Task</div>
                    <TaskRecordTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default TaskPage;
