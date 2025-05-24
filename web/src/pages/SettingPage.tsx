import { AppSidebar } from '@/components/app/AppBar';
import SearchBar from '@/components/app/setting/SearchBar';
import SettingPanel from '@/components/app/setting/SettingPanel';
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
