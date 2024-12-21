import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Link } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const NotFoundPage = () => {
  const t = useTranslations('NotFoundPage');

  return (
    <main className='container flex flex-col items-center justify-center min-h-screen gap-2 p-2 mx-auto text-center text-pretty'>
      <Typography.H3>404</Typography.H3>
      <Typography.H1>{t('title')}</Typography.H1>
      <Typography.P>{t('description')}</Typography.P>
      <Button className='group' variant='ghost' asChild>
        <Link href='/'>
          <ArrowLeft
            className='-ms-1 me-2 opacity-60 transition-transform group-hover:-translate-x-0.5'
            size={16}
            strokeWidth={2}
            aria-hidden='true'
          />
          {t('back')}
        </Link>
      </Button>
    </main>
  );
};
