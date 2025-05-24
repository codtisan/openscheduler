import { AppSidebar } from '@/components/custom/AppBar';
import { SidebarProvider } from '@/components/ui/sidebar';

function Home() {
    return (
        <div className="">
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
        </div>
    );
}

export default Home;
