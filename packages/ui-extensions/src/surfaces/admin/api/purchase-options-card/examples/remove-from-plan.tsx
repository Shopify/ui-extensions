import React, {useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const RemoveFromPlan = () => {
  const {data, close} = useApi<'admin.product-purchase-option.action.render'>();
  const [confirmed, setConfirmed] = useState(false);

  const handleRemove = async () => {
    if (confirmed) {
      const item = data.selected[0];

      await fetch(`/api/selling-plans/${item.sellingPlanId}/remove-product`, {
        method: 'POST',
        body: JSON.stringify({productId: item.id}),
      });

      close();
    }
  };

  return null;
};

export default reactExtension('admin.product-purchase-option.action.render', () => <RemoveFromPlan />);
