import { redirect } from '@/i18n/routing';
import { ROUTES } from '@/services/routes';

type HomePageProps = {
  params: { locale: string };
};

const HomePage: React.FC<HomePageProps> = async ({ params }) => {
  const { locale } = await params;
  // TODO: Change this to check if the user is authenticated
  // Currently we're mocking user authentication
  const isUserAuthenticated = true;

  if (!isUserAuthenticated) {
    redirect({ href: ROUTES.LOGIN._SELF, locale });
  }

  redirect({ href: ROUTES.DASHBOARD._SELF, locale });

  // NOTE: This allows to implement a public page accessible on `/` route
  // For now, we're redirecting authenticated users to the dashboard.
  // Not authenticated users will be redirected to the login page.
  return null;
};

export default HomePage;
