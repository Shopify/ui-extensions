import {
  reactExtension,
  useApi,
  Text,
  POSBlock,
  POSBlockRow,
} from '@shopify/ui-extensions-react/point-of-sale';
import {useEffect, useState} from 'react';

const CustomerDetailsBlock = () => {
  const {customer} = useApi<'pos.customer-details.block.render'>();
  const [loyaltyInfo, setLoyaltyInfo] = useState<any>();
  useEffect(() => {
    getLoyaltyInfo();
  }, [customer.id]);

  async function getLoyaltyInfo() {
    const res = await fetch(`${URL}/api/loyalty/${customer.id}`);
    const json = await res.json();
    setLoyaltyInfo(json.loyaltySummary);
  }

  return (
    <POSBlock>
      <POSBlockRow>
        <Text>{loyaltyInfo}</Text>
      </POSBlockRow>
    </POSBlock>
  );
};

export default reactExtension('pos.customer-details.block.render', () => (
  <CustomerDetailsBlock />
));
