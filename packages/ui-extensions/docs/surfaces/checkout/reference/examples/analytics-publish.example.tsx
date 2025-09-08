import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  shopify.analytics
    .publish('checkout-extension-loaded', {
      extensionName: 'My Extension',
    })
    .then((result) => {
      if (result) {
        console.log(
          'succesfully published event, web pixels can now recieve this event',
        );
      } else {
        console.log('failed to publish event');
      }
    })
    .catch((error) => {
      console.log('failed to publish event');
      console.log('error', error);
    });

  return (
    <s-banner>See console for result</s-banner>
  );
}
