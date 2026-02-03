import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const CustomProductLabels = () => {
  const {data, resourcePicker} = useApi<'admin.product-details.print-action.render'>();

  const generate = async () => {
    const initialProducts = data.selected;
    const additionalProducts = await resourcePicker({type: 'product'});

    const allProducts = additionalProducts 
      ? [...initialProducts, ...additionalProducts]
      : initialProducts;

    const response = await fetch('/api/generate-labels', {
      method: 'POST',
      body: JSON.stringify({productIds: allProducts.map((p) => p.id)}),
    });

    const result = await response.json();
    return result.labelUrl;
  };

  return null;
};

export default reactExtension('admin.product-details.print-action.render', () => <CustomProductLabels />);
