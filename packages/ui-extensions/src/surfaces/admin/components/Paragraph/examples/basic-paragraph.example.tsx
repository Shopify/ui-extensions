import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-paragraph>
      <s-text type="strong">Name:</s-text>
      Jane Doe
    </s-paragraph>,
    document.body,
  );
}
