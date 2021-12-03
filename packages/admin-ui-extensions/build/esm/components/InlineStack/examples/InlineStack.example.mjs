import { extend, InlineStack, Text } from '@shopify/admin-ui-extensions';

function buildStackText(root) {
  var text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', function (root) {
  var inlineStack = root.createComponent(InlineStack, {
    inlineAlignment: 'center',
    spacing: 'loose'
  });
  inlineStack.appendChild(buildStackText(root));
  inlineStack.appendChild(buildStackText(root));
  inlineStack.appendChild(buildStackText(root));
  root.appendChild(inlineStack);
  root.mount();
});