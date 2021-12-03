import { extend, InlineStack, StackItem, Text } from '@shopify/admin-ui-extensions';
extend('Playground', function (root) {
  var stack = root.createComponent(InlineStack);
  var stackItemFill = root.createComponent(StackItem, {
    fill: true
  });
  var stackItemText = root.createComponent(Text);
  stackItemText.appendChild('Fill the space');
  var stackItemNoFill = root.createComponent(StackItem);
  var text1 = root.createComponent(Text);
  text1.appendChild('Other text');
  var text2 = root.createComponent(Text);
  text2.appendChild('Even more text');
  stackItemFill.appendChild(stackItemText);
  stack.appendChild(stackItemFill);
  stackItemNoFill.appendChild(text1);
  stackItemNoFill.appendChild(text2);
  stack.appendChild(stackItemNoFill);
  root.appendChild(stack);
  root.mount();
});