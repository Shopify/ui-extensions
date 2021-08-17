import {extend, InlineStack, Text} from '@shopify/admin-ui-extensions';

function buildStackText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', (root) => {
  const InlineStack = root.createComponent(InlineStack, {
    inlineAlignment: 'center',
    spacing: 'loose',
  });

  InlineStack.appendChild(buildStackText(root));
  InlineStack.appendChild(buildStackText(root));
  InlineStack.appendChild(buildStackText(root));

  root.appendChild(InlineStack);

  root.mount();
});
