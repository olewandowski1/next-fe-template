import { AppSidebar } from '@/components/nav/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';

type WebLayoutProps = {
  children: React.ReactNode;
};

const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full'>
          <header className='flex items-center h-16 gap-2 px-4 border-b shrink-0'>
            <SidebarTrigger className='-ml-1' />
          </header>
          {children}
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default WebLayout;
