import {extension, BlockStack, Text} from '@shopify/ui-extensions/admin';

function buildStackText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

export default extension('Playground', (root) => {
  const blockStack = root.createComponent(BlockStack, {
    inlineAlignment: 'center',
    spacing: 'loose',
  });

  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));
  blockStack.appendChild(buildStackText(root));

  root.appendChild(blockStack);

  root.mount();
});
