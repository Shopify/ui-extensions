import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const attributes = shopify.attributes.value;
  const giftMessage = attributes?.find(
    (attr) => attr.key === 'giftMessage',
  );

  if (!giftMessage) {
    return null;
  }

  return (
    <s-box>
      <s-text type="strong">Gift message</s-text>
      <s-divider />
      <s-text emphasis="italic">
        "{giftMessage.value}"
      </s-text>
    </s-box>
  );
}
