import {
  Chat,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

// 1. Choose an extension target
export default reactExtension(
  'purchase.thank-you.chat.render',
  () => <Extension />,
);

function Extension() {
  // 2. Render a Chat application. This target only accepts the Chat component. Any other components will not render.
  return <Chat inlineSize={100} blockSize={50} />;
}
