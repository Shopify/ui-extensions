import {
  extension,
  Sheet,
  Button,
  Link,
  TextBlock,
  Icon,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.footer.render-after',
  (root, {customerPrivacy}) => {
    const primaryFragment = root.createFragment();
    const secondaryFragment =
      root.createFragment();

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

    const preferencesButton =
      root.createComponent(
        Button,
        {
          kind: 'secondary',
        },
        root.createComponent(Icon, {
          source: 'settings',
        }),
      );

    primaryFragment.appendChild(declineButton);
    primaryFragment.appendChild(agreeButton);
    secondaryFragment.appendChild(
      preferencesButton,
    );

    const sheet = root.createComponent(Sheet, {
      accessibilityLabel:
        'A sheet that collects privacy consent preferences',
      defaultOpen:
        customerPrivacy.current.shouldShowBanner,
      primaryAction: primaryFragment,
      secondaryAction: secondaryFragment,
    });

    const textBlock = root.createComponent(
      TextBlock,
      null,
      [
        'This website uses cookies to ensure you get the best experience on our website. ',
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
