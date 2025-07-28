import {render} from 'preact';

export default async function () {
  render(<Extension />, document.body);
}

function Extension() {
  const orderStatusCustomerId =
    shopify.authenticatedAccount.customer.current
      .id;
  const authenticatedCustomerId =
    shopify.authenticatedAccount.customer.current
      .id;

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
