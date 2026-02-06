import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const handlePick = async () => {
    await shopify.picker({
      heading: 'Select items',
      items: [
        {id: '1', heading: 'Item 1', selected: true},
        {id: '2', heading: 'Item 2'},
      ],
    });
  };

  return (
    <s-admin-block heading="Picker with Preselection">
      <s-button onClick={handlePick}>Open Picker</s-button>
    </s-admin-block>
  );
}
