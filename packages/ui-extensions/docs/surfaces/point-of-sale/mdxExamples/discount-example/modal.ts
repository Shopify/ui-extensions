import {
  extension,
  Screen,
  Button,
  CartDiscountType,
  ScrollView,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
  // [START modal.define-onpress]
  const onButtonPress = (
    type: CartDiscountType,
    title: string,
    amount: string,
  ) => {
    // You can apply a discount through the cart API
    api.cart.applyCartDiscount(type, title, amount);

    // You can show a toast to notify the user of something
    api.toast.show('Discount applied');
  };
  // [END modal.define-onpress]
  let mainScreen = root.createComponent(Screen, {
    name: 'Discounts',
    title: 'Available Discounts',
  });
  let scrollView = root.createComponent(ScrollView);
  // [START modal.create-buttons]
  const percentageDiscountButton = root.createComponent(Button, {
    title: '25%',
    onPress: () => {
      onButtonPress('Percentage', '25% off', '25');
    },
  });

  const fixedAmountDiscountButton = root.createComponent(Button, {
    title: '$10',
    onPress: () => {
      onButtonPress('FixedAmount', '$10 off', '10');
    },
  });

  scrollView.append(percentageDiscountButton);
  scrollView.append(fixedAmountDiscountButton);
  // [END modal.create-buttons]

  mainScreen.append(scrollView);
  root.append(mainScreen);
});
