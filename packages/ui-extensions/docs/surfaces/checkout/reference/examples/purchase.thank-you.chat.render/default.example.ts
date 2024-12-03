import {
  Chat,
  extension,
} from '@shopify/ui-extensions/checkout';

// 1. Choose an extension target
export default extension(
  'purchase.thank-you.chat.render',
  (root) => {
<<<<<<< HEAD
    // 2. Render a Chat application. This target only accepts the Chat component. Any other components will not render.
=======
    // 2. Render a Chat UI. This target only accepts the Chat component. Any other components will not render.
>>>>>>> cc96bc544 ([checkout] Update to 8a702e0c1ea83ccac07e2f79c060d23fd68038f9)
    root.appendChild(
      root.createComponent(Chat, {
        inlineSize: 100,
        blockSize: 50,
      }),
    );
  },
);
