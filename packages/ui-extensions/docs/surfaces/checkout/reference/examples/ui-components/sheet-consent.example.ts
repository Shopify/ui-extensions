import {
  extension,
  Sheet,
  Button,
  Link,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

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
    customerPrivacy.subscribe(
      ({shouldShowBanner}) => {
        const primaryFragment =
          root.createFragment();
        const secondaryFragment =
          root.createFragment();
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

        const declineButton =
          root.createComponent(
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

        const agreeButton = root.createComponent(
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

        const settingsButton =
          root.createComponent(
            Button,
            {
              kind: 'secondary',
            },
            'Settings',
          );

        primaryFragment.appendChild(
          declineButton,
        );
        primaryFragment.appendChild(agreeButton);
        secondaryFragment.appendChild(
          settingsButton,
        );

        const sheetId = 'sheet-consent';
        const sheet = root.createComponent(
          Sheet,
          {
            id: sheetId,
            heading: 'We value your privacy',
            accessibilityLabel:
              'A sheet that collects privacy consent preferences',
            defaultOpen: shouldShowBanner,
            primaryAction: primaryFragment,
            secondaryAction: secondaryFragment,
          },
        );

        const textBlock = root.createComponent(
          TextBlock,
          null,
          [
            'We and our partners use cookies and other technologies to improve your experience, measure performance, and tailor marketing. Details in our ',
            root.createComponent(
              Link,
              null,
              'Privacy Policy',
            ),
          ],
        );

        sheet.appendChild(textBlock);
        root.appendChild(sheet);
      },
    );
  },
);
