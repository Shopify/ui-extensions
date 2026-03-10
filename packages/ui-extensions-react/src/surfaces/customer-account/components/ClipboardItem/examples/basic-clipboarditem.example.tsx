import {
  reactExtension,
  Button,
  ClipboardItem,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.page.render',
  () => <Extension />,
);

function Extension() {
  return (
    <>
      <Button
        activateTarget="discount-code"
        activateAction="copy"
      >
        Copy discount code
      </Button>
      <ClipboardItem
        text="SAVE 25"
        id="discount-code"
      />
    </>
  );
}
