import { Typography } from '@/components/ui/typography';
import { BrowsersChat } from '@/features/dashboard/components/browsers-chart';
import { MainChart } from '@/features/dashboard/components/main-chart';
import { RadarVisitorsChart } from '@/features/dashboard/components/radar-visitors-chart';
import { VisitorsChart } from '@/features/dashboard/components/visitors-chart';

export const Dashboard = () => {
  return (
    <div className='p-2 md:p-4'>
      <Typography.H3> Dashboard </Typography.H3>
      <Typography.Muted className='pb-2'>Insights at a Glance</Typography.Muted>
      <MainChart />
      <div className='grid mt-4 gap-4 lg:grid-cols-3'>
        <VisitorsChart />
        <BrowsersChat />
        <RadarVisitorsChart />
      </div>
    </div>
  );
};
