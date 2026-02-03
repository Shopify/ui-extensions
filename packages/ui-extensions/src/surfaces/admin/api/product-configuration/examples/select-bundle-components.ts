import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-details.configuration.render',
  (root, api) => {
    const {resourcePicker} = api;

    resourcePicker({
      type: 'product',
      multiple: 5,
      filter: {
        hidden: false,
        variants: false,
        draft: false,
        archived: false,
      },
    }).then((selected) => {
      if (selected) {
        fetch('/api/save-bundle', {
          method: 'POST',
          body: JSON.stringify({components: selected.map((p) => p.id)}),
        });
      }
    });
  },
);
