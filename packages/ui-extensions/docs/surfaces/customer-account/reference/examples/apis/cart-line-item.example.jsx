import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const title =
    shopify.target.value.merchandise?.title;

  return (
    <s-text>Line item title: {title}</s-text>
  );
}
