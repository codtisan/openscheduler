import { AppSidebar } from '@/components/app/AppBar';
import SettingPanel from '@/components/app/setting/SettingPanel';
import { SidebarProvider } from '@/components/ui/sidebar';

function ProjectPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col w-full m-4 gap-5">
                    <div>Project Panel</div>
                    <SettingPanel />
                </div>
            </SidebarProvider>
        </>
    );
}

export default ProjectPage;
