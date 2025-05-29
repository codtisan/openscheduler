import { AppSidebar } from '@/components/app/AppBar';
import { Dashboard } from '@/components/app/dashboard/Dashboard';
import { DatePickerWithRange } from '@/components/bases/DatePicker';
import { SidebarProvider } from '@/components/ui/sidebar';

function DashboardPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full m-4">
                    <div className="flex flex-row gap-10 items-center">
                        <div>Dashboard</div>
                        <DatePickerWithRange />
                    </div>
                    <Dashboard />
                </div>
            </SidebarProvider>
        </>
    );
}

export default DashboardPage;
