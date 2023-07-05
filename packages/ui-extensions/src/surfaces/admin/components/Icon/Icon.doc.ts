import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description: 'Icon is used to ...',
  requires: '',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'IconProps',
      description: '',
      type: 'IconProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Icon/examples/basic-Icon.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Icon.example.ts',
          language: 'js',
        },
      ],
    },
  },
  
  related: [],
};

export default data;
