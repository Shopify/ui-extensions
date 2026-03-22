import {
  Banner,
  reactExtension,
  useI18n,
  useLocalizationCountry,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-index.block.render',
  () => <Extension />,
);

function Extension() {
  const i18n = useI18n();
  const country = useLocalizationCountry();

  if (country?.isoCode === 'CA') {
    return (
      <Banner
        status="warning"
        title={i18n.translate(
          'canadaPostWarningMessage',
        )}
      />
    );
  }

  return null;
}
