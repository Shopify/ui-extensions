import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-variant-details.configuration.render',
  (root, api) => {
    const {resourcePicker} = api;

    resourcePicker({
      type: 'variant',
    }).then((selected) => {
      if (selected) {
        fetch('/api/save-variant-bundle', {
          method: 'POST',
          body: JSON.stringify({variantIds: selected.map((v) => v.id)}),
        });
      }
    });
  },
);
