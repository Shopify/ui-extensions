import {
  extension,
  BlockStack,
  Choice,
  ChoiceList,
  DatePicker,
  TextBlock,
  TextField,
  View,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const choiceList = root.createComponent(
      ChoiceList,
      {
        name: 'white-glove',
        value: ['white-glove-1'],
        onChange: (nextValue) => {
          console.log(
            `onChange event with value: ${nextValue}`,
          );
        },
      },
      [
        root.createComponent(
          Choice,
          {id: 'white-glove-1'},
          [
            root.createComponent(
              BlockStack,
              {spacing: 'base'},
              [
                root.createComponent(
                  BlockStack,
                  {spacing: 'extraTight'},
                  [
                    root.createComponent(
                      TextBlock,
                      {},
                      'Choose a delivery date',
                    ),
                    root.createComponent(
                      View,
                      {
                        background: 'base',
                        border: 'base',
                        cornerRadius: 'base',
                        padding: 'base',
                      },
                      root.createComponent(
                        DatePicker,
                        {selected: ''},
                      ),
                    ),
                  ],
                ),
                root.createComponent(
                  BlockStack,
                  {spacing: 'extraTight'},
                  [
                    root.createComponent(
                      TextField,
                      {
                        label:
                          'Additional instructions',
                        value: '',
                      },
                    ),
                    root.createComponent(
                      TextBlock,
                      {
                        appearance: 'subdued',
                        size: 'small',
                      },
                      'The more detailed the delivery instructions are, the best we can make the delivery experience for you.',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
    );

    root.appendChild(choiceList);
  },
);
