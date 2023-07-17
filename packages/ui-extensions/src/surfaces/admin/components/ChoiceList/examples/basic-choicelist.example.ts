import {
  extension,
  ChoiceList,
  Choice,
  BlockStack,
  InlineStack,
} from '@shopify/ui-extensions/admin';

extension('Playground', (root) => {
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
        root.createComponent(Choice, {id: 'first'}, 'Accept Review'),
        root.createComponent(Choice, {id: 'second'}, 'Reject Review'),
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
        root.createComponent(Choice, {id: 'multipleFirst'}, 'Thank customer'),
        root.createComponent(Choice, {id: 'multipleSecond'}, 'Provide Reason for Accepting/Rejecting'),
      ]),
    ],
  );

  const layout = root.createComponent(InlineStack, undefined, [
    choiceList,
    multipleChoiceList,
  ]);

  root.appendChild(layout);
});
