import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Home">
      <s-stack
        direction="vertical"
        flex={1}
        alignment="flex-end"
        paddingHorizontal={'ExtraExtraLarge'}
      >
        <Button title="Hello" />
        <Button title="Hello" />
      </s-stack>
    </s-screen>
  );
}