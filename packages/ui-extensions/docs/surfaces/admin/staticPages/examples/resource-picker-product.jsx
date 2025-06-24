import { render } from 'preact';

export default async () => {
  render(<Extension />, document.body);
}


function Extension() {
  const handleSelectProduct = async () => {
    const selected = await shopify.resourcePicker({ type: 'product' });
    console.log(selected);
  };

  return <s-button onClick={handleSelectProduct}>Select product</s-button>;
}
