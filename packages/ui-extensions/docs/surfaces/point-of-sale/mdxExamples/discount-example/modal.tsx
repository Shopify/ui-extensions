import React from 'react';

import {CartDiscountType} from '@shopify/ui-extensions/point-of-sale';
import {
  ScrollView,
  Button,
  Navigator,
  Screen,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const api = useApi<'pos.home.modal.render'>();
  // [START modal.define-onpress]
  const onButtonPress = (
    type: CartDiscountType,
    title: string,
    amount: string,
  ) => {
    api.cart.applyCartDiscount(type, title, amount);
    api.toast.show('Discount applied');
  };
  // [END modal.define-onpress]
  return (
    <Navigator>
      <Screen name="Discounts" title="Available Discounts">
        <ScrollView>
          <Button
            title="25%"
            onPress={() => onButtonPress('Percentage', '25% off', '25')}
          />
          <Button
            title="$10"
            onPress={() => onButtonPress('FixedAmount', '$10 off', '10')}
          />
        </ScrollView>
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => {
  return <SmartGridModal />;
});
