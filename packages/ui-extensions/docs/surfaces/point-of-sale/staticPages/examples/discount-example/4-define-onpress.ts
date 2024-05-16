const onButtonPress = (type: DiscountType, title: string, amount: string) => {
  api.cart.applyCartDiscount(type, title, amount);
  api.toast.show('Discount applied');
};
