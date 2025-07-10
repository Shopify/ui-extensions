import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen name="SectionHeader" title="Section Header">
      <s-section-header title="Header" />
    </s-screen>
  );
}