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
    image: 'color-field-default.png',
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
            description: 'Standard color input field with hex value.',
            codeblock: {
              title: 'Basic Usage',
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
              'Required color field ensuring essential color values are provided.',
            codeblock: {
              title: 'Required',
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
              'Color field supporting alpha channel for transparency control.',
            codeblock: {
              title: 'With Alpha Transparency',
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
              'Color field with validation error for invalid color format inputs.',
            codeblock: {
              title: 'With Error State',
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
              'Color field with contextual details providing additional guidance.',
            codeblock: {
              title: 'With Help Text',
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
              'Color field demonstrating how to use a placeholder to guide user input for color selection.',
            codeblock: {
              title: 'With Placeholder',
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
              'Color field in a read-only mode, preventing user modifications to the color value.',
            codeblock: {
              title: 'Read Only State',
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
              'A multi-color field form section demonstrating how color field can be used to capture different color settings in a single form.',
            codeblock: {
              title: 'Form Integration',
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
        title: 'Form validation',
        examples: [
          {
            description:
              'Interactive example showing real-time hex color validation with error messages.',
            codeblock: {
              title: 'Color validation',
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
