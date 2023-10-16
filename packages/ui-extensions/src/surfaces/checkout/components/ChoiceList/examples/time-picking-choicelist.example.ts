import {
  extension,
  ChoiceList,
  Choice,
  BlockStack,
} from '@shopify/ui-extensions/checkout';

export default extension('purchase.checkout.block.render', (root) => {
  const choiceList = root.createComponent(
    ChoiceList,
    {
      name: 'choice',
      value: 'first',
      onChange: (value) => {
        console.log(`onChange event with value: ${value}`);
      },
    },
    [
      root.createComponent(BlockStack, undefined, [
        root.createComponent(Choice, {id: 'first'}, '9:00 AM - 12:00 PM'),
        root.createComponent(Choice, {id: 'second'}, '12:00 PM - 3:00 PM'),
        root.createComponent(Choice, {id: 'third'}, '3:00 PM - 5:00 PM'),
      ]),
    ],
  );

  root.appendChild(choiceList);
});
