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
        'The color field component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/app-ui/using-polaris-web-components#handling-events).',
      type: 'ColorFieldEvents',
    },
  ],
  defaultExample: {
    image: 'color-field-default.png',
    description: 'Display a labeled color field with a pre-selected hex value.',
    codeblock: {
      title: 'Pick a color',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
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
              "Identify the color field's purpose clearly. This example displays a labeled color field with a name attribute for form submission.",
            codeblock: {
              title: 'Add a label',
              tabs: [
                {
                  code: './examples/basic-usage-web-component.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Ensure users provide a color value before submitting. This example presents a required color field that must have a value.',
            codeblock: {
              title: 'Mark as required',
              tabs: [
                {
                  code: './examples/basic-usage-required.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Allow selection of semi-transparent colors. This example displays a color field with alpha enabled, presenting an RGBA value with 50% opacity.',
            codeblock: {
              title: 'Enable alpha transparency',
              tabs: [
                {
                  code: './examples/with-alpha-transparency.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Communicate color format problems clearly. This example demonstrates an error message when an invalid hex code is entered.',
            codeblock: {
              title: 'Show a validation error',
              tabs: [
                {
                  code: './examples/with-error-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              "Guide users on how the color will be used. This example adds helper text beneath the field explaining the color's purpose.",
            codeblock: {
              title: 'Add helper text',
              tabs: [
                {
                  code: './examples/with-help-text.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Show a color value without allowing changes. This example presents a read-only color field displaying a locked value.',
            codeblock: {
              title: 'Show a read-only field',
              tabs: [
                {
                  code: './examples/read-only-state.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Build a complete theme customization interface. This example combines multiple color fields for primary, secondary, and overlay colors with helper text.',
            codeblock: {
              title: 'Combine multiple fields in a form',
              tabs: [
                {
                  code: './examples/form-integration.html',
                  language: 'preview',
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
              'Provide immediate feedback on color format validity. This example demonstrates real-time validation that checks hex format as the user types.',
            codeblock: {
              title: 'Validate in real time',
              tabs: [
                {
                  code: './examples/validation-example.html',
                  language: 'preview',
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
