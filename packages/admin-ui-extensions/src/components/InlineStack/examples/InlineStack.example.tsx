import {extend, InlineStack, Text} from '@shopify/admin-ui-extensions';

function buildStackText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', (root) => {
  const inlineStack = root.createComponent(InlineStack, {
    inlineAlignment: 'center',
    spacing: 'loose',
  });

  inlineStack.appendChild(buildStackText(root));
  inlineStack.appendChild(buildStackText(root));
  inlineStack.appendChild(buildStackText(root));

  root.appendChild(inlineStack);

  root.mount();
});
