import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const SelectVariantComponents = () => {
  const {resourcePicker} = useApi<'admin.product-variant-details.configuration.render'>();

  const handleSelect = async () => {
    const selected = await resourcePicker({
      type: 'variant',
    });

    if (selected) {
      await fetch('/api/save-variant-bundle', {
        method: 'POST',
        body: JSON.stringify({variantIds: selected.map((v) => v.id)}),
      });
    }
  };

  return null;
};

export default reactExtension('admin.product-variant-details.configuration.render', () => <SelectVariantComponents />);
