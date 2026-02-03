import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const ManageSubscription = () => {
  const {data, close} = useApi<'admin.product-purchase-option.action.render'>();

  const handleUpdate = async () => {
    const item = data.selected[0];

    if (item.sellingPlanId) {
      await fetch('/api/update-subscription', {
        method: 'POST',
        body: JSON.stringify({
          productId: item.id,
          sellingPlanId: item.sellingPlanId,
        }),
      });

      close();
    }
  };

  return null;
};

export default reactExtension('admin.product-purchase-option.action.render', () => <ManageSubscription />);
