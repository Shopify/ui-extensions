import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [selected, setSelected] = useState(null);

  const handlePick = async () => {
    const pickerInstance = await shopify.picker({
      heading: 'Select an item',
      headers: [{title: 'Main heading'}],
      items: [
        {
          id: '1',
          heading: 'Item 1',
        },
        {
          id: '2',
          heading: 'Item 2',
        },
      ],
    });

    const result = await pickerInstance.selected;
    setSelected(result);
  };

  return (
    <s-admin-block heading="Simple Picker">
      <s-button onClick={handlePick}>Open Picker</s-button>
      {selected && <s-text>{selected.length} items selected</s-text>}
    </s-admin-block>
  );
}
