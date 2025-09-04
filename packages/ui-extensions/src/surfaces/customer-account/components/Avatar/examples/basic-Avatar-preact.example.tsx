import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return <s-avatar initials="EW" alt="Evan White" size="base" />;
}
