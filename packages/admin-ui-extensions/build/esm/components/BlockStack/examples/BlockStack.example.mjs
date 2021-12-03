import { extend, BlockStack, Text } from '@shopify/admin-ui-extensions';

function buildStackText(root) {
  var text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', function (root) {
  var blockStack = root.createComponent(BlockStack, {
    inlineAlignment: 'center',
    spacing: 'loose'
  });
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  root.appendChild(blockStack);
  root.mount();
});