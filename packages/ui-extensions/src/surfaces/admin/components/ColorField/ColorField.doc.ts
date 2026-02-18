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
    image: 'color-field-default.png',
    description:
      'Let users select colors using a visual picker or text input. This example shows a color field with a placeholder and pre-selected hex value. Click to interact with the preview.',
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
              'Identify the color field\'s purpose clearly. This example shows a labeled color field with a name attribute for form submission. Click to interact with the preview.',
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
              'Ensure users provide a color value before submitting. This example shows a required color field that must have a value. Click to interact with the preview.',
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
              'Allow selection of semi-transparent colors. This example shows a color field with alpha enabled, displaying an RGBA value with 50% opacity. Click to interact with the preview.',
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
              'Communicate color format problems clearly. This example shows an error message when an invalid hex code is entered. Click to interact with the preview.',
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
              'Guide users on how the color will be used. This example shows helper text beneath the field explaining the color\'s purpose. Click to interact with the preview.',
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
              'Show a color value without allowing changes. This example shows a read-only color field displaying a locked value. Click to interact with the preview.',
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
              'Build a complete theme customization interface. This example shows multiple color fields for primary, secondary, and overlay colors with helper text. Click to interact with the preview.',
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
              'Provide immediate feedback on color format validity. This example shows real-time validation that checks hex format as the user types. Click to interact with the preview.',
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
