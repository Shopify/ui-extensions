import {
  reactExtension,
  Chat,
} from '@shopify/ui-extensions-react/customer-account';
import {retain} from '@remote-ui/rpc';
import type {ReadyEvent} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.page.render', () => (
  <Extension />
));

function Extension() {
  let postMessage;

  return (
    <Chat
      inlineSize={150}
      blockSize={50}
      onReady={({postMessage: postMessageParam}: ReadyEvent) => {
        postMessage = postMessageParam;
        retain(postMessage);

        postMessage({
          action: 'ping',
        });
      }}
      onMessage={(event: Event) => {
        if (event.data.action === 'pong') {
          console.log('Messaging channel successful');
        }
      }}
    />
  );
}
