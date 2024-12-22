import { LoginForm } from '@/features/auth/components/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

const LoginPage = () => {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10'>
      <div className='w-full max-w-sm md:max-w-3xl'>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
