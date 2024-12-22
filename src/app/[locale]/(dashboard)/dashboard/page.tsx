import { Dashboard } from '@/components/dashboard/dashboard';
import { DashboardBanner } from '@/components/dashboard/dashboard-banner';

const DashboardPage = () => {
  return (
    <section>
      <DashboardBanner />
      <Dashboard />
    </section>
  );
};

export default DashboardPage;
