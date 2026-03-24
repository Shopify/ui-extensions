import '@shopify/ui-extensions/preact';
import {render} from 'preact';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const purchasingCompany =
    shopify.authenticatedAccount
      ?.purchasingCompany?.value;
  const companyLocationId =
    purchasingCompany?.location?.id;

  if (
    companyLocationId &&
    isLocationClosed(companyLocationId)
  ) {
    return (
      <s-banner tone="warning">
        {shopify.i18n.translate(
          'closedLocationMessage',
        )}
      </s-banner>
    );
  }
  return null;
}

function isLocationClosed(locationId) {
  return true;
}
