import {
  reactExtension,
  Link,
  QRCode,
  TextBlock,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <QRCode content="https://shopify.com" />

      <TextBlock>
        Scan to visit{' '}
        <Link to="https://shopify.com">
          Shopify.com
        </Link>
      </TextBlock>
    </>
  );
}
