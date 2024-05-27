import {useState} from 'react';
import {
  reactExtension,
  BlockStack,
  Button,
  Checkbox,
  Form,
  Grid,
  Link,
  Modal,
  Sheet,
  TextBlock,
  useApi,
  useCustomerPrivacy,
} from '@shopify/ui-extensions-react/checkout';

import type {VisitorConsent} from '@shopify/ui-extensions/checkout';

export default reactExtension(
  'purchase.checkout.footer.render-after',
  () => <Extension />,
);

function Extension() {
  const {applyTrackingConsentChange, ui} =
    useApi();

  const {
    shouldShowBanner,
    visitorConsent: {
      analytics,
      marketing,
      preferences,
      saleOfData,
    },
  } = useCustomerPrivacy();

  const [
    consentFormValues,
    setConsentFormValues,
  ] = useState({
    analytics,
    marketing,
    preferences,
    saleOfData,
  });

  const sheetId = 'sheet-consent';
  const modalId = 'modal-consent';

  const getCheckboxOnChangeHandler = (
    key: string,
  ) => {
    return function (checked: boolean) {
      setConsentFormValues({
        ...consentFormValues,
        [key]: checked,
      });
    };
  };

  const handleConsentChange = async (
    visitorConsent?: VisitorConsent,
  ) => {
    try {
      const result =
        await applyTrackingConsentChange({
          ...(visitorConsent
            ? visitorConsent
            : consentFormValues),
          type: 'changeVisitorConsent',
        });

      // Check if operation was successful
      if (result.type === 'success') {
        ui.overlay.close(modalId);
        ui.overlay.close(sheetId);
      } else {
        // Handle failure case here
      }
    } catch (error) {
      // Handle error case here
    }
  };

  const consentFormMarkup = (
    <Form onSubmit={() => handleConsentChange()}>
      <BlockStack>
        <Grid spacing="base">
          <Checkbox
            id="marketing"
            checked={consentFormValues.marketing}
            onChange={getCheckboxOnChangeHandler(
              'marketing',
            )}
          >
            Marketing
          </Checkbox>
          <Checkbox
            id="analytics"
            checked={consentFormValues.analytics}
            onChange={getCheckboxOnChangeHandler(
              'analytics',
            )}
          >
            Analytics
          </Checkbox>
          <Checkbox
            id="preferences"
            checked={
              consentFormValues.preferences
            }
            onChange={getCheckboxOnChangeHandler(
              'preferences',
            )}
          >
            Preferences
          </Checkbox>
          <Checkbox
            id="saleOfData"
            checked={consentFormValues.saleOfData}
            onChange={getCheckboxOnChangeHandler(
              'saleOfData',
            )}
          >
            Sale of data
          </Checkbox>
        </Grid>
        <Button accessibilityRole="submit">
          Save
        </Button>
      </BlockStack>
    </Form>
  );

  return (
    <Sheet
      id={sheetId}
      accessibilityLabel="A sheet that collects privacy consent preferences"
      defaultOpen={shouldShowBanner}
      primaryAction={
        <>
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
            <Modal id={modalId} padding>
              {consentFormMarkup}
            </Modal>
          }
        >
          Settings
        </Button>
      }
    >
      <TextBlock>
        This website uses cookies to ensure you
        get the best experience on our website.{' '}
        <Link>Privacy Policy</Link>
      </TextBlock>
    </Sheet>
  );
}
