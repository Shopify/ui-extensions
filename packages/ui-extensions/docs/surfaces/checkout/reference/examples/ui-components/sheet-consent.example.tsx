import {
  reactExtension,
  Button,
  Link,
  Sheet,
  TextBlock,
  BlockStack,
  InlineLayout,
  InlineStack,
  useApi,
  useSubscription,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {customerPrivacy} = useApi();

  const {shouldShowBanner} = useSubscription(
    customerPrivacy,
  );

  return (
    <Sheet
      id="sheet-consent"
      title="We value your privacy"
      accessibilityLabel="A sheet that collects privacy consent preferences"
      defaultOpen={shouldShowBanner}
    >
      <BlockStack>
        <TextBlock>
          We and our partners use cookies and
          other technologies to improve your
          experience, measure performance, and
          tailor marketing. Details in our{' '}
          <Link>Privacy Policy</Link>
        </TextBlock>
        <InlineLayout
          columns={['fill', 'auto']}
          blockAlignment="baseline"
          minBlockSize="fill"
        >
          <InlineStack inlineAlignment="start">
            <Link
              onPress={() =>
                console.log(
                  'Open another overlay to manage preferences',
                )
              }
            >
              Manage preferences
            </Link>
          </InlineStack>

          <InlineStack inlineAlignment="end">
            <Button
              kind="secondary"
              onPress={() =>
                console.log(
                  'Decline all and save',
                )
              }
            >
              Decline
            </Button>
            <Button
              kind="secondary"
              onPress={() =>
                console.log('Accept all and save')
              }
            >
              Accept
            </Button>
          </InlineStack>
        </InlineLayout>
      </BlockStack>
    </Sheet>
  );
}
