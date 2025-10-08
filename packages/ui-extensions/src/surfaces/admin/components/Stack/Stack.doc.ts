import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Stack';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/stack.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Placing items in rows or columns when sections don't work for your layout.
- Controlling the spacing between elements.`,
    },
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- Stack doesn't add any padding by default. If you want padding around your stacked elements, use \`base\` to apply the default padding.
- When spacing becomes limited, Stack will always wrap children to a new line.`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Use smaller gaps between small elements and larger gaps between big ones.
- Maintain consistent spacing in stacks across all pages of your app.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Stack',
    },
    {
      title: 'Slots',
      description: '',
      type: 'StackSlots',
    },
  ],
  defaultExample: {
    image: 'stack-default.png',
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
              'Default vertical stacking layout with consistent spacing between text elements.',
            codeblock: {
              title: 'Basic block stack (vertical)',
              tabs: [
                {
                  code: './examples/basic-block-stack-vertical.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-block-stack-vertical.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Horizontal layout for arranging badges or similar elements side by side.',
            codeblock: {
              title: 'Inline stack (horizontal)',
              tabs: [
                {
                  code: './examples/inline-stack-horizontal.html',
                  language: 'html',
                },

                {
                  code: './examples/inline-stack-horizontal.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Advanced responsive layout that changes direction and spacing based on container size.',
            codeblock: {
              title: 'Responsive stack with container queries',
              tabs: [
                {
                  code: './examples/responsive-stack-with-container-queries.html',
                  language: 'html',
                  layout: 'fullWidth',
                },

                {
                  code: './examples/responsive-stack-with-container-queries.jsx',
                  language: 'preview-jsx',
                  layout: 'fullWidth',
                },
              ],
            },
          },
          {
            description:
              'Horizontal stack with space-between justification and center alignment for balanced layouts.',
            codeblock: {
              title: 'Custom alignment',
              tabs: [
                {
                  code: './examples/custom-alignment.html',
                  language: 'html',
                  layout: 'fullWidth',
                },

                {
                  code: './examples/custom-alignment.jsx',
                  language: 'preview-jsx',
                  layout: 'fullWidth',
                },
              ],
            },
          },
          {
            description:
              'Stack with custom gap values and separate row/column gap controls for precise spacing.',
            codeblock: {
              title: 'Custom spacing',
              tabs: [
                {
                  code: './examples/custom-spacing.html',
                  language: 'html',
                },

                {
                  code: './examples/custom-spacing.jsx',
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
