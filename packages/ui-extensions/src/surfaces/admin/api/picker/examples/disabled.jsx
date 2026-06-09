import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const handlePick = async () => {
    await shopify.picker({
      heading: 'Select items',
      items: [
        {id: '1', heading: 'Available item'},
        {id: '2', heading: 'Disabled item', disabled: true},
      ],
    });
  };

  return (
    <s-admin-block heading="Picker with Disabled Items">
      <s-button onClick={handlePick}>Open Picker</s-button>
    </s-admin-block>
  );
}
