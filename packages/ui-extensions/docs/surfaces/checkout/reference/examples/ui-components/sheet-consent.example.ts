import {
  extension,
  Sheet,
  Button,
  Link,
  TextBlock,
  BlockStack,
  InlineLayout,
  InlineStack,
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
        const sheetId = 'sheet-consent';
        const sheet = root.createComponent(
          Sheet,
          {
            id: sheetId,
            heading: 'We value your privacy',
            accessibilityLabel:
              'A sheet that collects privacy consent preferences',
            defaultOpen: shouldShowBanner,
          },
        );

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
        const blockStack = root.createComponent(
          BlockStack,
          {},
          [
            root.createComponent(
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
            ),
            root.createComponent(
              InlineLayout,
              {
                columns: ['fill', 'auto'],
                blockAlignment: 'baseline',
                minBlockSize: 'fill',
              },
              [
                root.createComponent(
                  InlineStack,
                  {inlineAlignment: 'start'},
                  [
                    root.createComponent(
                      Link,
                      {
                        onPress: () =>
                          console.log(
                            'Open another overlay to manage preferences',
                          ),
                      },
                      'Manage preferences',
                    ),
                  ],
                ),
                root.createComponent(
                  InlineStack,
                  {inlineAlignment: 'end'},
                  [
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
                      'Decline',
                    ),
                    root.createComponent(
                      Button,
                      {
                        onPress: () =>
                          handleConsentChange({
                            analytics: true,
                            marketing: true,
                            preferences: true,
                            saleOfData: true,
                          }),
                      },
                      'Accept',
                    ),
                  ],
                ),
              ],
            ),
          ],
        );

        sheet.appendChild(blockStack);
        root.appendChild(sheet);
      },
    );
  },
);
