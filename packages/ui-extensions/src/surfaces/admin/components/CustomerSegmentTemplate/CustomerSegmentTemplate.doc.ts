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
    codeblock: {
      title: 'Simple CustomerSegmentTemplate implementation',
      tabs: [
        {
          title: 'React',
          code: './examples/CustomerSegmentTemplate.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/CustomerSegmentTemplate.example.ts',
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
