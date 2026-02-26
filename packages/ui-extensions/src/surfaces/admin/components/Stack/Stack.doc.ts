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
    description:
      'Create a vertical stack to arrange items with consistent spacing. This example shows badges stacked vertically with base gap spacing.',
    codeblock: {
      title: 'Add a vertical stack',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
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
              'Use the `direction` property to arrange items horizontally. This example shows badges laid out side by side with spacing between them.',
            codeblock: {
              title: 'Arrange items horizontally with an inline stack',
              tabs: [
                {
                  code: './examples/inline-stack-horizontal.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use the `justifyContent` and `alignItems` properties to control how items are positioned within the stack. This example shows items vertically centered and aligned at the right, center, and left positions in the stack.',
            codeblock: {
              title: 'Control item alignment and distribution',
              tabs: [
                {
                  code: './examples/custom-alignment.html',
                  language: 'preview',
                  title: '',
                  layout: 'fullWidth',
                },
              ],
            },
          },
          {
            description:
              'Use the ``gap`, `rowGap`, and `columnGap properties` to fine-tune spacing between items in different directions. This example shows a stack with separate row and column gap values.',
            codeblock: {
              title: 'Fine-tune spacing with row and column gaps',
              tabs: [
                {
                  code: './examples/custom-spacing.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use container queries to change the stack direction and gap based on available width. This example shows a stack that switches from vertical to horizontal when the container exceeds 500px.',
            codeblock: {
              title: 'Create a responsive stack with container queries',
              tabs: [
                {
                  code: './examples/responsive-stack-with-container-queries.html',
                  language: 'preview',
                  title: '',
                  layout: 'fullWidth',
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
