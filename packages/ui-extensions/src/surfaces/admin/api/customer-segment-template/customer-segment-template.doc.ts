import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer Segment Template Extension API',
  description:
    'The Customer Segment Template Extension API lets you [build a customer segment template extension](/docs/apps/build/marketing-analytics/customer-segments/build-a-template-extension). Merchants can use your templates to quickly set up [customer segments](/docs/apps/build/marketing-analytics/customer-segments) based on custom criteria.',
  isVisualComponent: false,
  type: 'API',
  requires:
    'the [CustomerSegmentTemplate](/docs/api/admin-extensions/{API_VERSION}/ui-components/settings-and-templates/customersegmenttemplate) component.',
  defaultExample: {
    description:
      'Create a segment template targeting customers who spent $500+ across 5+ orders. This example uses `total_spent` and `orders_count` queries to identify high-value customers, and demonstrates `shopify.i18n.translate` for internationalized template titles and descriptions.',
    codeblock: {
      title: 'Target high-value customers',
      tabs: [
        {
          title: 'React',
          code: './examples/high-value-customers.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/high-value-customers.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `CustomerSegmentTemplateApi` object includes tools for creating segment templates and translating content. Access the following properties on the `CustomerSegmentTemplateApi` object in the `admin.customers.segmentation-templates.render` target.',
      type: 'CustomerSegmentTemplateApi',
    },
  ],
  examples: {
    description: 'Pre-built customer segment templates',
    examples: [
      {
        description:
          'Create a segment template targeting customers with birthdays this month. This example requires the `facts.birth_date` metafield to be set up, which enables birthday-based customer targeting for marketing campaigns.',
        codeblock: {
          title: 'Target customers with birthdays this month',
          tabs: [
            {
              title: 'React',
              code: './examples/birthday-this-month.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/birthday-this-month.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Create a segment template targeting customers who abandoned at least one checkout in the last 7 days. This example uses `abandoned_checkouts_count` and `last_abandoned_order_date` queries with dynamic date calculation to identify customers for abandoned cart email outreach.',
        codeblock: {
          title: "Target customers who started checkout but didn't finish",
          tabs: [
            {
              title: 'React',
              code: './examples/abandoned-cart-recovery.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/abandoned-cart-recovery.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Contextual APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Test queries in admin before shipping:** Template queries aren't validated until merchants save them. Test query syntax in the [Shopify admin segment editor](https://help.shopify.com/manual/customers/customer-segmentation/create-customer-segments) before shipping to avoid merchant-facing errors.\n" +
        '- **Declare all metafield dependencies:** Use both `standardMetafields` (for Shopify-defined metafields) and `customMetafields` (for app-defined metafields) in the `dependencies` object. Missing dependencies cause queries to fail when merchants lack required metafields.\n' +
        '- **Use `queryToInsert` for formatted display queries:** If your `query` includes formatting or comments for readability, then provide a clean executable version in `queryToInsert`. If omitting `queryToInsert`, then ensure `query` has no comments that would break execution.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Query validation only occurs when merchants save. Syntax errors in queries aren't caught by the API and only surface in the admin when merchants attempt to save the segment.\n" +
        "- Your extension can't programmatically create segments. Templates only provide the query and metadata. Merchants must manually save templates as segments.\n" +
        "- Dependencies don't auto-create metafields. If required metafields don't exist, then merchants see errors when trying to use the template. The API only declares dependencies, it doesn't create them.\n" +
        "- Dynamic query generation isn't supported. Queries must be static strings. You can't parameterize queries based on merchant input or shop configuration.",
    },
  ],
};

export default data;
