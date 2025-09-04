import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-stack>
      <s-image src="/url/for/image" />
      <s-stack direction="block">
        <s-text type="strong">Heading</s-text>
        <s-text type="small">Description</s-text>
      </s-stack>
      <s-button
        onClick={() => {
          console.log('button was pressed');
        }}
      >
        Button
      </s-button>
    </s-stack>
  );
}
