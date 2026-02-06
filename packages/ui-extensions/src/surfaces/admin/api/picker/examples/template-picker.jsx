import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [selected, setSelected] = useState(null);

  const handlePickTemplate = async () => {
    const pickerInstance = await shopify.picker({
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
          badges: [
            {content: 'Published', tone: 'success'},
            {content: 'New feature'},
          ],
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

  return (
    <s-admin-block heading="Template Selector">
      <s-button onClick={handlePickTemplate}>Choose Template</s-button>
      {selected && selected.length > 0 && (
        <s-text>Selected template: {selected[0]}</s-text>
      )}
    </s-admin-block>
  );
}
