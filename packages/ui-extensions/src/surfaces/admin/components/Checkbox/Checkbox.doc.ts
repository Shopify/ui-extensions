import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description: 'Checkbox is used to ...',
  requires: '',
  thumbnail: 'checkbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Checkbox',
      description: '',
      type: 'Checkbox',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-checkbox.example.ts',
          language: 'js',
        },
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Checkbox/examples/basic-checkbox.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },

  related: [],
};

export default data;
