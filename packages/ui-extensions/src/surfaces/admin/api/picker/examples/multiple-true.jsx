import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const handlePick = async () => {
    await shopify.picker({
      heading: 'Select items',
      multiple: true,
      items: [
        {id: '1', heading: 'Item 1'},
        {id: '2', heading: 'Item 2'},
        {id: '3', heading: 'Item 3'},
      ],
    });
  };

  return (
    <s-admin-block heading="Unlimited Selection Picker">
      <s-button onClick={handlePick}>Open Picker</s-button>
    </s-admin-block>
  );
}
