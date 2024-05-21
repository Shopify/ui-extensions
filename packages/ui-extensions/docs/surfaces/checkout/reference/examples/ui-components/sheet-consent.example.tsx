import {
  reactExtension,
  Button,
  Link,
  Sheet,
  TextBlock,
  useApi,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const {applyTrackingConsentChange, ui} =
    useApi();

  const {shouldShowBanner} = useCustomerPrivacy();

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
      if (result.type === 'success') {
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
      primaryAction={
        <>
          <Button
            kind="secondary"
            onPress={() =>
              handleConsentChange({
                // values derived from local form state
                analytics: false,
                marketing: false,
                preferences: false,
                saleOfData: false,
              })
            }
          >
            I decline
          </Button>
          <Button
            kind="secondary"
            onPress={() =>
              handleConsentChange({
                analytics: true,
                marketing: true,
                preferences: true,
                saleOfData: true,
              })
            }
          >
            I agree
          </Button>
        </>
      }
      secondaryAction={
        <Button
          kind="plain"
          overlay={
            // Open a settings modal
          }
        >
          Settings
        </Button>
      }
    >
      <TextBlock>
        This website uses cookies to ensure you
        get the best experience on our website.
        <Link>Privacy Policy</Link>
      </TextBlock>
    </Sheet>
  );
}
