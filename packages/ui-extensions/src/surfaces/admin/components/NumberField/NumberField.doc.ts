import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/NumberField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/numberfield.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `
- **Choose appropriate controls:** Use \`stepper\` for quantities or small adjustments. Use \`none\` for prices or large values where steppers are impractical.
- **Select the right input mode:** Use \`decimal\` for prices and measurements. Use \`numeric\` for quantities and counts.
- **Explain constraints in details:** Use \`details\` to clarify valid ranges or formatting, like "Enter a quantity between 1 and 999."
`,
    },
  ],
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
                  language: 'html',
                },

                {
                  code: './examples/basic-usage.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/with-prefix-and-suffix.jsx',
                  language: 'preview-jsx',
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
                  language: 'html',
                },

                {
                  code: './examples/multiple-examples.jsx',
                  language: 'preview-jsx',
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
