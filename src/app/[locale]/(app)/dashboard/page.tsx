import { Dashboard } from '@/features/dashboard/components/dashboard';
import { DashboardBanner } from '@/features/dashboard/components/dashboard-banner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Information about your account and recent activity.',
};

const DashboardPage = () => {
  return (
    <section>
      <DashboardBanner />
      <Dashboard />
    </section>
  );
};

export default DashboardPage;
