import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminBlock',
  description:
    'The AdminBlock component enables admin block extensions to appear inline on resource pages. Use AdminBlock to create embedded extension experiences that feel native to the Shopify admin interface.\n\nThis component is required for all admin block extensions and handles automatic height management, expansion controls, and content overflow for inline rendering contexts.\n\nLearn how to [build an admin block extension](/docs/apps/build/admin/actions-blocks/build-admin-block).',
  requires: '',
  thumbnail: 'adminblock-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the AdminBlock component.',
      type: 'AdminBlockProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Settings and templates',
  defaultExample: {
    image: 'adminblock-default.png',
    codeblock: {
      title: 'Simple AdminBlock implementation',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminBlock/examples/basic-adminblock.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-adminblock.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Keep content concise:** Blocks share space with other admin UI on resource pages. Focus on the most relevant information and avoid overwhelming the page.
- **Design for both expanded and collapsed states:** Merchants may interact with the block in either state. Provide meaningful content in the collapsed summary so they can quickly scan the information.
- **Provide meaningful collapsed state content:** Show the most important piece of information (like a status or key value) in the collapsed summary so merchants can decide whether to expand the block.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- This component can only be used in admin block extension targets. It doesn't work in action extensions or other extension types.
- The block's visual style and position on the resource page are determined by the merchant's configuration and can't be controlled programmatically.
- This component doesn't control whether the block starts expanded or collapsed. The initial state is managed by the Shopify admin and may vary by context.`,
    },
  ],
  related: [],
};

export default data;
