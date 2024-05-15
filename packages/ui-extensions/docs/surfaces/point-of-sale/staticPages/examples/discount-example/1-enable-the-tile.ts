const tile = root.createComponent(Tile, {
  title: 'Discount Example App',
  subtitle: 'Javascript',
  enabled: shouldEnable(api.cart.subscribable.initial.subtotal),
  onPress: api.action.presentModal
});
