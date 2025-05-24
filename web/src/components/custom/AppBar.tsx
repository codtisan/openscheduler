import { AlertCircle, ArrowBigLeft, ChartSpline, Inbox, KeySquare, Pickaxe, Search, Settings, Workflow } from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import SystemLogo from '@/assets/openscheduler.svg';
import useIsMenuStore from '@/store/useIsMenuStore';

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
    const { menuDisplay, setMenuDisplay } = useIsMenuStore();

    const handleClickMenu = () => {
        if (menuDisplay === 'full') {
            setMenuDisplay('short');
        } else {
            setMenuDisplay('full');
        }
    };

    return (
        <Sidebar className={cn('', menuDisplay === 'full' ? 'w-32' : 'w-12')}>
            <SidebarContent className="bg-[#F3F4F9]">
                <SidebarGroup>
                    {menuDisplay === 'full' ? <SidebarGroupLabel>Open Scheduler</SidebarGroupLabel> : <img src={SystemLogo} />}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                if (menuDisplay === 'short') {
                                    return (
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <SidebarMenuItem key={item.title}>
                                                        <SidebarMenuButton asChild className="hover:bg-blue-300 h-12">
                                                            <a href={item.url}>
                                                                <item.icon />
                                                            </a>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                </TooltipTrigger>
                                                <TooltipContent side="right">
                                                    <p>{item.title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    );
                                }
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild className="hover:bg-blue-300 h-12">
                                            <a href={item.url}>
                                                <item.icon />
                                                {menuDisplay === 'full' && <span>{item.title}</span>}
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
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Button variant="ghost" className="hover:bg-blue-300" onClick={handleClickMenu}>
                            <ArrowBigLeft />
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
