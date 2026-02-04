import {extension, Text, Button, Banner} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-purchase-option.action.render',
  (root, api) => {
    const {data, close} = api;

    let confirming = false;
    let removed = false;
    let banner;

    const {id: productId, sellingPlanId} = data.selected[0];

    const renderConfirmation = () => {
      root.clear();

      const confirmText = root.createComponent(Text, {}, 'Are you sure you want to remove this product?');
      const confirmButton = root.createComponent(Button, {
        title: 'Confirm Remove',
        onPress: async () => {
          confirming = false;

          await fetch('/api/selling-plans/remove-product', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({productId, sellingPlanId}),
          });

          removed = true;
          root.clear();
          banner = root.createComponent(
            Banner,
            {status: 'success'},
            'Product removed from plan',
          );
          root.appendChild(banner);

          setTimeout(() => close(), 1500);
        },
      });
      const cancelButton = root.createComponent(Button, {
        title: 'Cancel',
        onPress: () => renderInitial(),
      });

      root.appendChild(confirmText);
      root.appendChild(confirmButton);
      root.appendChild(cancelButton);
    };

    const renderInitial = () => {
      root.clear();
      const removeButton = root.createComponent(Button, {
        title: 'Remove Product',
        onPress: () => {
          confirming = true;
          renderConfirmation();
        },
      });
      root.appendChild(removeButton);
    };

    renderInitial();
  },
);
