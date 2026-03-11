import {reactExtension, Chat} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.page.render', () => (
  <Extension />
));

function Extension() {
  return <Chat inlineSize={150} blockSize={50} />;
}
