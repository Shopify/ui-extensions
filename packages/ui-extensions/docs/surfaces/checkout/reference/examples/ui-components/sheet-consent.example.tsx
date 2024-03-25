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
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    applyTrackingConsentChange,
    customerPrivacy,
    ui,
  } = useApi();

  const {shouldShowBanner} = useSubscription(
    customerPrivacy,
  );

  const sheetId = 'sheet-consent';

  const handleConsentChange = async ({
    analytics,
    marketing,
    preferences,
    saleOfData,
  }) => {
    try {
      const result =
        await applyTrackingConsentChange({
          type: 'changeVisitorConsent',
          analytics,
          marketing,
          preferences,
          saleOfData,
        });

      // Check if operation was successful
      if (result) {
        ui.overlay.close(sheetId);
      } else {
        // Handle failure case here
      }
    } catch (error) {
      // Handle error case here
    }
  };

  return (
    <Sheet
      id={sheetId}
      heading="We value your privacy"
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
                handleConsentChange({
                  analytics: false,
                  marketing: false,
                  preferences: false,
                  saleOfData: false,
                })
              }
            >
              Decline
            </Button>
            <Button
              onPress={() =>
                handleConsentChange({
                  analytics: true,
                  marketing: true,
                  preferences: true,
                  saleOfData: true,
                })
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
