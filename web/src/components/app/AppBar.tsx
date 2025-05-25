import { AlertCircle, ChartSpline, Inbox, KeySquare, Pickaxe, Search, Settings, Workflow } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import SystemLogo from '@/assets/openscheduler.svg';
import { useNavigate } from 'react-router';
import { ColourfulText } from '../ui/colourful-text';

// Menu items.
const items = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: ChartSpline,
    },
    {
        title: 'Project',
        url: '/project',
        icon: Inbox,
    },
    {
        title: 'Task',
        url: 'task',
        icon: Pickaxe,
    },
    {
        title: 'Workflow',
        url: '/workflow',
        icon: Workflow,
    },
    {
        title: 'Log View',
        url: '/log',
        icon: Search,
    },
    {
        title: 'Alert',
        url: '/alert',
        icon: AlertCircle,
    },
    {
        title: 'IAM',
        url: '/iam',
        icon: KeySquare,
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: Settings,
    },
];

export function AppSidebar() {
    const navigate = useNavigate();

    const handleClickSystemLogo = () => {
        navigate('/home');
    };

    return (
        <Sidebar className={cn('w-32')}>
            <SidebarContent className="bg-[#F3F4F9]">
                <SidebarGroup>
                    <>
                        <img src={SystemLogo} onClick={handleClickSystemLogo} />
                        <h1 className="text-[99%]">
                            <ColourfulText text="Open Scheduler" />
                        </h1>
                    </>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild className="hover:bg-blue-300 h-12">
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu></SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
