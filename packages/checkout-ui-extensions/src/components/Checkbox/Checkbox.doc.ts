import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'Use checkboxes to give customers a single binary option, such as signing up for marketing, or agreeing to terms and conditions.',
  thumbnail: 'checkbox-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'CheckboxProps',
      description: '',
      type: 'CheckboxProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'Basic Checkbox',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Checkbox/examples/basic-checkbox.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-checkbox.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'To provide buyers with additional information or references, couple it with link components seamlessly within checkbox components. This can be done by including links as part of the checkbox label in the checkbox. This will provide an easy way to access relevant content that buyers may need.',
        image: 'checkbox-links.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../docs/reference/examples/ui-components/checkbox-links.example.tsx',
              language: 'typescript',
            },
            {
              title: 'JS',
              code: '../../../docs/reference/examples/ui-components/checkbox-links.example.ts',
              language: 'javascript',
            },
          ],
          title: 'Embedding links in checkbox components',
        },
      },
    ],
  },
  related: [],
};

export default data;
