import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useEffect} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  useEffect(() => {
    shopify.analytics
      .publish(
        'customer-account-extension-loaded',
        {
          extensionName: 'My Extension',
        },
      )
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
  }, []);

  return (
    <s-banner>See console for result</s-banner>
  );
}
