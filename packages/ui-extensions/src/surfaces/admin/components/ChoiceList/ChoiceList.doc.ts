import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    "Use this component when you want to present users with a list of options, similar to HTML radio buttons. It's flexible enough to allow multiple selections if needed, providing a versatile way to capture user choices.",
  requires: '',
  thumbnail: 'choicelist-thumbnail.png',
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
      title: 'Simple Choicelist and Choice example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/basic-choiceList.example.tsx',
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

  related: [
    {
      type: 'component',
      name: 'Choice',
      url: '/components/Choice',
    },
  ],
};

export default data;
