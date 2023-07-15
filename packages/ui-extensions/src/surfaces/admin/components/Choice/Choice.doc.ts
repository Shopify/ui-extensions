import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Choice',
  description:
    'This component represents an individual option within a ChoiceList. Use it to define the specific options users can select from within your ChoiceList.',
  requires: '',
  thumbnail: 'choicelist-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ChoiceProps',
      description: '',
      type: 'ChoiceProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    codeblock: {
      title: 'Simple Choicelist and Choice example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/basic-ChoiceList.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: '../ChoiceList/examples/basic-ChoiceList.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Choicelist',
      url: '/docs/api/admin-extensions/components/forms/Choicelist',
    },
  ],
};

export default data;
