import {extension, Text, Button, Banner} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.product-purchase-option.action.render',
  (root, api) => {
    const {data, close} = api;

    let updated = false;
    let banner;

    const {id: productId, sellingPlanId} = data.selected[0];

    const productText = root.createComponent(Text, {}, `Product: ${productId}`);
    const planText = root.createComponent(Text, {}, `Selling Plan: ${sellingPlanId}`);

    const updateButton = root.createComponent(Button, {
      title: 'Update Subscription',
      onPress: async () => {
        if (!sellingPlanId) {
          console.error('No selling plan selected');
          close();
          return;
        }

        const response = await fetch('/api/subscriptions/update', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            productId,
            sellingPlanId,
            action: 'modify',
          }),
        });

        if (response.ok) {
          updated = true;
          banner = root.createComponent(
            Banner,
            {status: 'success'},
            'Subscription updated!',
          );
          root.appendChild(banner);

          setTimeout(() => close(), 1500);
        }
      },
    });

    root.appendChild(productText);
    root.appendChild(planText);
    root.appendChild(updateButton);
  },
);
