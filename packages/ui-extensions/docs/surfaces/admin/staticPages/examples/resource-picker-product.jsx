import { render } from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}


function Extension() {
  const { resourcePicker } = shopify;

  const handleSelectProduct = async () => {
    const selected = await resourcePicker({ type: 'product' });
    console.log(selected);
  };

  return <s-button onClick={handleSelectProduct}>Select product</s-button>;
}
