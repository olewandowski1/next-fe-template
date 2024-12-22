import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from '@/i18n/routing';
import { ROUTES } from '@/services/routes';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguagePicker } from '@/components/language-picker';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className='overflow-hidden'>
        <CardContent className='grid p-0 md:grid-cols-2'>
          <form className='p-6 md:p-8'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'> Login </h1>
                <p className='text-balance text-muted-foreground'>
                  Login to your account
                </p>
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Username</Label>
                <Input id='email' type='email' placeholder='johndoe' required />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <a
                    href='#'
                    className='ml-auto text-sm underline-offset-2 hover:underline'
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id='password'
                  type='password'
                  placeholder='******'
                  required
                />
              </div>
              {/* We're redirecting to `/dashboard` page */}
              <Button type='submit' className='w-full' asChild>
                <Link href={ROUTES.DASHBOARD._SELF}>Login</Link>
              </Button>
              <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
                <span className='relative z-10 bg-card px-2 text-muted-foreground'>
                  Preferences
                </span>
              </div>
              <div className='grid gap-2'>
                <div className='flex justify-between'>
                  <span> Language </span>
                  <LanguagePicker />
                </div>
                <div className='flex justify-between'>
                  <span> Theme </span>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </form>
          <div className='relative hidden bg-muted md:block'>
            <img
              src='/placeholder.svg'
              alt='Image'
              className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
            />
          </div>
        </CardContent>
      </Card>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{' '}
        and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
