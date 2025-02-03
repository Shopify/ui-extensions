import {
  extension,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.cart-line-item.render-after',
  (root, api) => {
    const productVariantId =
      api.target.current.merchandise.id;

    const filterMetafields = (entries) => {
      const [energyRating] = entries.filter(
        (entry) =>
          entry.metafield.namespace === '$app' &&
          entry.metafield.key ===
            'energy-rating' &&
          entry.target.type === 'product' &&
          entry.target.id === productVariantId,
      );
      return energyRating;
    };

    const render = (energyRating) => {
      if (energyRating) {
        root.replaceChildren(
          root.createComponent(
            Text,
            {},
            `Energy rating: ${energyRating.metafield.value}`,
          ),
        );
      }
    };

    render(
      filterMetafields(api.appMetafields.current),
    );
    api.appMetafields.subscribe((entries) => {
      render(filterMetafields(entries));
    });
  },
);
