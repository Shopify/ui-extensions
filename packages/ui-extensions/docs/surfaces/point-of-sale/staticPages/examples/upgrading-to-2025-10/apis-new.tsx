import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  return <s-button onClick={onButtonClick}>Print</s-button>;
}

async function onButtonClick() {
  await shopify.print.print('documents/test-print');
  console.log('print completed');
}
