import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PasswordField',
  description:
    'This component is for secure input, it obfuscates any text that users enter.',
  requires: '',
  thumbnail: 'passwordfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'PasswordFieldProps',
      description: '',
      type: 'PasswordFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'passwordfield-default.png',
    codeblock: {
      title: 'TODO: add example title',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/PasswordField/examples/basic-PasswordField.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-PasswordField.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
