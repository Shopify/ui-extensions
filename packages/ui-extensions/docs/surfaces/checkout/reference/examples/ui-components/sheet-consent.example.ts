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
  'purchase.checkout.block.render',
  (root, {customerPrivacy}) => {
    customerPrivacy.subscribe(
      ({shouldShowBanner}) => {
        const sheet = root.createComponent(
          Sheet,
          {
            id: 'sheet-consent',
            heading: 'We value your privacy',
            accessibilityLabel:
              'A sheet that collects privacy consent preferences',
            defaultOpen: shouldShowBanner,
          },
        );

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
                          console.log(
                            'Decline all and save',
                          ),
                      },
                      'Decline',
                    ),
                    root.createComponent(
                      Button,
                      {
                        kind: 'secondary',
                        onPress: () =>
                          console.log(
                            'Accept all and save',
                          ),
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
