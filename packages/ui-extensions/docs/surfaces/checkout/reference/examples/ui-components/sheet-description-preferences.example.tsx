import {
  reactExtension,
  Button,
  BlockStack,
  Link,
  Sheet,
  TextBlock,
  useApi,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const {customerPrivacy} = useApi();

  const sheetId = 'sheet-consent';

  return (
    <Sheet
      id={sheetId}
      accessibilityLabel="A sheet that collects privacy consent preferences"
      defaultOpen={customerPrivacy.current.shouldShowBanner}
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
