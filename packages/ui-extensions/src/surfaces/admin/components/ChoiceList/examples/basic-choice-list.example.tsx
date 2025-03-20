import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default function extension() {
  render(
    <s-choice-list
      details="Pick the one you love"
      label="Choose your favorite fruit?"
      name="Favorite Fruit"
    >
      <s-choice label="Apple" value="apple"></s-choice>
      <s-choice label="Banana" value="banana"></s-choice>
      <s-choice label="Mango" value="mango"></s-choice>
    </s-choice-list>,
    document.body,
  );
}
