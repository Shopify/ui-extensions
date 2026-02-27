import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Stack';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/stack.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Match spacing to content relationships:** Spacing communicates how closely related items are. Tight spacing suggests items belong together, while generous spacing separates distinct groups. Choose spacing that reflects your content hierarchy.
- **Understand wrapping behavior:** Inline stacks wrap automatically when content doesn't fit. This is often desired, but if you need precise control over line breaks or multi-row layouts, consider alternative layout approaches.
- **Use alignment intentionally:** Alignment properties determine how items distribute within the stack. Default alignment works for most cases, but consider alignment when items have different sizes or when you need specific positioning.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The component doesn't support variable spacing between individual items. All items in a stack have uniform gap spacing. If you need different spacing between specific items, you'll need to nest multiple stacks or use a different layout approach.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the stack component.',
      type: 'Stack',
    },
    {
      title: 'Slots',
      description:
        'The stack component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
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
