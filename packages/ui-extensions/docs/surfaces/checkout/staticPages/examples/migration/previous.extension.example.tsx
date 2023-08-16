import {
  useApi,
  render,
  Banner,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <Extension />
));

function Extension() {
  const {extensionPoint} = useApi();
  const translate = useTranslate();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {extensionPoint})}
    </Banner>
  );
}
