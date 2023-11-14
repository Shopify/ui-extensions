import {
  extension,
  BlockStack,
  ChoiceList,
  Choice,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const choiceList = root.createComponent(
      ChoiceList,
      {
        name: 'time',
        value: '',
        onChange: (value) => {
          console.log(
            `onChange event with value: ${value}`,
          );
        },
      },
      [
        root.createComponent(BlockStack, {}, [
          root.createComponent(
            Choice,
            {id: 'morning'},
            '9:00 AM - 12:00 PM',
          ),
          root.createComponent(
            Choice,
            {id: 'afternoon'},
            '12:00 PM - 3:00 PM',
          ),
          root.createComponent(
            Choice,
            {id: 'evening'},
            '3:00 PM - 5:00 PM',
          ),
        ]),
      ],
    );

    root.appendChild(choiceList);
  },
);
