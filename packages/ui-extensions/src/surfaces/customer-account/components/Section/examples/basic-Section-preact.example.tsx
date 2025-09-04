import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-section heading="Rewards">
      <s-button slot="primary-action" variant="primary">
        Redeem
      </s-button>
      <s-button slot="secondary-action" variant="secondary">
        My rewards
      </s-button>
      <s-paragraph>
        Earn 10 points for every $1 spent. Redeem 100 points for $10 off your
        next purchase.
      </s-paragraph>
    </s-section>
  );
}
