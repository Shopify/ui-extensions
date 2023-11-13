import {
  extension,
  Choice,
  ChoiceList,
  Grid,
  TextBlock,
  View,
} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root) => {
    const grid = root.createComponent(
      Grid,
      {
        columns: [
          'fill',
          '13%',
          '13%',
          '13%',
          '13%',
          '13%',
        ],
        rows: 'auto',
        spacing: 'none',
        border: 'base',
        cornerRadius: 'base',
        overflow: 'hidden',
      },
      [
        root.createComponent(View, {}, []),
        root.createComponent(
          View,
          {
            padding: ['tight', 'extraTight'],
            blockAlignment: 'center',
            accessibilityVisibility: 'hidden',
          },
          root.createComponent(
            TextBlock,
            {inlineAlignment: 'center'},
            'Strongly disagree',
          ),
        ),
        root.createComponent(
          View,
          {
            padding: ['tight', 'extraTight'],
            blockAlignment: 'center',
            accessibilityVisibility: 'hidden',
          },
          root.createComponent(
            TextBlock,
            {inlineAlignment: 'center'},
            'Disagree',
          ),
        ),
        root.createComponent(
          View,
          {
            padding: ['tight', 'extraTight'],
            blockAlignment: 'center',
            accessibilityVisibility: 'hidden',
          },
          root.createComponent(
            TextBlock,
            {inlineAlignment: 'center'},
            'Neutral',
          ),
        ),
        root.createComponent(
          View,
          {
            padding: ['tight', 'extraTight'],
            blockAlignment: 'center',
            accessibilityVisibility: 'hidden',
          },
          root.createComponent(
            TextBlock,
            {inlineAlignment: 'center'},
            'Agree',
          ),
        ),
        root.createComponent(
          View,
          {
            padding: ['tight', 'extraTight'],
            blockAlignment: 'center',
            accessibilityVisibility: 'hidden',
          },
          root.createComponent(
            TextBlock,
            {inlineAlignment: 'center'},
            'Strongly agree',
          ),
        ),
        // Then create the ChoiceList for 'question1'
        root.createComponent(
          ChoiceList,
          {
            name: 'question1',
            value: '',
            onChange: (value) => {
              console.log(
                `onChange event with value: ${value}`,
              );
            },
          },
          [
            root.createComponent(
              View,
              {
                background: 'subdued',
                padding: 'base',
                blockAlignment: 'center',
              },
              root.createComponent(
                TextBlock,
                {},
                'I recommend Plant to others.',
              ),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question1-1',
                accessibilityLabel:
                  'Strongly disagree',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question1-2',
                accessibilityLabel: 'Disagree',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question1-3',
                accessibilityLabel: 'Neutral',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question1-4',
                accessibilityLabel: 'Agree',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question1-5',
                accessibilityLabel:
                  'Strongly agree',
              }),
            ),
          ],
        ),
        // Then create the ChoiceList for 'question2'
        root.createComponent(
          ChoiceList,
          {
            name: 'question2',
            value: '',
            onChange: (value) => {
              console.log(
                `onChange event with value: ${value}`,
              );
            },
          },
          [
            root.createComponent(
              View,
              {
                padding: 'base',
                blockAlignment: 'center',
              },
              root.createComponent(
                TextBlock,
                {},
                'I have had a positive experience purchasing from Plant.',
              ),
            ),
            root.createComponent(
              View,
              {
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question2-1',
                accessibilityLabel:
                  'Strongly disagree',
              }),
            ),
            root.createComponent(
              View,
              {
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question2-2',
                accessibilityLabel: 'Disagree',
              }),
            ),
            root.createComponent(
              View,
              {
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question2-3',
                accessibilityLabel: 'Neutral',
              }),
            ),
            root.createComponent(
              View,
              {
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question2-4',
                accessibilityLabel: 'Agree',
              }),
            ),
            root.createComponent(
              View,
              {
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question2-5',
                accessibilityLabel:
                  'Strongly agree',
              }),
            ),
          ],
        ),
        // Then create the ChoiceList for 'question3'
        root.createComponent(
          ChoiceList,
          {
            name: 'question3',
            value: '',
            onChange: (value) => {
              console.log(
                `onChange event with value: ${value}`,
              );
            },
          },
          [
            root.createComponent(
              View,
              {
                background: 'subdued',
                padding: 'base',
                blockAlignment: 'center',
              },
              root.createComponent(
                TextBlock,
                {},
                'I would purchase from Plant again.',
              ),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question3-1',
                accessibilityLabel:
                  'Strongly disagree',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question3-2',
                accessibilityLabel: 'Disagree',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question3-3',
                accessibilityLabel: 'Neutral',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question3-4',
                accessibilityLabel: 'Agree',
              }),
            ),
            root.createComponent(
              View,
              {
                background: 'subdued',
                blockAlignment: 'center',
                inlineAlignment: 'center',
              },
              root.createComponent(Choice, {
                id: 'question3-5',
                accessibilityLabel:
                  'Strongly agree',
              }),
            ),
          ],
        ),
      ],
    );

    root.appendChild(grid);
  },
);
