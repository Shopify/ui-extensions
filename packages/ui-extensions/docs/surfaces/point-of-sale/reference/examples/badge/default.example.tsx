import '@shopify/ui-extensions/point-of-sale/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-screen title="Home" name="Home">
      <s-badge
        text="Badge"
        variant="success"
        status="complete"
      />
    </s-screen>
  );
}
