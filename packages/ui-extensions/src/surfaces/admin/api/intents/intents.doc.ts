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
    'an admin UI [block or action](/docs/api/admin-extensions/{API_VERSION}#building-your-extension) extension.',
  defaultExample: {
    description:
      'Launch the article creation workflow from a button click. This example uses `shopify.intents.invoke()` to open the article editor, awaits the workflow completion, and displays success or cancellation feedback based on the response code.',
    image: 'intents.png',
    codeblock: {
      title: 'Create a new article',
      tabs: [
        {
          title: 'jsx',
          code: './examples/create-article.jsx',
          language: 'jsx',
        },
        {
          title: 'js',
          code: './examples/create-article.js',
          language: 'js',
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

#### Location

[Locations](/docs/api/admin-graphql/latest/objects/Location) are physical or virtual places where merchants store inventory and fulfill orders. Use this to create or edit locations for managing stock and fulfillment.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Location\` | — | — |
| \`edit\` | \`shopify/Location\` | \`gid://shopify/Location/{id}\` | — |

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
> When editing products with variants, query the [\`product.hasOnlyDefaultVariant\`](/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.hasOnlyDefaultVariant) field first. If \`true\`, then use the \`shopify/Product\` edit intent. If \`false\`, then use the \`shopify/ProductVariant\` edit intent for specific variants.

#### Settings

Settings are the configuration options for the store. Use this to invoke and edit settings.

| Action | Type | Value | Data |
|--------|------|-------|------|
| \`edit\` | \`settings/LocationDefault\` | — | — |
| \`edit\` | \`settings/OrderIdFormat\` | — | — |
| \`edit\` | \`settings/OrderProcessing\` | — | — |
| \`edit\` | \`settings/StoreDefaults\` | — | — |
| \`edit\` | \`settings/StoreDetails\` | — | — |`,

      type: 'IntentInvokeApi',
    },
    {
      title: 'IntentResponse',
      description: `The result returned when an intent workflow completes. Check the \`code\` property to determine the outcome:
- \`'ok'\`: The merchant completed the workflow successfully.
- \`'error'\`: The workflow failed due to validation or other errors.
- \`'closed'\`: The merchant cancelled without completing.`,
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
              'Open the article editor for a selected blog post. This example retrieves the article GID from extension context, passes it to the edit intent, and handles both successful updates and cancellations.',
            codeblock: {
              title: 'Edit an existing article',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-article.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-article.js',
                  language: 'js',
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
              'Launch the catalog creation workflow to set up B2B customer groups or market-specific product collections. This example invokes the create intent, manages loading state, and displays success or cancellation feedback.',
            codeblock: {
              title: 'Create a new catalog',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-catalog.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-catalog.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the catalog editor to adjust product assignments or market settings. This example retrieves the catalog GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing catalog',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-catalog.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-catalog.js',
                  language: 'js',
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
              'Launch the collection creation workflow for organizing products on the storefront. This example invokes the create intent, tracks loading state, and displays feedback when the workflow completes.',
            codeblock: {
              title: 'Create a new collection',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-collection.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-collection.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the collection editor to modify products or automation rules. This example retrieves the collection GID, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing collection',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-collection.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-collection.js',
                  language: 'js',
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
              'Launch the customer creation form to add a new profile with contact details and addresses. This example invokes the create intent, awaits completion, and displays feedback based on the result code.',
            codeblock: {
              title: 'Create a new customer',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-customer.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-customer.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the customer editor to update contact information or tags. This example retrieves the customer GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing customer',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-customer.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-customer.js',
                  language: 'js',
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
              'Launch the discount creation form for setting up promotional campaigns. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new discount',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-discount.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-discount.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the discount editor to adjust values or extend active dates. This example retrieves the discount GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing discount',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-discount.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-discount.js',
                  language: 'js',
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
              'Launch the location creation workflow to add a new physical or virtual fulfillment location. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new location',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-location.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-location.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the location editor to update address details, fulfillment settings, or inventory tracking. This example retrieves the location GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing location',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-location.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-location.js',
                  language: 'js',
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
              'Launch the market creation workflow for international selling with region-specific configurations. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new market',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-market.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-market.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the market editor to adjust geographic coverage or pricing strategies. This example retrieves the market GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing market',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-market.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-market.js',
                  language: 'js',
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
              'Launch the menu creation workflow for storefront navigation headers or footers. This example invokes the create intent, tracks loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new menu',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-menu.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-menu.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the menu editor to reorganize navigation structure or update links. This example retrieves the menu GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing menu',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-menu.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-menu.js',
                  language: 'js',
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
              'Launch the metafield definition creator to add custom data fields to products, orders, or customers. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new metafield definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-metafield-definition.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-metafield-definition.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the metafield definition editor to modify validation rules or field descriptions. This example retrieves the definition GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing metafield definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-metafield-definition.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-metafield-definition.js',
                  language: 'js',
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
              'Launch the metaobject creator to add a new entry to a custom content type. This example invokes the create intent, tracks loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new metaobject',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-metaobject.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-metaobject.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the metaobject editor to modify field values or resource references. This example retrieves the metaobject GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing metaobject',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-metaobject.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-metaobject.js',
                  language: 'js',
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
              'Launch the metaobject definition creator to build reusable content types with custom field schemas. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new metaobject definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-metaobject-definition.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-metaobject-definition.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the metaobject definition editor to add fields or update validation rules. This example retrieves the definition GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing metaobject definition',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-metaobject-definition.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-metaobject-definition.js',
                  language: 'js',
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
              'Launch the page creator to add an informational page like About Us or Shipping Policy. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new page',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-page.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-page.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the page editor to update content or SEO metadata. This example retrieves the page GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing page',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-page.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-page.js',
                  language: 'js',
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
              'Launch the product creation workflow to add a new item to the store catalog. This example invokes the create intent, tracks loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new product',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-product.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-product.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the product editor to update details, pricing, or images. This example retrieves the product GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing product',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-product.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-product.js',
                  language: 'js',
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
              'Launch the variant creation workflow to add size, color, or material options to a product. This example invokes the create intent, manages loading state, and displays feedback on completion.',
            codeblock: {
              title: 'Create a new variant',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/create-variant.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/create-variant.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Open the variant editor to modify pricing, SKU, or inventory levels. This example retrieves the variant GID from extension context, invokes the edit intent, and handles the completion response.',
            codeblock: {
              title: 'Edit an existing variant',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-variant.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-variant.js',
                  language: 'js',
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
              'Launch locations in Settings to update the store\'s default location.',
            codeblock: {
              title: 'Edit default location',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-location-default.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-location-default.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Launch store details in Settings to update the store name, email, or phone number.',
            codeblock: {
              title: 'Edit store details',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-store-details.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-store-details.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Launch store defaults in Settings to update the store currency, timezone, or country.',
            codeblock: {
              title: 'Edit store defaults',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-store-defaults.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-store-defaults.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description: 'Launch order ID in Settings to update the format.',
            codeblock: {
              title: 'Edit Order ID Format',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-order-id-format.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-order-id-format.js',
                  language: 'js',
                },
              ],
            },
          },
          {
            description:
              'Launch order processing in Settings to update the store order processing preferences.',
            codeblock: {
              title: 'Edit order processing',
              tabs: [
                {
                  title: 'jsx',
                  code: './examples/edit-order-processing.jsx',
                  language: 'jsx',
                },
                {
                  title: 'js',
                  code: './examples/edit-order-processing.js',
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
