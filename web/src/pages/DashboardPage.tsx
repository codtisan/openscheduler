import { AppSidebar } from '@/components/app/AppBar';
import { Dashboard } from '@/components/app/dashboard/Dashboard';
import { SidebarProvider } from '@/components/ui/sidebar';

function DashboardPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Dashboard</div>
                    <Dashboard />
                </div>
            </SidebarProvider>
        </>
    );
}

export default DashboardPage;
