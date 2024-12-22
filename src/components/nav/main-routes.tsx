'use client';

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

type MainRoutesProps = {
  mainRoutes: {
    key: string;
    href: string;
    icon: React.FC;
    isActive: boolean;
  }[];
};

export const MainRoutes: React.FC<MainRoutesProps> = ({ mainRoutes }) => {
  const pathname = usePathname();
  const t = useTranslations('routes');

  return (
    <SidebarMenu>
      {mainRoutes.map((route) => (
        <SidebarMenuItem key={route.key}>
          <SidebarMenuButton
            asChild
            className={cn('', {
              'bg-sidebar-accent': pathname === route.href,
            })}
          >
            <Link href={route.href}>
              <route.icon />
              <span>{t(route.key)}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
