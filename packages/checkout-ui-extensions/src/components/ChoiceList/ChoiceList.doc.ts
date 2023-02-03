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
          title: 'JS',
          code: './examples/basic-choicelist.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/ChoiceList/examples/basic-choicelist.example.tsx',
          language: 'tsx',
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
      url: 'checkox',
      type: 'Component',
    },
  ],
};

export default data;
