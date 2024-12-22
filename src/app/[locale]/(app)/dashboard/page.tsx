import { Dashboard } from '@/features/dashboard/dashboard';
import { DashboardBanner } from '@/features/dashboard/dashboard-banner';

const DashboardPage = () => {
  return (
    <section>
      <DashboardBanner />
      <Dashboard />
    </section>
  );
};

export default DashboardPage;
