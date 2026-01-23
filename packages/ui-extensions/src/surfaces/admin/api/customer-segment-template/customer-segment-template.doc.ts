import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Segment Template Extension API',
  description:
    'The Customer Segment Template Extension API lets you [build a customer segment template extension](/docs/apps/build/marketing-analytics/customer-segments/build-a-template-extension) that provides pre-built [customer segments](/docs/apps/build/marketing-analytics/customer-segments). Merchants can use your templates to quickly set up customer segments based on custom criteria.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'CustomerSegmentTemplateApi',
      description:
        'The `CustomerSegmentTemplateApi` object includes tools for creating segment templates and translating content. Access these properties through the API in the `admin.customers.segmentation-templates.data` target.',
      type: 'CustomerSegmentTemplateApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Write clear, tested queries:** Validate your segment queries work correctly before including them in templates.\n' +
        '- **Declare all dependencies:** List all required metafields in the `dependencies` property so merchants are guided to set them up.\n' +
        "- **Provide descriptive titles and descriptions:** Use clear, concise text that explains what customer group the template targets and why it's useful.\n" +
        '- **Use `queryToInsert` for complex queries:** Provide a simplified or commented version in `queryToInsert` when the display query includes formatting or comments.\n' +
        '- **Translate template content:** Use `api.i18n` methods to translate template titles and descriptions for international merchants.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "Segment query code isn't validated by the Customer Segment Template Extension API. Invalid queries are only caught when merchants attempt to save the segment in the Shopify admin.",
    },
  ],
};

export default data;
