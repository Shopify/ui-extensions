import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Icon';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/icon.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Available icons',
      type: 'Generic' as const,
      anchorLink: 'available-icons',
      sectionContent:
        'Search and filter across all the available icons: {{ICON_PREVIEW_IFRAME}}',
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use icons to support actions and status, not decorate:** Icons should clarify what an action does or indicate state. Use the trash icon for delete actions, a checkmark for completed status, or a warning icon for errors. Avoid adding icons purely for visual interest.
- **Maintain consistency across your interface:** Always use the same icon for the same action or concept throughout your extension. If you use a pencil for edit in one place, use it everywhere. Inconsistent icon usage confuses merchants.
- **Pair icons with text labels whenever possible:** Icons work best as visual reinforcement alongside text. Without text, even common icons can be ambiguous—a gear might mean settings, preferences, or configuration. Only use icons alone in space-constrained contexts like icon-only buttons with proper accessibility labels.
- **Choose icons that are universally recognizable:** Stick to icons with established meanings like magnifying glass (search), trash (delete), and plus (add). Test any icon you're unsure about—if it needs explanation, it's not the right choice.
- **Use semantic tones to communicate meaning:** Apply tones like \`critical\` for destructive actions, \`success\` for positive states, and \`warning\` for caution. Tones should convey information, not serve as decoration.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Icons are limited to the predefined set provided by the component. Custom SVG icons, icon fonts, or external icon libraries aren't supported.
- Icons can't be animated or include interactive states beyond color changes. For complex graphics or illustrations, use the [image](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/media-and-visuals/image) component instead.
- Icon color is determined by the \`tone\` and \`color\` properties. Custom colors or gradients aren't available.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the icon component.',
      type: 'Icon',
    },
  ],
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
          layout: 'inline',
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
              'Standard icons for common merchant interface actions and navigation. Demonstrates rendering multiple icons in an inline stack, showing different types of icons used for navigation and actions.',
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
              'Icons with color-coded tones to convey status and semantic meaning.',
            codeblock: {
              title: 'With semantic tone',
              tabs: [
                {
                  code: './examples/with-semantic-tone.html',
                  language: 'html',
                },

                {
                  code: './examples/with-semantic-tone.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Compact icon sizing for space-constrained interfaces and inline usage. Shows how to render a small-sized icon that takes up minimal space while maintaining clarity.',
            codeblock: {
              title: 'Small size',
              tabs: [
                {
                  code: './examples/small-size.html',
                  language: 'html',
                },

                {
                  code: './examples/small-size.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Lower contrast icon for secondary actions and supporting information.',
            codeblock: {
              title: 'Subdued color',
              tabs: [
                {
                  code: './examples/subdued-color.html',
                  language: 'html',
                },

                {
                  code: './examples/subdued-color.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Icon with unique identifier for JavaScript targeting and styling. Demonstrates adding a specific ID to an icon, which can be used for JavaScript interactions, CSS styling, or accessibility purposes.',
            codeblock: {
              title: 'With id property',
              tabs: [
                {
                  code: './examples/with-id-property.html',
                  language: 'html',
                },

                {
                  code: './examples/with-id-property.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Icon associated with interactive elements for enhanced accessibility context.',
            codeblock: {
              title: 'With interest relationship',
              tabs: [
                {
                  code: './examples/with-interest-relationship.html',
                  language: 'html',
                },

                {
                  code: './examples/with-interest-relationship.jsx',
                  language: 'preview-jsx',
                  customStyles: {
                    minHeight: '200px',
                  },
                },
              ],
            },
          },
          {
            description:
              "Icons integrated within button components for clear action identification. Shows how icons can be added to buttons to visually reinforce the button's action, using both positive (add) and negative (delete) tones.",
            codeblock: {
              title: 'In button components',
              tabs: [
                {
                  code: './examples/in-button-components.html',
                  language: 'html',
                },

                {
                  code: './examples/in-button-components.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Icons combined with badges to enhance status communication and visual hierarchy. Demonstrates using icons with badges to provide visual status indicators, using success and warning tones to convey different states.',
            codeblock: {
              title: 'In badge components',
              tabs: [
                {
                  code: './examples/in-badge-components.html',
                  language: 'html',
                },

                {
                  code: './examples/in-badge-components.jsx',
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
