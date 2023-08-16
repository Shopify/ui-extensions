import {
  reactExtension,
  useApi,
  Banner,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {extension} = useApi();
  const translate = useTranslate();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {
        target: extension.target,
      })}
    </Banner>
  );
}
