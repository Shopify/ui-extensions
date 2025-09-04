const [enabled, setEnabled] = useState(
  shouldEnable(shopify.cart.current.value.subtotal),
);
