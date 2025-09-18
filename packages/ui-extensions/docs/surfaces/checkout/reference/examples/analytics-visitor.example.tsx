import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  shopify.analytics
    .visitor({
      email: 'someEmail@example.com',
      phone: '+1 555 555 5555',
    })
    .then((result) => {
      if (result.type === 'success') {
        console.log('Success', result);
      } else {
        console.error('Error', result);
      }
    });

  return (
    <s-banner>See console for result</s-banner>
  );
}
