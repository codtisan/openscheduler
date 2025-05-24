import { ChartSpline, Inbox, KeySquare, Pickaxe, Search, Settings, Workflow } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

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
        title: 'Log',
        url: '/log',
        icon: Search,
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
    return (
        <Sidebar className="w-32">
            <SidebarContent className="bg-[#F3F4F9]">
                <SidebarGroup>
                    <SidebarGroupLabel>Open Scheduler</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="hover:bg-blue-300 h-12">
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
