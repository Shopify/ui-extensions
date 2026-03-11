import {
  reactExtension,
  ConsentCheckbox,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <ConsentCheckbox policy="sms-marketing">
      Text me with news and offers
    </ConsentCheckbox>
  );
}
