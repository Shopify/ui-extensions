import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'This component renders an icon from a predefined list. Choose the one that suits your needs.',
  requires: '',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Icon',
      description: '',
      type: 'Icon',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Simple Icon example',
      tabs: [
        {
          title: 'JS',
          code: './examples/basic-icon.example.ts',
          language: 'js',
        },
        // {
        //   title: 'React',
        //   code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Icon/examples/basic-icon.example.tsx',
        //   language: 'tsx',
        // },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'Image',
      url: '/docs/api/admin-extensions/components/media/image',
    },
  ],
};

export default data;
