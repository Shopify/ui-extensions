import {
  extension,
  Screen,
  Button,
  CartDiscountType,
  ScrollView,
} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.modal.render', (root, api) => {
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

  let mainScreen = root.createComponent(Screen, {
    name: 'Discounts',
    title: 'Available Discounts',
  });
  let scrollView = root.createComponent(ScrollView);

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
  mainScreen.append(scrollView);
  root.append(mainScreen);
});
