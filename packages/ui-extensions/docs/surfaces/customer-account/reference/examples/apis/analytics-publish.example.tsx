import {
  Banner,
  reactExtension,
  useApi,
} from '@shopify/ui-extensions-react/customer-account';

export const orderStatusBlockRender =
  reactExtension(
    'customer-account.order-status.block.render',
    () => <Extension />,
  );

function Extension() {
  const {analytics} = useApi();

  analytics
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

  return <Banner>See console for result</Banner>;
}
