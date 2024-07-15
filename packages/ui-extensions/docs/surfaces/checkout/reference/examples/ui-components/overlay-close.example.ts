import {
  extension,
  Button,
  Link,
  Modal,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {ui}) => {
    const modalFragment = root.createFragment();
    const modal = root.createComponent(
      Modal,
      {
        id: 'my-modal',
        padding: true,
        title: 'Return policy',
      },
      root.createComponent(
        TextBlock,
        {},
        'We have a 30-day return policy.',
      ),
      root.createComponent(
        Button,
        {
          onPress: () =>
            ui.overlay.close('my-modal'),
        },
        'Close',
      ),
    );
    modalFragment.appendChild(modal);

    const link = root.createComponent(
      Link,
      {
        overlay: modalFragment,
      },
      'Return policy',
    );

    root.appendChild(link);
  },
);
