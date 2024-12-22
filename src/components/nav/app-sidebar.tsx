'use client';

import { AppWidget } from '@/components/nav/app-widget';
import { MainRoutes } from '@/components/nav/main-routes';
import { MenuRoutes } from '@/components/nav/menu-routes';
import { UserWidget } from '@/components/nav/user-widget';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { Boxes, Home, Terminal } from 'lucide-react';
import { useTranslations } from 'next-intl';

const SAMPLE_DATA = {
  app: {
    name: '@Template',
    logo: Boxes,
    version: '0.1.0',
  },
  user: {
    name: 'John Doe',
    email: 'john@doe.com',
    avatar: undefined,
  },
  mainRoutes: [
    {
      key: 'home',
      href: '/dashboard',
      icon: Home,
      isActive: true,
    },
  ],
  menuRoutes: [
    {
      key: 'administration',
      icon: Terminal,
      items: [
        {
          key: 'users',
          href: '/users',
          isActive: true,
        },
        {
          key: 'login',
          href: '/login',
          isActive: true,
        },
      ],
    },
  ],
};

export const AppSidebar: React.FC<React.ComponentProps<typeof Sidebar>> = ({
  ...props
}) => {
  const t = useTranslations('AppSidebar');

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <AppWidget app={SAMPLE_DATA.app} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <MainRoutes mainRoutes={SAMPLE_DATA.mainRoutes} />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>{t('menu')}</SidebarGroupLabel>
          <MenuRoutes menuRoutes={SAMPLE_DATA.menuRoutes} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserWidget user={SAMPLE_DATA.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
