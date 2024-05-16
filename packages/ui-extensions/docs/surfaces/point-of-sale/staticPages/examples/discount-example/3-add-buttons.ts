const percentageDiscountButton = root.createComponent(Button, {
  title: '25%',
  onPress: () => { onButtonPress('Percentage', '25% off', '25') }
});

const fixedAmountDiscountButton = root.createComponent(Button, {
  title: '$10',
  onPress: () => { onButtonPress('FixedAmount', '$10 off', '10') }
});

scrollView.appendChild(percentageDiscountButton);
scrollView.appendChild(fixedAmountDiscountButton);
