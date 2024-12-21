import { useTranslations } from 'next-intl';

const HomePage = () => {
  const t = useTranslations('HomePage');

  return <div> {t('description')} </div>;
};

export default HomePage;
