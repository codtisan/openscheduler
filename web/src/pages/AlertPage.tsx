import { AlertDataTable } from '@/components/app/alert/AlertDataTable';
import { AppSidebar } from '@/components/app/AppBar';
import { SidebarProvider } from '@/components/ui/sidebar';

function AlertPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Alert</div>
                    <AlertDataTable />
                </div>
            </SidebarProvider>
        </>
    );
}

export default AlertPage;
