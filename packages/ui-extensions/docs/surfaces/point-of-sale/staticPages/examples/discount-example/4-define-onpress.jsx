const onButtonPress = (type, title, amount) => {
  shopify.cart.applyCartDiscount(type, title, amount);
  shopify.toast.show('Discount applied');
};
