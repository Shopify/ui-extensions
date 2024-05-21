import {
  reactExtension,
  Button,
  BlockStack,
  Link,
  Sheet,
  TextBlock,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const {shouldShowBanner} = useCustomerPrivacy();

  const sheetId = 'sheet-consent';

  return (
    <Sheet
      id={sheetId}
      accessibilityLabel="A sheet that collects privacy consent preferences"
      defaultOpen={shouldShowBanner}
      primaryAction={
        <>
          <Button
            kind="secondary"
            onPress={() => {}}
          >
            I decline
          </Button>
          <Button
            kind="secondary"
            onPress={() => {}}
          >
            I agree
          </Button>
        </>
      }
    >
      <BlockStack spacing="none">
        <TextBlock>
          This website uses cookies to ensure you
          get the best experience on our website.
        </TextBlock>
        <TextBlock>
          <Link>Privacy Policy</Link> ‧{' '}
          <Link>Cookie Policy</Link> ‧{' '}
          <Link
          // overlay: <Modal>Preferences modal...</Modal>,
          >
            Preferences
          </Link>
        </TextBlock>
      </BlockStack>
    </Sheet>
  );
}
