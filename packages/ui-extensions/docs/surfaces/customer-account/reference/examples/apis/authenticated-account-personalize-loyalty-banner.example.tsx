import {
  reactExtension,
  useAuthenticatedAccountCustomer,
  useCustomer,
  useI18n,
} from '@shopify/ui-extensions-react/customer-account';
import {Banner, Link} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const i18n = useI18n();
  const authenticatedCustomer = useAuthenticatedAccountCustomer();
  const orderStatusCustomer = useCustomer();

  if (
    authenticatedCustomer?.id &&
    orderStatusCustomer?.id?.endsWith(authenticatedCustomer?.id)
  ) {
    return (
      <Banner>
        <Link to={'extension:manageLoyaltyPoints/'}>
          {i18n.translate('manageLoyaltyPoints')}
        </Link>
      </Banner>
    );
  }
  return null;
}
