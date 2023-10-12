import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'Use choice lists to present a list of choices where buyers can make a single selection or multiple selections.',
  thumbnail: 'choicelist-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ChoiceListProps',
      description: '',
      type: 'ChoiceListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    codeblock: {
      title: 'Basic ChoiceList',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ChoiceList/examples/basic-choicelist.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-choicelist.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Include a title that either tells customers what to do or explains their available options.\n\n- Label options clearly based on what the option will do.\n\n- Avoid options that contradict each other when you’re allowing for multiple selections.',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        image: 'choicelist-time-picking.png',
        description: `The ChoiceList component is great for presenting a concise list of options, particularly when showcasing time ranges due to its ample horizontal space. However, if there's more than 5 choices, use the [Select](/docs/api/checkout-ui-extensions/components/forms/select) component instead.`,
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ChoiceList/examples/time-picking-choicelist.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/time-picking-choicelist.example.ts',
              language: 'js',
            },
          ],
          title:
            'Using the ChoiceList component to display a short list of time choices',
        },
      },
    ],
  },
  related: [
    {
      name: 'Choice',
      subtitle: 'Component',
      url: 'choice',
      type: 'Component',
    },
    {
      name: 'Checkbox',
      subtitle: 'Component',
      url: 'checkbox',
      type: 'Component',
    },
  ],
};

export default data;
