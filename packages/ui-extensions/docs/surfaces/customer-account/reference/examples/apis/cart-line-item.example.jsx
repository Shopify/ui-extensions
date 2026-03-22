import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const lines = shopify.lines.value ?? [];
  const title = lines[0]?.merchandise?.title;

  return (
    <s-text>Line item title: {title}</s-text>
  );
}
