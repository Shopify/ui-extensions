import {extend, Stack, Text} from '@shopify/admin-ui-extensions';

function buildInlineText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Inline text');
  return text;
}

function buildStackText(root) {
  const text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', (root) => {
  const vStack = root.createComponent(Stack, {
    vertical: true,
  });

  const hStack = root.createComponent(Stack, {
    distribution: 'center',
    alignment: 'fill',
    spacing: 'loose',
    wrap: false,
  });

  hStack.appendChild(buildInlineText(root));
  hStack.appendChild(buildInlineText(root));
  hStack.appendChild(buildInlineText(root));
  vStack.appendChild(hStack);

  vStack.appendChild(buildStackText(root));
  vStack.appendChild(buildStackText(root));
  vStack.appendChild(buildStackText(root));

  root.appendChild(vStack);

  root.mount();
});
