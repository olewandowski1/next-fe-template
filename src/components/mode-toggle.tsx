'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Computer, Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

const MODES = [
  {
    value: 'light',
    icon: Sun,
  },
  {
    value: 'dark',
    icon: Moon,
  },
  {
    value: 'system',
    icon: Computer,
  },
];

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const t = useTranslations('ModeToggle');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='extraSm'>
          <span className='text-sm font-light'>{t(theme)}</span>
          <ChevronDown
            className='-me-1 ms-2 opacity-60'
            size={16}
            strokeWidth={2}
            aria-hidden='true'
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {MODES.map((mode) => (
            <DropdownMenuRadioItem key={mode.value} value={mode.value}>
              {t(mode.value)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
