shopify.cart.current.subscribe((cart) => {
  setEnabled(shouldEnable(cart.subtotal));
});
