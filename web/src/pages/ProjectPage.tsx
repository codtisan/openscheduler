import { AppSidebar } from '@/components/app/AppBar';
import { ProjectDataTable } from '@/components/app/project/ProjectDataTable';
import { SidebarProvider } from '@/components/ui/sidebar';

function ProjectPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col w-full m-4 gap-5">
                    <div>Project Panel</div>
                    <ProjectDataTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default ProjectPage;
