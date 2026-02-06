import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const handlePick = async () => {
    await shopify.picker({
      heading: 'Select items (up to 2)',
      multiple: 2,
      headers: [{title: 'Main heading'}],
      items: [
        {id: '1', heading: 'Item 1'},
        {id: '2', heading: 'Item 2'},
        {id: '3', heading: 'Item 3'},
      ],
    });
  };

  return (
    <s-admin-block heading="Limited Selection Picker">
      <s-button onClick={handlePick}>Open Picker</s-button>
    </s-admin-block>
  );
}
