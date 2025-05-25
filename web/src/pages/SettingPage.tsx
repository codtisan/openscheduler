import { AppSidebar } from '@/components/app/AppBar';
import SearchBar from '@/components/bases/SearchBar';
import SettingPanel from '@/components/app/setting/SettingPanel';
import { SidebarProvider } from '@/components/ui/sidebar';

function SettingPage() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <div className="flex flex-col w-full m-4 gap-5">
                    <div>Setting Panel</div>
                    <SearchBar />
                    <SettingPanel />
                </div>
            </SidebarProvider>
        </>
    );
}

export default SettingPage;
