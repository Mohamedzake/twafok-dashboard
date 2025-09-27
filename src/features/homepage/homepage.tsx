import { AppCards } from '@/common/appCard/appCards';
import PositiveChart from '@/assets/imgs/PositiveChart.svg';
import NegativeChart from '@/assets/imgs/NegativeChart.svg';
import { useTranslation } from 'react-i18next';

export const Homepage = () => {
  const { t } = useTranslation();
  return (
    <div className='grid sm:grid-cols-1 xl:grid-cols-5 gap-5 mt-13 mr-16'>
      <AppCards
        title={t('homepage.number_of_shipments_today')}
        resultAsNumber='15'
        chart={PositiveChart}
      />
      <AppCards
        title={t('homepage.number_of_sold_products_today')}
        resultAsNumber='15'
        chart={PositiveChart}
      />
      <AppCards
        title={t('homepage.number_of_sold_products')}
        resultAsNumber='15'
        chart={NegativeChart}
      />
      <AppCards
        title={t('homepage.total_financial_payments')}
        resultAsNumber='15'
        chart={PositiveChart}
      />
      <AppCards
        title={t('homepage.total_added_products')}
        resultAsNumber='15'
        chart={PositiveChart}
      />
      <AppCards
        title={t('homepage.number_of_deliverymen')}
        resultAsNumber='15'
        chart={PositiveChart}
      />
    </div>
  );
};
