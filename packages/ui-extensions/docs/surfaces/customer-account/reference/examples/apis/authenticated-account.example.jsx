import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const orderStatusCustomerId =
    shopify.authenticatedAccount.customer.value
      ?.id;
  const authenticatedCustomerId =
    shopify.authenticatedAccount.customer.value
      ?.id;

  if (
    authenticatedCustomerId &&
    orderStatusCustomerId?.endsWith(
      authenticatedCustomerId,
    )
  ) {
    return (
      <s-banner>
        <s-link href="extension:manageLoyaltyPoints/">
          {shopify.i18n.translate(
            'manageLoyaltyPoints',
          )}
        </s-link>
      </s-banner>
    );
  }
  return null;
}
