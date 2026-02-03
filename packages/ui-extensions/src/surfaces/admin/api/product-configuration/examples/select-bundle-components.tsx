import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const SelectBundleComponents = () => {
  const {resourcePicker} = useApi<'admin.product-details.configuration.render'>();

  const handleSelect = async () => {
    const selected = await resourcePicker({
      type: 'product',
      multiple: 5,
      filter: {
        hidden: false,
        variants: false,
        draft: false,
        archived: false,
      },
    });

    if (selected) {
      await fetch('/api/save-bundle', {
        method: 'POST',
        body: JSON.stringify({components: selected.map((p) => p.id)}),
      });
    }
  };

  return null;
};

export default reactExtension('admin.product-details.configuration.render', () => <SelectBundleComponents />);
