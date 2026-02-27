import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Divider';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for truly distinct boundaries:** Dividers work best when separating fundamentally different content sections. Overusing dividers creates visual clutter and makes interfaces feel fragmented. Consider whether whitespace alone could achieve the same grouping.
- **Match visual weight to hierarchy:** The divider's prominence should reflect the importance of the separation. Major section breaks can support stronger visual dividers, while minor groupings need subtler separation or just whitespace.
- **Align with layout direction:** The divider's orientation should match your content flow. A horizontal divider between vertically stacked items or a vertical divider between horizontally arranged items creates clear, predictable separation.
- **Prefer whitespace for subtle grouping:** Whitespace often provides cleaner visual grouping than dividers. Before adding a divider, try using spacing properties on your layout components. Dividers should enhance clarity, not replace thoughtful spacing.`,
    },
  ],
  thumbnail: '/assets/templated-apis-screenshots/admin/components/divider.png',
  isVisualComponent: true,
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the divider component.',
      type: 'Divider',
    },
  ],
  defaultExample: {
    image: 'divider-default.png',
    description:
      'Create a horizontal divider to visually separate content sections. This example shows the default divider with base color and inline direction.',
    codeblock: {
      title: 'Add a horizontal divider',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
          layout: 'wrapped',
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
              'Use the `color` property to display a more prominent divider that marks a major section break. This example shows a strong-colored divider for increased visual emphasis.',
            codeblock: {
              title: 'Increase visual emphasis with a strong divider',
              tabs: [
                {
                  code: './examples/custom-color.html',
                  language: 'preview',
                  title: '',
                  layout: 'wrapped',
                },
              ],
            },
          },
          {
            description:
              'Use the `direction` property to create a vertical divider between horizontally arranged items. This example shows a vertical divider separating text items in an inline stack.',
            codeblock: {
              title: 'Create a vertical divider between inline items',
              tabs: [
                {
                  code: './examples/custom-direction.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Place a divider between groups of form fields to visually distinguish related sections. This example shows a divider separating store details from contact information fields.',
            codeblock: {
              title: 'Separate form sections with a divider',
              tabs: [
                {
                  code: './examples/separating-form-sections.html',
                  language: 'preview',
                  title: '',
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
