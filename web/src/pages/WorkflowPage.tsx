import { AppSidebar } from '@/components/app/AppBar';
import { Workflow } from '@/components/app/workflow/Workflow';
import { SidebarProvider } from '@/components/ui/sidebar';

function WorkflowPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Workflow</div>
                    <Workflow />
                </div>
            </SidebarProvider>
        </>
    );
}

export default WorkflowPage;
