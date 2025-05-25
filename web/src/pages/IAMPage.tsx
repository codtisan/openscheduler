import { AppSidebar } from '@/components/app/AppBar';
import { IAMDataTable } from '@/components/app/iam/IAMDataTable';
import { SidebarProvider } from '@/components/ui/sidebar';

function IAMPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Identity and Access Management</div>
                    <IAMDataTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default IAMPage;
