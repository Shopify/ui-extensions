// @extension-target: customer-account.order-status.block.render
import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function consentLabel(value) {
  if (value === true) return 'Granted';
  if (value === false) return 'Denied';
  return 'No decision';
}

function saleOfDataLabel(value) {
  if (value === true) return 'Opted out';
  if (value === false) return 'Not opted out';
  return 'No decision';
}

function Extension() {
  const {visitorConsent} =
    shopify.customerPrivacy.value;

  const categories = [
    {label: 'Analytics', display: consentLabel(visitorConsent?.analytics)},
    {label: 'Marketing', display: consentLabel(visitorConsent?.marketing)},
    {label: 'Preferences', display: consentLabel(visitorConsent?.preferences)},
    {label: 'Sale of data', display: saleOfDataLabel(visitorConsent?.saleOfData)},
  ];

  return (
    <s-box padding="base">
      <s-stack direction="block" gap="small-200">
        <s-text type="strong">
          Privacy Consent Status
        </s-text>
        {categories.map((category) => (
          <s-stack
            key={category.label}
            direction="inline"
            gap="base"
          >
            <s-text type="strong">
              {category.label}:
            </s-text>
            <s-text>
              {category.display}
            </s-text>
          </s-stack>
        ))}
      </s-stack>
    </s-box>
  );
}
