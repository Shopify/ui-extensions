import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import sharedContent from '../../../../docs/shared/components/Box';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'box-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'BoxProps',
    },
  ],
  defaultExample: {
    image: 'box-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-box.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
        - Use \`s-box\` when you need a container that preserves the natural size of its contents.
        - \`s-box\` is particularly useful in layout components like \`s-stack\` where you want to prevent children from stretching to fit.
        - \`s-box\` has a \`display: block\` layout by default.
        - Use \`s-box\` for simple container needs where you don't need the additional features of more specialized components like \`s-stack\`.
        - Consider using \`s-box\` when you need to apply specific styling or layout properties to a group of elements without affecting their natural dimensions.
      `,
    },
  ],
};

export default data;
