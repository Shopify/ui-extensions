import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminBlock',
  description:
    '`s-admin-block` provides a deeper integration with the container your UI is rendered into. This component should only be used in Block Extensions, which render inline on a resource page.',
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminblock.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'AdminBlockProps',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Other',
  subSections: [
    {
      title: 'Considerations',
      type: 'Generic' as const,
      anchorLink: 'considerations',
      sectionContent: `- Initial height is limited to 300px.
- When content exceeds the height limit, a "Show more" button appears.
- In development, the following warning also displays: "Warning! This Block is too tall."
- After expanding to the max height, content that exceeds the limit is cut off, and the merchant must navigate to the extension's app via the provided link.`,
    },
  ],
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminblock-example.png',
    codeblock: {
      title: '',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.tsx',
          language: 'jsx',
        },
      ],
    },
  },
  related: [],
};

export default data;
