import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-image-group>
      <s-image src="../assets/flower.jpg" />
      <s-image src="../assets/flower.jpg" />
      <s-image src="../assets/flower.jpg" />
      <s-image src="../assets/flower.jpg" />
    </s-image-group>
  );
}
