'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { ChevronRight, Ellipsis } from 'lucide-react';
import { useTranslations } from 'next-intl';

type MenuRoutesProps = {
  menuRoutes: {
    key: string;
    icon?: React.FC;
    items: {
      key: string;
      href: string;
      isActive: boolean;
    }[];
  }[];
};

export const MenuRoutes: React.FC<MenuRoutesProps> = ({ menuRoutes }) => {
  const pathname = usePathname();
  const t = useTranslations('routes');

  return (
    <SidebarMenu>
      {menuRoutes.map((route) => {
        return (
          <Collapsible
            key={route.key}
            defaultOpen={route.items.some((item) =>
              pathname.includes(item.key)
            )}
            className='group/collapsible'
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={t(route.key)}>
                  {route.icon ? <route.icon /> : <Ellipsis />}
                  <span>{t(route.key)}</span>
                  <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {route.items.map((item) => (
                    <SidebarMenuSubItem
                      key={item.key}
                      className={cn({ active: pathname.includes(item.key) })}
                    >
                      <SidebarMenuSubButton asChild>
                        <Link href={`/${item.href}`}>{t(item.key)}</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        );
      })}
    </SidebarMenu>
  );
};
