'use client';

import { Button } from '@/components/ui/button';
import { Rocket, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const DashboardBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations('DashboardBanner');

  if (!isVisible) return null;

  return (
    <div className='bg-muted px-4 py-3 text-foreground'>
      <div className='flex gap-2 md:items-center'>
        <div className='flex grow gap-3 md:items-center'>
          <div
            className='flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 max-md:mt-0.5'
            aria-hidden='true'
          >
            <Rocket className='opacity-80' size={16} strokeWidth={2} />
          </div>
          <div className='flex grow flex-col justify-between gap-3 md:flex-row md:items-center'>
            <div className='space-y-0.5'>
              <p className='text-sm font-medium'>{t('title')}</p>
              <p className='text-sm text-muted-foreground'>
                {t('description')}
              </p>
            </div>
            <div className='flex gap-2 max-md:flex-wrap'>
              <Button size='sm' className='text-sm'>
                {t('cta')}
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant='ghost'
          className='group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent'
          onClick={() => setIsVisible(false)}
          aria-label='Close banner'
        >
          <X
            size={16}
            strokeWidth={2}
            className='opacity-60 transition-opacity group-hover:opacity-100'
            aria-hidden='true'
          />
        </Button>
      </div>
    </div>
  );
};
