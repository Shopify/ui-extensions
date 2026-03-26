import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Stack';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'stack-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'StackProps',
    },
  ],
  defaultExample: {
    image: 'stack-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-stack.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Use `justifyContent="space-between"` with `direction="block"` to push the first and last items to opposite ends of the stack. This pattern is common in checkout summary rows.',
        codeblock: {
          title: 'Space items apart with block direction',
          tabs: [
            {
              code: './examples/stack-space-between.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic',
      anchorLink: 'useful-for',
      sectionContent: `
- Placing items in rows or columns when sections don't work for your layout.
- Controlling the spacing between elements.`,
    },
    {
      title: 'Considerations',
      type: 'Generic',
      anchorLink: 'considerations',
      sectionContent: `
- Stack doesn't add any padding by default. If you want padding around your stacked elements, use \`base\` to apply the default padding.
- When spacing becomes limited, Stack will always wrap children to a new line.`,
    },
    {
      title: 'Best practices',
      type: 'Generic',
      anchorLink: 'best-practices',
      sectionContent: `
- Use smaller gaps between small elements and larger gaps between big ones.
- Maintain consistent spacing in stacks across all pages of your app.`,
    },
  ],
};

export default data;
