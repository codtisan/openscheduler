import { AppSidebar } from '@/components/app/AppBar';
import { WorkflowEditor } from '@/components/app/workflow/WorkflowEditor';
import { SidebarProvider } from '@/components/ui/sidebar';

function WorkflowPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Workflow</div>
                    <WorkflowEditor />
                </div>
            </SidebarProvider>
        </>
    );
}

export default WorkflowPage;
