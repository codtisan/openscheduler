import { AppSidebar } from '@/components/custom/AppBar';
import SearchBar from '@/components/custom/SearchBar';
import SettingPanel from '@/components/custom/SettingPanel';
import { SidebarProvider } from '@/components/ui/sidebar';

function SettingPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col w-[90%] m-6">
                    <SearchBar />
                    <SettingPanel />
                </div>
            </SidebarProvider>
        </>
    );
}

export default SettingPage;
