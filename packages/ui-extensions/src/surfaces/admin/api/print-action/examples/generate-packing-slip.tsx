import React from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const GeneratePackingSlip = () => {
  const {data} = useApi<'admin.order-details.print-action.render'>();

  const generate = async () => {
    const orderIds = data.selected.map((item) => item.id);

    const response = await fetch('/api/generate-packing-slip', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({orderIds}),
    });

    const result = await response.json();
    return result.pdfUrl;
  };

  return null;
};

export default reactExtension('admin.order-details.print-action.render', () => <GeneratePackingSlip />);
