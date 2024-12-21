import { ROUTES } from '@/services/routes';
import { redirect } from 'next/navigation';

const NotFound = () => {
  // If a user omits the locale in the URL, redirect them to the default locale `/`.
  redirect(ROUTES.HOME);
};

export default NotFound;
