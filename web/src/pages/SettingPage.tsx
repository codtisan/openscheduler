import { AppSidebar } from '@/components/custom/AppBar';
import { SidebarProvider } from '@/components/ui/sidebar';

function SettingPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
        </>
    );
}

export default SettingPage;
