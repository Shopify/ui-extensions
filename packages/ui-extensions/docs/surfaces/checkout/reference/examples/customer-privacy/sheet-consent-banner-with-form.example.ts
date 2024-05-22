import {
  BlockStack,
  Button,
  Checkbox,
  extension,
  Form,
  Grid,
  Link,
  Modal,
  Sheet,
  TextBlock,
} from '@shopify/ui-extensions/checkout';
import type {VisitorConsent} from '@shopify/ui-extensions/checkout';
// 1. Choose an extension target
export default extension(
  'purchase.checkout.footer.render-after',
  (
    root,
    {
      applyTrackingConsentChange,
      customerPrivacy,
      ui,
    },
  ) => {
    const sheetId = 'sheet-consent';
    const modalId = 'modal-consent';

    let showBanner =
      customerPrivacy.current.shouldShowBanner;

    const formValues: VisitorConsent = {
      analytics: undefined,
      marketing: undefined,
      preferences: undefined,
      saleOfData: undefined,
    };

    // 2. Subscribe to customer privacy consent values and update component state when customerPrivacy changes
    customerPrivacy.subscribe((value) => {
      if (!value) {
        return;
      }

      showBanner = value.shouldShowBanner;

      const {
        visitorConsent: {
          analytics,
          marketing,
          preferences,
          saleOfData,
        },
      } = value;

      formValues.analytics =
        value.visitorConsent.analytics;
      formValues.marketing =
        value.visitorConsent.marketing;
      formValues.preferences =
        value.visitorConsent.preferences;
      formValues.saleOfData =
        value.visitorConsent.saleOfData;

      analyticsCheckbox.updateProps({
        checked: analytics,
      });
      marketingCheckbox.updateProps({
        checked: marketing,
      });
      preferencesCheckbox.updateProps({
        checked: preferences,
      });
      saleOfDataCheckbox.updateProps({
        checked: saleOfData,
      });
    });

    // 3. Set up event handlers
    const handleConsentChange = async (
      visitorConsent?: VisitorConsent,
    ) => {
      const result =
        await applyTrackingConsentChange({
          ...(visitorConsent
            ? visitorConsent
            : formValues),
          type: 'changeVisitorConsent',
        });

      // Check if operation was successful
      if (result.type === 'success') {
        ui.overlay.close(modalId);
        ui.overlay.close(sheetId);
      } else {
        // Handle failure case here
      }
    };

    // 4. Create consent preferences form
    const analyticsCheckbox =
      root.createComponent(
        Checkbox,
        {
          checked: formValues.analytics,
          onChange: (checked: boolean) => {
            formValues.analytics = checked;
          },
        },
        'Analytics',
      );

    const marketingCheckbox =
      root.createComponent(
        Checkbox,
        {
          checked: formValues.marketing,
          onChange: (checked: boolean) => {
            formValues.marketing = checked;
          },
        },
        'Marketing',
      );

    const preferencesCheckbox =
      root.createComponent(
        Checkbox,
        {
          checked: formValues.preferences,
          onChange: (checked: boolean) => {
            formValues.preferences = checked;
          },
        },
        'Preferences',
      );

    const saleOfDataCheckbox =
      root.createComponent(
        Checkbox,
        {
          checked: formValues.saleOfData,
          onChange: (checked: boolean) => {
            formValues.saleOfData = checked;
          },
        },
        'Sale of data',
      );

    const consentFormSubmitButton =
      root.createComponent(
        Button,
        {accessibilityRole: 'submit'},
        'Save',
      );

    const consentForm = root.createComponent(
      Form,
      {
        onSubmit: () => handleConsentChange(),
      },
    );

    const consentFormBlockStack =
      root.createComponent(BlockStack);

    const consentFormGrid = root.createComponent(
      Grid,
      {
        spacing: 'base',
      },
    );

    consentFormGrid.appendChild(
      analyticsCheckbox,
    );
    consentFormGrid.appendChild(
      marketingCheckbox,
    );
    consentFormGrid.appendChild(
      preferencesCheckbox,
    );
    consentFormGrid.appendChild(
      saleOfDataCheckbox,
    );
    consentFormGrid.appendChild(
      consentFormSubmitButton,
    );

    consentFormBlockStack.appendChild(
      consentFormGrid,
    );
    consentFormBlockStack.appendChild(
      consentFormSubmitButton,
    );
    consentForm.appendChild(
      consentFormBlockStack,
    );

    // 5. Create modal to display consent form
    const modalFragment = root.createFragment();

    const modal = root.createComponent(
      Modal,
      {
        id: modalId,
        padding: true,
      },
      [consentForm],
    );

    modalFragment.appendChild(modal);

    const declineButton = root.createComponent(
      Button,
      {
        kind: 'secondary',
        onPress: () =>
          handleConsentChange({
            analytics: false,
            marketing: false,
            preferences: false,
            saleOfData: false,
          }),
      },
      'I decline',
    );

    const acceptButton = root.createComponent(
      Button,
      {
        kind: 'secondary',
        onPress: () =>
          handleConsentChange({
            analytics: true,
            marketing: true,
            preferences: true,
            saleOfData: true,
          }),
      },
      'I agree',
    );

    const settingsButton = root.createComponent(
      Button,
      {
        kind: 'plain',
        overlay: modalFragment,
      },
      'Settings',
    );

    const primaryActionFragment =
      root.createFragment();

    primaryActionFragment.appendChild(
      declineButton,
    );
    primaryActionFragment.appendChild(
      acceptButton,
    );

    const secondaryActionFragment =
      root.createFragment();

    secondaryActionFragment.appendChild(
      settingsButton,
    );

    // 6. Create sheet to display privacy consent banner
    const sheet = root.createComponent(
      Sheet,
      {
        id: sheetId,
        defaultOpen: showBanner,
        accessibilityLabel:
          'A sheet that collects privacy consent preferences',
        primaryAction: primaryActionFragment,
        secondaryAction: secondaryActionFragment,
      },
      [
        root.createComponent(
          TextBlock,
          undefined,
          [
            'This website uses cookies to ensure you get the best experience on our website test.',
            ' ',
            root.createComponent(
              Link,
              undefined,
              'Privacy Policy',
            ),
          ],
        ),
      ],
    );

    root.appendChild(sheet);
  },
);
