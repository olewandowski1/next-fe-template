import { BrowsersChat } from '@/components/dashboard/browsers-chart';
import { MainChart } from '@/components/dashboard/main-chart';
import { RadarVisitorsChart } from '@/components/dashboard/radar-visitors-chart';
import { VisitorsChart } from '@/components/dashboard/visitors-chart';
import { Typography } from '@/components/ui/typography';

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
