import { AppSidebar } from '@/components/app/AppBar';
import { DataTableDemo } from '@/components/app/iam/Tab';
import { SidebarProvider } from '@/components/ui/sidebar';

function IAMPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <DataTableDemo />
            </SidebarProvider>
        </>
    );
}

export default IAMPage;
