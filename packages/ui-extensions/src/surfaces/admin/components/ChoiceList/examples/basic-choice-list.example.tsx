import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-choice-list label="What's your favourite fruit?">
      <s-choice label="Apple" value="apple" />
      <s-choice label="Banana" value="banana" />
      <s-choice label="Orange" value="orange" />
    </s-choice-list>,
    document.body,
  );
}
