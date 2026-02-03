import React, {useState} from 'react';
import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const TemplatePicker = () => {
  const {picker} = useApi<'admin.product-details.block.render'>();
  const [selected, setSelected] = useState(null);

  const handlePick = async () => {
    const pickerInstance = await picker({
      heading: 'Select a template',
      multiple: false,
      headers: [
        {title: 'Templates'},
        {title: 'Created by'},
        {title: 'Times used', type: 'number'},
      ],
      items: [
        {
          id: '1',
          heading: 'Full width, 1 column',
          data: ['Karine Ruby', '0'],
          badges: [{content: 'Draft', tone: 'info'}, {content: 'Marketing'}],
        },
        {
          id: '2',
          heading: 'Large graphic, 3 column',
          data: ['Russell Winfield', '5'],
          badges: [{content: 'Published', tone: 'success'}, {content: 'New feature'}],
          selected: true,
        },
        {
          id: '3',
          heading: 'Promo header, 2 column',
          data: ['Russel Winfield', '10'],
          badges: [{content: 'Published', tone: 'success'}],
        },
      ],
    });

    const result = await pickerInstance.selected;
    setSelected(result);
  };

  return null;
};

export default reactExtension('admin.product-details.block.render', () => <TemplatePicker />);
