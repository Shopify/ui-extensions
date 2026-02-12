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
      sectionContent: `- Use the alpha property to allow merchants to select transparent colors
- Provide clear labels that indicate what the color will be used for
- Use details text to provide context about the color's purpose
- Validate color format inputs and provide clear error messages`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ColorField',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
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
              'Combine multiple color fields in a form for theme customization. Click to interact with the preview.',
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
