import React, {useEffect} from 'react';
import {
  Navigator,
  Screen,
  Stack,
  Text,
  useScannerDataSubscription,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const api = useApi<'pos.home.modal.render'>();
  const {data} = useScannerDataSubscription();

  // Update the cart when a product is scanned.
  useEffect(() => {
    const addProductToCart = (data: string | undefined) => {
      if (data) {
        api.cart.addLineItem(Number(data), 1);
      }
    };
    addProductToCart(data);
  }, [data]);

  return (
    <Navigator>
      <Screen name="Home" title="Home">
        <Stack direction="horizontal" flexChildren flex={1}>
          <Text>{`Scanned data: ${data || ''}`}</Text>
        </Stack>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => <SmartGridModal />);
