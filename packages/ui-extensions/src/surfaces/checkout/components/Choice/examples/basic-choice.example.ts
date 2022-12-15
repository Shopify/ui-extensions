import {
  extend,
  ChoiceList,
  Choice,
  BlockStack,
  InlineStack,
} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root) => {
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
        root.createComponent(Choice, {id: 'first'}, 'Ship'),
        root.createComponent(Choice, {id: 'second'}, 'Pickup'),
      ]),
    ],
  );

  const multipleChoiceList = root.createComponent(
    ChoiceList,
    {
      name: 'multipleChoice',
      value: ['multipleFirst'],
      onChange: (value) => {
        console.log(`onChange event with value: ${value}`);
      },
    },
    [
      root.createComponent(BlockStack, undefined, [
        root.createComponent(Choice, {id: 'multipleFirst'}, 'Gift message'),
        root.createComponent(Choice, {id: 'multipleSecond'}, 'Gift wrapping'),
      ]),
    ],
  );

  const layout = root.createComponent(InlineStack, undefined, [
    choiceList,
    multipleChoiceList,
  ]);

  root.appendChild(layout);
});
