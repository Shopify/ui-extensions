import {
  extension,
  Sheet,
  Button,
  Link,
  TextBlock,
  Image,
  InlineLayout,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.footer.render-after',
  (root, {customerPrivacy}) => {
    customerPrivacy.subscribe(
      ({shouldShowBanner}) => {
        const primaryFragment =
          root.createFragment();
        const secondaryFragment =
          root.createFragment();

        const declineButton =
          root.createComponent(
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
              kind: 'plain',
            },
            'Preferences',
          );

        primaryFragment.appendChild(
          declineButton,
        );
        primaryFragment.appendChild(agreeButton);
        secondaryFragment.appendChild(
          preferencesButton,
        );

        const sheet = root.createComponent(
          Sheet,
          {
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
            'This website uses cookies to ensure you get the best experience on our website.',
            root.createComponent(
              Link,
              null,
              'Learn more',
            ),
          ],
        );

        const inlineLayout = root.createComponent(
          InlineLayout,
          {
            padding: 'none',
            spacing: 'small100',
            columns: [38, 'fill'],
          },
          [
            root.createComponent(Image, {
              source:
                'https://yourawesomeimage.com',
            }),
            textBlock,
          ],
        );

        sheet.appendChild(inlineLayout);
        root.appendChild(sheet);
      },
    );
  },
);
