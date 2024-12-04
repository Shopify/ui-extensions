import {
  extension,
  Button,
  ClipboardItem,
  Icon,
  InlineStack,
  Text,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const button = root.createComponent(Button, {
      activateTarget: 'sample-id',
    });

    const inlineStack = root.createComponent(
      InlineStack,
      {},
    );

    const text = root.createComponent(
      Text,
      {},
      'Copy to clipboard',
    );

    const icon = root.createComponent(Icon, {
      source: 'clipboard',
      appearance: 'monochrome',
    });

    const clipboardItem = root.createComponent(
      ClipboardItem,
      {
        text: 'This text will be copied to the clipboard',
        id: 'sample-id',
        onCopy: () => {
          icon.updateProps({source: 'success'});
          setTimeout(() => {
            icon.updateProps({
              source: 'clipboard',
            });
          }, 2500);
        },
        onCopyError: () => {
          icon.updateProps({source: 'error'});
          setTimeout(() => {
            icon.updateProps({
              source: 'clipboard',
            });
          }, 2500);
        },
      },
    );

    button.appendChild(inlineStack);
    inlineStack.appendChild(text);
    inlineStack.appendChild(icon);
    root.appendChild(button);
    root.appendChild(clipboardItem);
  },
);
