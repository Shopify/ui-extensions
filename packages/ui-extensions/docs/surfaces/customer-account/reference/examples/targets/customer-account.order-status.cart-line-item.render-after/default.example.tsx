import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {
    merchandise: {title},
  } = shopify.target.value;

  return (
    <s-text>Line item title: {title}</s-text>
  );
}
