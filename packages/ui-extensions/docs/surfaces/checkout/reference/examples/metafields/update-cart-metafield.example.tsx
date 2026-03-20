import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(<Extension />, document.body);
}

function Extension() {
  async function savePreference() {
    const result =
      await shopify.applyMetafieldChange({
        type: 'updateCartMetafield',
        metafield: {
          namespace: '$app:preferences',
          key: 'gift-message',
          type: 'single_line_text_field',
          value: 'Happy birthday!',
        },
      });

    if (result.type === 'error') {
      console.error(result.message);
    }
  }

  return (
    <s-button onClick={savePreference}>
      Save gift message
    </s-button>
  );
}
