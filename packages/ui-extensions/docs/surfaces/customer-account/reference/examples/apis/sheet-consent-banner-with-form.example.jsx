import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState, useRef} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {
    shouldShowBanner,
    visitorConsent: {
      analytics,
      marketing,
      preferences,
      saleOfData,
    },
  } = shopify.customerPrivacy.value;

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
  const sheetRef = useRef(null);
  const modalRef = useRef(null);

  const getCheckboxOnChangeHandler = (key) => {
    return function (event) {
      setConsentFormValues({
        ...consentFormValues,
        [key]: event.currentTarget.checked,
      });
    };
  };

  const handleConsentChange = async (visitorConsent) => {
    try {
      const result =
        await shopify.applyTrackingConsentChange({
          ...(visitorConsent
            ? visitorConsent
            : consentFormValues),
          type: 'changeVisitorConsent',
        });

      // Check if operation was successful
      if (result.type === 'success') {
        modalRef.current?.hideOverlay();
        sheetRef.current?.hideOverlay();
      } else {
        // Handle failure case here
      }
    } catch (error) {
      // Handle error case here
    }
  };

  const consentFormMarkup = (
    <s-form
      onSubmit={() => handleConsentChange(undefined)}
    >
      <s-stack direction="block">
        <s-grid gap="base">
          <s-checkbox
            id="marketing"
            label="Marketing"
            value={String(consentFormValues.marketing)}
            onChange={getCheckboxOnChangeHandler(
              'marketing',
            )}
          />
          <s-checkbox
            id="analytics"
            label="Analytics"
            value={String(consentFormValues.analytics)}
            onChange={getCheckboxOnChangeHandler(
              'analytics',
            )}
          />
          <s-checkbox
            id="preferences"
            label="Preferences"
            value={String(consentFormValues.preferences)}
            onChange={getCheckboxOnChangeHandler(
              'preferences',
            )}
          />
          <s-checkbox
            id="saleOfData"
            label="Sale of data"
            value={String(consentFormValues.saleOfData)}
            onChange={getCheckboxOnChangeHandler(
              'saleOfData',
            )}
          />
        </s-grid>
        <s-button type="submit">Save</s-button>
      </s-stack>
    </s-form>
  );

  return (
    <s-sheet
      id={sheetId}
      ref={sheetRef}
      accessibilityLabel="A sheet that collects privacy consent preferences"
      defaultOpen
      // defaultOpen={shouldShowBanner}
    >
      <s-button
        slot="primary-action"
        variant="secondary"
        onClick={() =>
          handleConsentChange({
            analytics: false,
            marketing: false,
            preferences: false,
            saleOfData: false,
          })
        }
      >
        I decline
      </s-button>
      <s-button
        slot="primary-action"
        variant="secondary"
        onClick={() =>
          handleConsentChange({
            analytics: true,
            marketing: true,
            preferences: true,
            saleOfData: true,
          })
        }
      >
        I agree
      </s-button>

      <s-button
        slot="secondary-action"
        commandFor={modalId}
      >
        Settings
      </s-button>
      <s-modal id={modalId} ref={modalRef}>
        {consentFormMarkup}
      </s-modal>

      <s-paragraph>
        This website uses cookies to ensure you
        get the best experience on our website.{' '}
        <s-link>Privacy Policy</s-link>
      </s-paragraph>
    </s-sheet>
  );
}
