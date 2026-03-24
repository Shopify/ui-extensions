import {
  reactExtension,
  useLocalizationCountry,
  useLanguage,
} from '@shopify/ui-extensions-react/customer-account';
import {
  BlockStack,
  Text,
} from '@shopify/ui-extensions/customer-account';

export default reactExtension(
  'customer-account.order-status.block.render',
  () => <Extension />,
);

function Extension() {
  const country = useLocalizationCountry();
  const language = useLanguage();

  return (
    <BlockStack>
      <Text emphasis="bold">Your region</Text>
      {country && (
        <Text>Country: {country.isoCode}</Text>
      )}
      <Text>Language: {language.isoCode}</Text>
    </BlockStack>
  );
}
