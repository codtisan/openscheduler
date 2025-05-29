import { AppSidebar } from '@/components/app/AppBar';
import { Dashboard } from '@/components/app/dashboard/Dashboard';
import { SidebarProvider } from '@/components/ui/sidebar';

function Home() {
    return (
        <div className="">
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div>Dashboard</div>
                    <Dashboard />
                </div>
            </SidebarProvider>
        </div>
    );
}

export default Home;
