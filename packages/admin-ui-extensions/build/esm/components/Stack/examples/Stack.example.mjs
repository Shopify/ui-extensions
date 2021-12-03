import { extend, Stack, Text } from '@shopify/admin-ui-extensions';

function buildInlineText(root) {
  var text = root.createComponent(Text);
  text.appendChild('Inline text');
  return text;
}

function buildStackText(root) {
  var text = root.createComponent(Text);
  text.appendChild('Items to stack');
  return text;
}

extend('Playground', function (root) {
  var vStack = root.createComponent(Stack, {
    vertical: true
  });
  var hStack = root.createComponent(Stack, {
    distribution: 'center',
    alignment: 'fill',
    spacing: 'loose',
    wrap: false
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