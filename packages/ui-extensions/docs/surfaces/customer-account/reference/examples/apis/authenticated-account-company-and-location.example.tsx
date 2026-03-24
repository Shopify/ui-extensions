import {
  Banner,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-index.block.render',
  () => <Extension />,
);

function Extension() {
  const i18n = useI18n();
  const purchasingCompany =
    useAuthenticatedAccountPurchasingCompany();
  const companyLocationId =
    purchasingCompany?.location?.id;

  if (
    companyLocationId &&
    isLocationClosed(companyLocationId)
  ) {
    return (
      <Banner
        status="warning"
        title={i18n.translate(
          'closedLocationMessage',
        )}
      />
    );
  }
  return null;
}

function isLocationClosed(locationId: string) {
  return true;
}
