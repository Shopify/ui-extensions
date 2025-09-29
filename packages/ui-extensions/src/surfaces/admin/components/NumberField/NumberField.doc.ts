import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/NumberField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/numberfield.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'NumberField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'NumberFieldEvents',
    },
  ],
  defaultExample: {
    image: 'numberfield-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple number field for entering order quantity with a predefined range and step value.',
            codeblock: {
              title: 'Basic usage',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a number field for entering product prices with currency prefix and suffix, using decimal input mode.',
            codeblock: {
              title: 'With prefix and suffix',
              tabs: [
                {
                  code: './examples/with-prefix-and-suffix.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Showcases multiple number fields for different use cases: inventory tracking, percentage discount, and shipping weight, demonstrating various input modes and configurations.',
            codeblock: {
              title: 'Multiple examples',
              tabs: [
                {
                  code: './examples/multiple-examples.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates a number field with strict validation constraints for storage temperature, showing how to set minimum, maximum, and step values with a descriptive details text.',
            codeblock: {
              title: 'With validation constraints',
              tabs: [
                {
                  code: './examples/with-validation-constraints.html',
                  language: 'preview',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
