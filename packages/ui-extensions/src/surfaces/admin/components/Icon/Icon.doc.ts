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
      sectionContent: `- **Use icons to support actions and status, not decorate**: Icons should clarify what an action does or indicate state. Use the trash icon for delete actions, a checkmark for completed status, or a warning icon for errors. Avoid adding icons purely for visual interest.
- **Maintain consistency across your interface**: Always use the same icon for the same action or concept throughout your extension. If you use a pencil for edit in one place, use it everywhere. Inconsistent icon usage confuses merchants.
- **Pair icons with text labels whenever possible**: Icons work best as visual reinforcement alongside text. Without text, even common icons can be ambiguous—a gear might mean settings, preferences, or configuration. Only use icons alone in space-constrained contexts like icon-only buttons with proper accessibility labels.
- **Choose icons that are universally recognizable**: Stick to icons with established meanings like magnifying glass (search), trash (delete), and plus (add). Test any icon you're unsure about—if it needs explanation, it's not the right choice.
- **Use semantic tones to communicate meaning**: Apply tones like \`critical\` for destructive actions, \`success\` for positive states, and \`warning\` for caution. Tones should convey information, not serve as decoration.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- Icons are limited to the predefined set provided by the component. Custom SVG icons, icon fonts, or external icon libraries aren't supported.
- Icons can't be animated or include interactive states beyond color changes. For complex graphics or illustrations, use the [image](/docs/api/{API_NAME}/{API_VERSION}/web-components/media-and-visuals/image) component instead.
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
    description:
      'Add visual cues to help users understand available actions. This example displays common icons for home, orders, products, and settings.',
    codeblock: {
      title: 'Display icons',
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
              'Communicate status through color-coded icons. This example displays icons with warning, success, info, and caution tones.',
            codeblock: {
              title: 'Apply semantic tones',
              tabs: [
                {
                  code: './examples/with-semantic-tone.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Fit icons into tight layouts without losing clarity. This example uses a small-sized icon that takes up minimal space.',
            codeblock: {
              title: 'Reduce the size',
              tabs: [
                {
                  code: './examples/small-size.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'De-emphasize icons for secondary content. This example displays a subdued icon with lower contrast for supporting information.',
            codeblock: {
              title: 'Apply subdued color',
              tabs: [
                {
                  code: './examples/subdued-color.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Target icons in scripts or stylesheets. This example adds an ID attribute for JavaScript event handling or custom CSS styling.',
            codeblock: {
              title: 'Add an ID',
              tabs: [
                {
                  code: './examples/with-id-property.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Improve accessibility for screen reader users. This example connects an icon to related interactive content using the `interest` attribute.',
            codeblock: {
              title: 'Connect to related content',
              tabs: [
                {
                  code: './examples/with-interest-relationship.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Reinforce button actions with visual cues. This example places icons in buttons for add and delete actions with appropriate tones.',
            codeblock: {
              title: 'Use in buttons',
              tabs: [
                {
                  code: './examples/in-button-components.html',
                  language: 'preview',
                },
              ],
            },
          },
          {
            description:
              'Enhance status badges with visual indicators. This example pairs badges with icons for active and pending states.',
            codeblock: {
              title: 'Use in badges',
              tabs: [
                {
                  code: './examples/in-badge-components.html',
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
