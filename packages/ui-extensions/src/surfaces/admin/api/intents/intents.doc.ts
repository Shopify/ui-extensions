import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Intents API',
  overviewPreviewDescription:
    'Orchestrate workflows and operations across Shopify resources',
  description: `The Intents API launches Shopify's native admin interfaces for creating and editing resources. When your extension calls an intent, merchants complete their changes using the standard admin UI, and your extension receives the result. This means you don't need to build custom forms.

Use this API to build workflows like adding products to collections from bulk actions, creating multiple related resources in sequence (like a product, collection, and discount for a promotion), opening specific resources for editing from custom buttons, or launching discount creation with pre-selected types.`,
  isVisualComponent: true,
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  thumbnail: 'intents.png',
  requires:
    'an Admin UI [block or action](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    description:
      'Invoke the article creation workflow from a button click. This example demonstrates using `shopify.intents.invoke()` to launch the article editor, await the workflow completion, and display success or cancellation feedback based on the response code. This pattern lets you integrate blog content creation directly into your extension workflows.',
    image: 'intents.png',
    codeblock: {
      title: 'Create a new article',
      tabs: [
        {
          title: 'jsx',
          code: './examples/create-article.jsx',
          language: 'jsx',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'invoke method',
      description: `The \`invoke\` method launches a Shopify admin workflow for creating or editing resources. The method returns a promise that resolves to an activity handle you can await to get the workflow result.

The method accepts either:
- **String query:** \`\${action}:\${type},\${value}\` with optional second parameter (\`IntentQueryOptions\`)
- **Object:** Properties for \`action\`, \`type\`, \`value\`, and \`data\`

### IntentQueryOptions parameters

Optional parameters for the \`invoke\` method when using the string query format:

- **\`value\`** (\`string\`): The resource identifier for edit operations (for example, \`'gid://shopify/Product/123'\`). Required when editing existing resources. Omit for create operations.
- **\`data\`** (\`{ [key: string]: unknown }\`): Additional context required by specific resource types. For example, discounts require a type, variants require a product ID, and metaobjects require a definition type.

### Supported resources

The following tables show which resource types you can create or edit, and what values you need to pass for \`value\` and \`data\` for each operation.

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
> When editing products with variants, query the [\`product.hasOnlyDefaultVariant\`](/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.hasOnlyDefaultVariant) field first. If \`true\`, then use the \`shopify/Product\` edit intent. If \`false\`, then use the \`shopify/ProductVariant\` edit intent for specific variants.`,
      type: 'IntentInvokeApi',
    },
    {
      title: 'IntentResponse',
      description: `The result returned when an intent workflow completes. Check the \`code\` property to determine the outcome:
- \`'ok'\` - The merchant completed the workflow successfully.
- \`'error'\` - The workflow failed due to validation or other errors.
- \`'closed'\` - The merchant cancelled without completing.`,
      type: 'IntentResponse',
    },
  ],
  examples: {
    description: 'Intents for each Shopify resource type',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Open the article editor for a selected blog post. This example demonstrates retrieving an article GID from the extension context, passing it to the edit intent with `shopify.intents.invoke()`, and handling both successful updates and cancellations. This enables merchants to edit blog content from your extension.',
            codeblock: {
              title: 'Edit an existing article',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-article.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Launch the catalog creation workflow to set up new B2B customer groups or market-specific product collections. This example demonstrates invoking the create intent, managing loading state during the workflow, and displaying success or cancellation feedback. This enables merchants to organize products for specific audiences directly from your extension.',
            codeblock: {
              title: 'Create a new catalog',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-catalog.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Modify an existing catalog to adjust product assignments or market settings. This example demonstrates retrieving the catalog GID from extension context, opening the editor with the edit intent, and handling completion responses. This allows merchants to update B2B product visibility and market configurations from your extension.',
            codeblock: {
              title: 'Edit an existing catalog',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-catalog.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Build a new product collection for organizing storefront navigation. This example demonstrates launching the collection creator, tracking loading state while merchants configure products and rules, and providing feedback when complete. This enables merchants to create themed landing pages or category browsing directly from your extension.',
            codeblock: {
              title: 'Create a new collection',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-collection.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update an existing collection to modify products or automation rules. This example demonstrates accessing the selected collection GID, opening the editor, and handling workflow completion. This allows merchants to maintain seasonal collections or reorganize product categories from your extension.',
            codeblock: {
              title: 'Edit an existing collection',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-collection.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Add a new customer profile with contact details and addresses. This example demonstrates launching the customer creation form, awaiting completion, and displaying feedback based on the result. This enables importing customers from external systems or creating accounts during phone orders directly from your extension.',
            codeblock: {
              title: 'Create a new customer',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-customer.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update an existing customer profile to modify contact information or tags. This example demonstrates retrieving the customer GID from extension context, opening the editor, and handling completion responses. This allows syncing changes from external CRM systems or updating customer classifications from your extension.',
            codeblock: {
              title: 'Edit an existing customer',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-customer.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Create a new discount code for promotional campaigns. This example demonstrates launching the discount creation form, managing loading state, and providing feedback on completion. This enables merchants to set up promotions with configurable discount values, eligibility rules, and usage limits from your extension.',
            codeblock: {
              title: 'Create a new discount',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-discount.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Modify an existing discount to adjust values or extend active dates. This example demonstrates accessing the discount GID from extension context, opening the editor, and handling workflow completion. This allows merchants to respond to sales performance or update promotional campaigns from your extension.',
            codeblock: {
              title: 'Edit an existing discount',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-discount.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Create a new market for international selling with region-specific configurations. This example demonstrates launching the market creator, managing loading state, and displaying feedback on completion. This enables merchants to set up geographic regions, local currencies, and custom domains for localized storefronts from your extension.',
            codeblock: {
              title: 'Create a new market',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-market.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update an existing market to adjust geographic coverage or pricing strategies. This example demonstrates retrieving the market GID from extension context, opening the editor, and handling workflow completion. This allows merchants to expand into new countries or update exchange rate-based pricing from your extension.',
            codeblock: {
              title: 'Edit an existing market',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-market.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Build a new navigation menu for storefront headers or footers. This example demonstrates launching the menu creator, tracking loading state, and providing feedback on completion. This enables merchants to organize site navigation with links to collections, products, pages, or external URLs from your extension.',
            codeblock: {
              title: 'Create a new menu',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-menu.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Modify an existing navigation menu to reorganize structure or update links. This example demonstrates accessing the menu GID from extension context, opening the editor, and handling completion responses. This allows merchants to maintain current promotions or adapt navigation to inventory changes from your extension.',
            codeblock: {
              title: 'Edit an existing menu',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-menu.jsx',
                  language: 'jsx',
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
              'Define a new metafield to add custom data fields to products, orders, or customers. This example demonstrates launching the metafield definition creator, managing loading state, and providing feedback on completion. This enables merchants to extend resource schemas with app-specific data or specialized product attributes from your extension.',
            codeblock: {
              title: 'Create a new metafield definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-metafield-definition.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update an existing metafield definition to modify validation rules or field descriptions. This example demonstrates retrieving the definition GID from extension context, opening the editor, and handling workflow completion. This allows merchants to improve field clarity or adjust validation as requirements evolve from your extension.',
            codeblock: {
              title: 'Edit an existing metafield definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-metafield-definition.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Add a new entry to your custom content type for structured data. This example demonstrates launching the metaobject creator, tracking loading state, and providing feedback on completion. This enables merchants to populate reusable content like author profiles, product specifications, or warranty information from your extension.',
            codeblock: {
              title: 'Create a new metaobject',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-metaobject.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update an existing metaobject entry to modify field values or resource references. This example demonstrates accessing the metaobject GID from extension context, opening the editor, and handling completion responses. This allows centralizing content updates that propagate to all products, collections, or pages that reference the metaobject.',
            codeblock: {
              title: 'Edit an existing metaobject',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-metaobject.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Design a new metaobject definition to create reusable content types with custom field schemas. This example demonstrates launching the definition creator, managing loading state, and providing feedback on completion. This enables merchants to build structured content foundations for recipe cards, author profiles, or warranty information from your extension.',
            codeblock: {
              title: 'Create a new metaobject definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-metaobject-definition.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Modify an existing metaobject definition to add fields or update validation rules. This example demonstrates retrieving the definition GID from extension context, opening the editor, and handling workflow completion. This allows evolving content schemas as requirements change, with updates applying to all existing and future entries from your extension.',
            codeblock: {
              title: 'Edit an existing metaobject definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-metaobject-definition.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Create a new informational page for the online store like About Us or Shipping Policy. This example demonstrates launching the page creator, managing loading state, and providing feedback on completion. This enables merchants to add legal compliance pages, brand storytelling, or customer education content from your extension.',
            codeblock: {
              title: 'Create a new page',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-page.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update an existing page to modify content or SEO metadata. This example demonstrates retrieving the page GID from extension context, opening the editor, and handling workflow completion. This allows merchants to maintain current legal policies or refresh brand messaging with changes appearing immediately on the storefront.',
            codeblock: {
              title: 'Edit an existing page',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-page.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Add a new product to the store catalog with pricing, variants, and inventory settings. This example demonstrates launching the product creator, tracking loading state, and providing feedback on completion. This enables merchants to configure titles, descriptions, images, SKU management, and vendor information from your extension.',
            codeblock: {
              title: 'Create a new product',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-product.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Modify an existing product to update details, pricing, or images. This example demonstrates retrieving the product GID from extension context, opening the editor, and handling workflow completion. This allows merchants to implement seasonal pricing updates, image refreshes, or bulk attribute changes from your extension.',
            codeblock: {
              title: 'Edit an existing product',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-product.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
        ],
      },
      {
        title: '',
        examples: [
          {
            description:
              'Create a new variant for an existing product to add size, color, or material options. This example demonstrates launching the variant creator, managing loading state, and providing feedback on completion. This enables merchants to define option values, set variant-specific pricing, assign unique SKUs, and configure inventory tracking per location from your extension.',
            codeblock: {
              title: 'Create a new variant',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-variant.jsx',
                  language: 'jsx',
                },
              ],
            },
          },
          {
            description:
              'Update a specific product variant to modify pricing, SKU, or inventory levels. This example demonstrates retrieving the variant GID from extension context, opening the editor, and handling workflow completion. This allows merchants to implement seasonal pricing adjustments, correct inventory discrepancies, or manage location-specific stock levels from your extension.',
            codeblock: {
              title: 'Edit an existing variant',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-variant.jsx',
                  language: 'jsx',
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
        "- **Parse `ErrorIntentResponse.issues` array for specific feedback:** When `code: 'error'`, the `issues` array contains structured validation errors with field paths and messages. Use this to show specific error feedback rather than generic error messages.\n" +
        "- **Distinguish `closed` from `error`:** `code: 'closed'` means the merchant cancelled, while `code: 'error'` means validation or save failures. Handle these differently. Closed isn't an error state.\n" +
        '- **Query `product.hasOnlyDefaultVariant` before editing:** If the value is `false`, use the `shopify/ProductVariant` edit intent instead of `shopify/Product` to edit specific variants.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- Some resources require `data` for create operations. Discounts need `{ type: 'amount-off-product' }`, variants need `{ productId: 'gid://...' }`, and metaobjects need `{ type: 'definition-type' }`. Missing required data causes the intent to fail.\n" +
        "- MetaobjectDefinition edit requires `{ data: { type: 'definition-type' }}` instead of passing the GID in `value`. It's the only resource with this pattern.\n" +
        "- Intent workflows pause your extension until completion. You can't run other operations while an intent is open.\n" +
        "- The workflow UI can't be customized. Field order, labels, and validation messages are controlled by Shopify and can't be modified.\n" +
        "- Your extension only receives the final result. Intermediate workflow state and partial saves aren't communicated back to your extension.",
    },
  ],
};

export default data;
