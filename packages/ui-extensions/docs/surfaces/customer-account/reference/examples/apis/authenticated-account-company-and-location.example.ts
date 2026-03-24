import {
  Banner,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.order-index.block.render',
  (root, {i18n, authenticatedAccount}) => {
    const companyLocationId =
      authenticatedAccount?.purchasingCompany
        ?.current?.location?.id;

    if (
      companyLocationId &&
      isLocationClosed(companyLocationId)
    ) {
      const app = root.createComponent(Banner, {
        title: i18n.translate(
          'closedLocationMessage',
        ),
      });
      root.appendChild(app);
    }
  },
);

function isLocationClosed(locationId: string) {
  return true;
}
