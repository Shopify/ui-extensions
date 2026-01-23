import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Intents API',
  overviewPreviewDescription:
    'Orchestrate workflows and operations across Shopify resources',
  description: `The Intents API lets you open Shopify's built-in creation and editing workflows for resources like products, collections, and discounts. Use this API to launch admin workflows from your extension without building custom forms or interfaces.`,
  isVisualComponent: true,
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  thumbnail: 'intents.png',
  requires:
    'an Admin UI [block or action](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    image: 'intents.png',
    codeblock: {
      title: 'Creating a collection',
      tabs: [
        {
          code: './examples/create-collection.js',
          language: 'js',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'invoke',
      description: `A function that launches a Shopify admin workflow for creating or editing resources. Returns a Promise that resolves to an activity handle you can await to get the workflow result.

### Intent format

Intents can be invoked using either a string query format or an object format.

**String format:** \`\${action}:\${type},\${value}\`

- \`action\` - The operation: \`create\` or \`edit\`
- \`type\` - The resource type (for example, \`shopify/Product\`)
- \`value\` - The resource ID for edit operations (for example, \`gid://shopify/Product/123\`)

Examples:
- Create: \`'create:shopify/Product'\`
- Edit: \`'edit:shopify/Product,gid://shopify/Product/123'\`

**Object format:**

Use the object format when you need to pass additional data or prefer explicit property names:

\`\`\`javascript
// Create with required data
await intents.invoke({
  action: 'create',
  type: 'shopify/Discount',
  data: { type: 'amount-off-product' }
});

// Edit with resource ID
await intents.invoke({
  action: 'edit',
  type: 'shopify/Product',
  value: 'gid://shopify/Product/123'
});
\`\`\`

### Supported resources

The following resource types can be created or edited using intents. Each resource type has specific requirements for the \`value\` and \`data\` parameters.

#### Article

[Articles](/docs/api/admin-graphql/latest/objects/Article) are blog posts published on the Online Store. Use this to create or edit articles for merchant blogs.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Article\` | — | — |
| \`edit\` | \`shopify/Article\` | \`gid://shopify/Article/{id}\` | — |

#### Catalog

[Catalogs](/docs/api/admin-graphql/latest/interfaces/Catalog) are product groupings that organize products for different markets or channels. Use this to create or edit catalogs for B2B or multi-market selling.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Catalog\` | — | — |
| \`edit\` | \`shopify/Catalog\` | \`gid://shopify/Catalog/{id}\` | — |

#### Collection

[Collections](/docs/api/admin-graphql/latest/objects/Collection) are groups of products organized manually or by automated rules. Use this to create or edit product collections.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Collection\` | — | — |
| \`edit\` | \`shopify/Collection\` | \`gid://shopify/Collection/{id}\` | — |

#### Customer

[Customers](/docs/api/admin-graphql/latest/objects/Customer) are profiles with contact information, order history, and metadata. Use this to create or edit customer accounts.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Customer\` | — | — |
| \`edit\` | \`shopify/Customer\` | \`gid://shopify/Customer/{id}\` | — |

#### Discount

[Discounts](/docs/api/admin-graphql/latest/objects/DiscountNode) are price reductions applied to products, orders, or shipping. Use this to create or edit discount codes and automatic discounts. Creating discounts requires specifying a discount type.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Discount\` | — | \`{ type: 'amount-off-product' \\| 'amount-off-order' \\| 'buy-x-get-y' \\| 'free-shipping' }\` |
| \`edit\` | \`shopify/Discount\` | \`gid://shopify/Discount/{id}\` | — |

#### Market

[Markets](/docs/api/admin-graphql/latest/objects/Market) are geographic regions with customized pricing, languages, and domains. Use this to create or edit markets for international selling.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Market\` | — | — |
| \`edit\` | \`shopify/Market\` | \`gid://shopify/Market/{id}\` | — |

#### Menu

[Menus](/docs/api/admin-graphql/latest/objects/Menu) are navigation structures for the Online Store. Use this to create or edit menu structures and links.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Menu\` | — | — |
| \`edit\` | \`shopify/Menu\` | \`gid://shopify/Menu/{id}\` | — |

#### Metafield definition

[Metafield definitions](/docs/api/admin-graphql/latest/objects/MetafieldDefinition) are schemas that define custom data fields for resources. Use this to create or edit metafield definitions that merchants can use to add structured data to products, customers, and other resources.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/MetafieldDefinition\` | — | \`{ ownerType: 'Product' }\` |
| \`edit\` | \`shopify/MetafieldDefinition\` | \`gid://shopify/MetafieldDefinition/{id}\` | \`{ ownerType: 'Product' }\` |

#### Metaobject

[Metaobjects](/docs/api/admin-graphql/latest/objects/Metaobject) are custom structured data entries based on metaobject definitions. Use this to create or edit metaobject instances that store complex custom data. Requires a definition type.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Metaobject\` | — | \`{ type: 'shopify--color-pattern' }\` |
| \`edit\` | \`shopify/Metaobject\` | \`gid://shopify/Metaobject/{id}\` | \`{ type: 'shopify--color-pattern' }\` |

#### Metaobject definition

[Metaobject definitions](/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) are schemas that define the structure for metaobjects. Use this to create or edit metaobject definitions that determine the fields and data types for custom structured data.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/MetaobjectDefinition\` | — | — |
| \`edit\` | \`shopify/MetaobjectDefinition\` | — | \`{ type: 'my_metaobject_definition_type' }\` |

#### Page

[Pages](/docs/api/admin-graphql/latest/objects/Page) are static content pages for the Online Store. Use this to create or edit pages like About Us, Contact, or custom informational pages.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Page\` | — | — |
| \`edit\` | \`shopify/Page\` | \`gid://shopify/Page/{id}\` | — |

#### Product

[Products](/docs/api/admin-graphql/latest/objects/Product) are items sold in the store with pricing, inventory, and variants. Use this to create or edit products.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Product\` | — | — |
| \`edit\` | \`shopify/Product\` | \`gid://shopify/Product/{id}\` | — |

#### Product variant

[Product variants](/docs/api/admin-graphql/latest/objects/ProductVariant) are specific combinations of product options like size and color. Use this to create or edit product variants. Creating variants requires a parent product ID.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/ProductVariant\` | — | \`{ productId: 'gid://shopify/Product/{id}' }\` |
| \`edit\` | \`shopify/ProductVariant\` | \`gid://shopify/ProductVariant/{id}\` | \`{ productId: 'gid://shopify/Product/{id}' }\` |

> Note:
> When editing products with variants, query the [\`product.hasOnlyDefaultVariant\`](/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.hasOnlyDefaultVariant) field first. If \`true\`, use the \`shopify/Product\` edit intent. If \`false\`, use the \`shopify/ProductVariant\` edit intent for specific variants.`,
      type: 'IntentInvokeApi',
    },
    {
      title: 'IntentQueryOptions',
      description: `Optional parameters when using the string query format. Pass \`value\` for resource IDs when editing, or \`data\` for resource-specific requirements (for example, discount type for discounts, product ID for variants).`,
      type: 'IntentQueryOptions',
    },
    {
      title: 'IntentResponse',
      description: `The result returned when an intent workflow completes. Check the \`code\` property to determine the outcome:
- \`'ok'\` - The merchant completed the workflow successfully
- \`'error'\` - The workflow failed due to validation or other errors
- \`'closed'\` - The merchant cancelled without completing`,
      type: 'IntentResponse',
    },
  ],
  examples: {
    description: 'Intents for each Shopify resource type',
    exampleGroups: [
      {
        title: 'Article',
        examples: [
          {
            description:
              'Create a new article. Opens the article creation workflow.',
            codeblock: {
              title: 'Create article',
              tabs: [
                {
                  code: './examples/create-article.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing article. Requires an article GID.',
            codeblock: {
              title: 'Edit article',
              tabs: [
                {
                  code: './examples/edit-article.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Catalog',
        examples: [
          {
            description:
              'Create a new catalog. Opens the catalog creation workflow.',
            codeblock: {
              title: 'Create catalog',
              tabs: [
                {
                  code: './examples/create-catalog.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing catalog. Requires a catalog GID.',
            codeblock: {
              title: 'Edit catalog',
              tabs: [
                {
                  code: './examples/edit-catalog.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Collection',
        examples: [
          {
            description:
              'Create a new collection. Opens the collection creation workflow.',
            codeblock: {
              title: 'Create collection',
              tabs: [
                {
                  code: './examples/create-collection.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Edit an existing collection. Requires a collection GID.',
            codeblock: {
              title: 'Edit collection',
              tabs: [
                {
                  code: './examples/edit-collection.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Customer',
        examples: [
          {
            description:
              'Create a new customer. Opens the customer creation workflow.',
            codeblock: {
              title: 'Create customer',
              tabs: [
                {
                  code: './examples/create-customer.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing customer. Requires a customer GID.',
            codeblock: {
              title: 'Edit customer',
              tabs: [
                {
                  code: './examples/edit-customer.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Discount',
        examples: [
          {
            description:
              'Create a new discount. Opens the discount creation workflow. Requires a discount type.',
            codeblock: {
              title: 'Create discount',
              tabs: [
                {
                  code: './examples/create-discount.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing discount. Requires a discount GID.',
            codeblock: {
              title: 'Edit discount',
              tabs: [
                {
                  code: './examples/edit-discount.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Market',
        examples: [
          {
            description:
              'Create a new market. Opens the market creation workflow.',
            codeblock: {
              title: 'Create market',
              tabs: [
                {
                  code: './examples/create-market.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing market. Requires a market GID.',
            codeblock: {
              title: 'Edit market',
              tabs: [
                {
                  code: './examples/edit-market.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Menu',
        examples: [
          {
            description: 'Create a new menu. Opens the menu creation workflow.',
            codeblock: {
              title: 'Create menu',
              tabs: [
                {
                  code: './examples/create-menu.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing menu. Requires a menu GID.',
            codeblock: {
              title: 'Edit menu',
              tabs: [
                {
                  code: './examples/edit-menu.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: '[Metafield](/docs/apps/build/metafields) Definition',
        examples: [
          {
            description:
              'Create a new [metafield](/docs/apps/build/metafields) definition. Opens the metafield definition creation workflow.',
            codeblock: {
              title: 'Create metafield definition',
              tabs: [
                {
                  code: './examples/create-metafield-definition.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Edit an existing [metafield](/docs/apps/build/metafields) definition. Requires a metafield definition GID.',
            codeblock: {
              title: 'Edit metafield definition',
              tabs: [
                {
                  code: './examples/edit-metafield-definition.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Metaobject',
        examples: [
          {
            description:
              'Create a new metaobject. Opens the metaobject creation workflow. Requires a type.',
            codeblock: {
              title: 'Create metaobject',
              tabs: [
                {
                  code: './examples/create-metaobject.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Edit an existing metaobject. Requires a metaobject GID.',
            codeblock: {
              title: 'Edit metaobject',
              tabs: [
                {
                  code: './examples/edit-metaobject.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Metaobject Definition',
        examples: [
          {
            description:
              'Create a new metaobject definition. Opens the metaobject definition creation workflow.',
            codeblock: {
              title: 'Create metaobject definition',
              tabs: [
                {
                  code: './examples/create-metaobject-definition.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Edit an existing metaobject definition. Requires a metaobject definition GID.',
            codeblock: {
              title: 'Edit metaobject definition',
              tabs: [
                {
                  code: './examples/edit-metaobject-definition.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Page',
        examples: [
          {
            description: 'Create a new page. Opens the page creation workflow.',
            codeblock: {
              title: 'Create page',
              tabs: [
                {
                  code: './examples/create-page.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing page. Requires a page GID.',
            codeblock: {
              title: 'Edit page',
              tabs: [
                {
                  code: './examples/edit-page.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Product',
        examples: [
          {
            description:
              'Create a new product. Opens the product creation workflow.',
            codeblock: {
              title: 'Create product',
              tabs: [
                {
                  code: './examples/create-product.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Edit an existing product. Requires a product GID.',
            codeblock: {
              title: 'Edit product',
              tabs: [
                {
                  code: './examples/edit-product.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
      {
        title: 'Product Variant',
        examples: [
          {
            description:
              'Create a new product variant. Opens the variant creation workflow. Requires a product ID.',
            codeblock: {
              title: 'Create variant',
              tabs: [
                {
                  code: './examples/create-variant.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Edit an existing product variant. Requires a variant GID.',
            codeblock: {
              title: 'Edit variant',
              tabs: [
                {
                  code: './examples/edit-variant.js',
                  language: 'js',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Await workflow completion:** Always await `activity.complete` to handle the workflow result and determine if the merchant completed, cancelled, or encountered an error.\n' +
        '- **Provide required data:** Include necessary context data for resource types that require it (for example, discount type for discounts, product ID for variants).\n' +
        '- **Handle all response codes:** Check the response `code` property and handle `ok` (success), `error` (failure), and `closed` (cancellation) appropriately.\n' +
        '- **Use structured queries for complex operations:** When passing multiple parameters, use the object format with the `data` property rather than string concatenation.\n' +
        '- **Display meaningful feedback:** Show appropriate success messages, error details, or cancellation confirmations based on the workflow outcome.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Intents launch native Shopify admin workflows that can't be customized.\n" +
        "- Workflow UI appearance and behavior aren't configurable. Extensions only receive the result when the workflow completes.",
    },
  ],
};

export default data;
