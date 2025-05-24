import { AppSidebar } from '@/components/app/AppBar';
import { UserDataTable } from '@/components/app/iam/UserDataTable';
import { SidebarProvider } from '@/components/ui/sidebar';

function IAMPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Identity and Access Management</div>
                    <UserDataTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default IAMPage;
