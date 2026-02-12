import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/ColorField';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/color-field.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Label by specific purpose:** Use labels that describe exactly what the color affects (**Button background color**, **Heading text color**, or **Border accent color** rather than generic **Color**).
- **Pre-populate when editing:** Always show the current color value when editing existing settings so merchants understand what they're changing from.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component always outputs values in hex format. While it accepts multiple input formats (hex, RGB, HSL), the \`change\` event emits values in hex: 6-digit (\`#RRGGBB\`) or 8-digit with alpha (\`#RRGGBBAA\`).`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the color field component.',
      type: 'ColorField',
    },
    {
      title: 'Events',
      description:
        'The color field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'ColorFieldEvents',
    },
  ],
  defaultExample: {
    description:
      'Create a color input field with a placeholder and hex value. Click to interact with the preview.',
    codeblock: {
      title: 'Pick a color',
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
        title: '',
        examples: [
          {
            description:
              'Add a label and name for form submission. Click to interact with the preview.',
            codeblock: {
              title: 'Add a label',
              tabs: [
                {
                  code: './examples/basic-usage-web-component.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage-web-component.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Mark a color field as required to ensure a value is provided. Click to interact with the preview.',
            codeblock: {
              title: 'Mark as required',
              tabs: [
                {
                  code: './examples/basic-usage-required.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-usage-required.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Enable the alpha channel to allow transparent color selection. Click to interact with the preview.',
            codeblock: {
              title: 'Enable alpha transparency',
              tabs: [
                {
                  code: './examples/with-alpha-transparency.html',
                  language: 'html',
                },

                {
                  code: './examples/with-alpha-transparency.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display a validation error for invalid color format inputs. Click to interact with the preview.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'html',
                },

                {
                  code: './examples/with-error-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Add helper text to provide guidance about color selection. Click to interact with the preview.',
            codeblock: {
              title: 'Add helper text',
              tabs: [
                {
                  code: './examples/with-help-text.html',
                  language: 'html',
                },

                {
                  code: './examples/with-help-text.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Add placeholder text to hint at expected input format. Click to interact with the preview.',
            codeblock: {
              title: 'Add placeholder text',
              tabs: [
                {
                  code: './examples/with-placeholder.html',
                  language: 'html',
                },

                {
                  code: './examples/with-placeholder.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Display a color value that can\'t be edited. Click to interact with the preview.',
            codeblock: {
              title: 'Show a read-only field',
              tabs: [
                {
                  code: './examples/read-only-state.html',
                  language: 'html',
                },

                {
                  code: './examples/read-only-state.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Combine multiple color fields in a form for theme customization.',
            codeblock: {
              title: 'Combine multiple fields in a form',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'html',
                },

                {
                  code: './examples/form-integration.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Validate hex color format in real time as the user types. Click to interact with the preview.',
            codeblock: {
              title: 'Validate in real time',
              tabs: [
                {
                  code: './examples/validation-example.jsx',
                  language: 'preview-jsx',
                  layout: 'formWrapper',
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
