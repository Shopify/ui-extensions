import {
  Chat,
  extension,
} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  'purchase.thank-you.chat.render',
  (root) => {
    // 2. Render a Chat application. This target only accepts the Chat component. Any other components will not render.
    root.appendChild(
      root.createComponent(Chat, {
        inlineSize: 100,
        blockSize: 50,
      }),
    );
  },
);
