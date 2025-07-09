import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="Home">
      <s-stack direction="vertical" paddingHorizontal={'ExtraExtraLarge'}>
        <Button title="Hello" />
        <Button title="Hello" />
      </s-stack>
    </s-screen>
  );
}