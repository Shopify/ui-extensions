import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CustomerSegmentTemplate',
  description:
    'The CustomerSegmentTemplate component configures a segment template rendered in the **Customers** section of the Shopify admin. Use CustomerSegmentTemplate to define reusable segment queries that merchants can apply in the customer segment editor.\n\nThis component is required for all customer segmentation template extensions and provides a standardized structure for segment template cards.\n\nLearn how to [build a customer segment template extension](/docs/apps/build/marketing-analytics/customer-segments/build-a-template-extension).',
  requires:
    'the [admin.customers.segmentation-templates.render](/docs/api/admin-extensions/{API_VERSION}/targets/customers#customer-segmentation-templates-) target.',
  isVisualComponent: true,
  thumbnail: 'customersegmenttemplate-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the CustomerSegmentTemplate component.',
      type: 'CustomerSegmentTemplateProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Settings and templates',
  defaultExample: {
    image: 'customersegmenttemplate-default',
    description:
      'Define a reusable customer segment for high-value repeat buyers. This example creates a `CustomerSegmentTemplate` with a `query` that filters by order count and total spend, plus a `title`, `description`, and `createdOn` date.',
    codeblock: {
      title: 'Create a repeat buyer segment template',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/CustomerSegmentTemplate/examples/customersegmenttemplate.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/customersegmenttemplate.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Use `queryToInsert` to provide a different query than what is displayed in the template preview. This example shows a complete query with a US region filter in the template card, but inserts a version with an empty region placeholder so merchants can customize the filter for their market.',
        codeblock: {
          title: 'Customize the inserted query',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/CustomerSegmentTemplate/examples/customersegmenttemplate-queryinsert.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/customersegmenttemplate-queryinsert.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Declare custom metafield dependencies using the `dependencies` prop so the segment editor knows which metafields your query references. This example filters customers by a `loyalty.tier` custom metafield, enabling the editor to validate the query and show relevant autocomplete suggestions.',
        codeblock: {
          title: 'Declare metafield dependencies',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/CustomerSegmentTemplate/examples/customersegmenttemplate-metafields.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/customersegmenttemplate-metafields.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Write clear, localized titles and descriptions:** Titles should briefly name the segment, while descriptions should explain what customers the segment targets. Both should be localized for the merchant's language.
- **Provide a valid segment query:** Test the query in the [segment editor](/docs/apps/build/marketing-analytics/customer-segments/build-a-template-extension) before using it in a template to ensure it works correctly.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- The segment query is displayed with syntax highlighting in the template card, but it isn't validated at render time. Invalid queries will only fail when the merchant tries to apply the template.`,
    },
  ],
  related: [],
};

export default data;
