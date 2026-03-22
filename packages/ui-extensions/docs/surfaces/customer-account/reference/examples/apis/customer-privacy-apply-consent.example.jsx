// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const [status, setStatus] = useState('');

  async function grantAnalyticsOnly() {
    try {
      const result =
        await shopify.applyTrackingConsentChange({
          type: 'changeVisitorConsent',
          analytics: true,
          marketing: false,
          preferences: false,
          saleOfData: true,
        });

      if (result.type === 'success') {
        setStatus('Preferences saved.');
      } else {
        setStatus('Failed to save preferences.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  }

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Cookie Preferences
        </s-text>
        <s-text>
          Allow only essential cookies and
          analytics to help us improve your
          experience.
        </s-text>
        <s-button onClick={grantAnalyticsOnly}>
          Save preferences
        </s-button>
        {status && (
          <s-text color="subdued">
            {status}
          </s-text>
        )}
      </s-stack>
    </s-box>
  );
}
