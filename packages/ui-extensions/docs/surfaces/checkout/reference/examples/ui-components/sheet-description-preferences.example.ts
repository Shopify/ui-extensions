import {
  extension,
  Sheet,
  Button,
  Link,
  TextBlock,
  BlockStack,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.footer.render-after',
  (root, {customerPrivacy}) => {
    const primaryFragment = root.createFragment();

    const declineButton = root.createComponent(
      Button,
      {
        kind: 'secondary',
        onPress: () => {},
      },
      'I decline',
    );

    const agreeButton = root.createComponent(
      Button,
      {
        kind: 'secondary',
        onPress: () => {},
      },
      'I agree',
    );

    primaryFragment.appendChild(declineButton);
    primaryFragment.appendChild(agreeButton);

    const sheetId = 'sheet-consent';
    const sheet = root.createComponent(Sheet, {
      id: sheetId,
      accessibilityLabel:
        'A sheet that collects privacy consent preferences',
      defaultOpen:
        customerPrivacy.current.shouldShowBanner,
      primaryAction: primaryFragment,
    });

    const textBlock = root.createComponent(
      TextBlock,
      null,
      'This website uses cookies to ensure you get the best experience on our website.',
    );

    const linkBlock = root.createComponent(
      TextBlock,
      null,
      [
        root.createComponent(
          Link,
          null,
          'Privacy Policy',
        ),
        ' ‧ ',
        root.createComponent(
          Link,
          null,
          'Cookie Policy',
        ),
        ' ‧ ',
        root.createComponent(
          Link,
          {
            // overlay: <Modal>Preferences modal...</Modal>,,
          },
          'Preferences',
        ),
      ],
    );

    const blockStack = root.createComponent(
      BlockStack,
      {spacing: 'none'},
      [textBlock, linkBlock],
    );
    sheet.appendChild(blockStack);
    root.appendChild(sheet);
  },
);
