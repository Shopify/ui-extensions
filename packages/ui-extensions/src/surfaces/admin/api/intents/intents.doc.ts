import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Intents',
  overviewPreviewDescription:
    'Orchestrate workflows and operations across Shopify resources',
  description: `The Intents API provides a way to invoke existing admin workflows for creating, editing, and managing Shopify resources.`,
  isVisualComponent: true,
  category: 'API',
  thumbnail: 'intents.png',
  requires:
    'an Admin [block](/docs/api/admin-extensions/unstable/extension-targets#block-locations) or [action](/docs/api/admin-extensions/unstable/extension-targets#action-locations) extension.',
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
      description: `The \`invoke\` API is a function that accepts either a string query or an options object describing the intent to invoke and returns a Promise that resolves to an activity handle for the workflow.

## Intent Format

Intents are invoked using a string query format: \`\${action}:\${type},\${value}\`

Where:
- \`action\` - The operation to perform (\`create\` or \`edit\`)
- \`type\` - The resource type (e.g., \`shopify/Product\`)
- \`value\` - The resource identifier (only for edit actions)

## Supported Resources

### Article
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Article\` | — | — |
| \`edit\` | \`shopify/Article\` | \`gid://shopify/Article/{id}\` | — |

### Catalog
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Catalog\` | — | — |
| \`edit\` | \`shopify/Catalog\` | \`gid://shopify/Catalog/{id}\` | — |

### Collection
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Collection\` | — | — |
| \`edit\` | \`shopify/Collection\` | \`gid://shopify/Collection/{id}\` | — |

### Customer
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Customer\` | — | — |
| \`edit\` | \`shopify/Customer\` | \`gid://shopify/Customer/{id}\` | — |

### Discount
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Discount\` | — | \`{ type: 'amount-off-product' \\| 'amount-off-order' \\| 'buy-x-get-y' \\| 'free-shipping' }\` |
| \`edit\` | \`shopify/Discount\` | \`gid://shopify/Discount/{id}\` | — |

### Market
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Market\` | — | — |
| \`edit\` | \`shopify/Market\` | \`gid://shopify/Market/{id}\` | — |

### Menu
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Menu\` | — | — |
| \`edit\` | \`shopify/Menu\` | \`gid://shopify/Menu/{id}\` | — |

### Metafield Definition
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/MetafieldDefinition\` | — | — |
| \`edit\` | \`shopify/MetafieldDefinition\` | \`gid://shopify/MetafieldDefinition/{id}\` | — |

### Metaobject
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Metaobject\` | — | \`{ type: 'shopify--color-pattern' }\` |
| \`edit\` | \`shopify/Metaobject\` | \`gid://shopify/Metaobject/{id}\` | \`{ type: 'shopify--color-pattern' }\` |

### Metaobject Definition
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/MetaobjectDefinition\` | — | — |
| \`edit\` | \`shopify/MetaobjectDefinition\` | \`gid://shopify/MetaobjectDefinition/{id}\` | — |

### Page
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Page\` | — | — |
| \`edit\` | \`shopify/Page\` | \`gid://shopify/Page/{id}\` | — |

### Product
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/Product\` | — | — |
| \`edit\` | \`shopify/Product\` | \`gid://shopify/Product/{id}\` | — |

### Product Variant
| Action | Type | Value | Data |
|--------|------|-------|------|
| \`create\` | \`shopify/ProductVariant\` | — | \`{ productId: 'gid://shopify/Product/{id}' }\` |
| \`edit\` | \`shopify/ProductVariant\` | \`gid://shopify/ProductVariant/{id}\` | \`{ productId: 'gid://shopify/Product/{id}' }\` |`,
      type: 'IntentInvokeApi',
    },
    {
      title: 'IntentAction',
      description: `Supported actions that can be performed on resources.
- \`create\`: Opens a creation workflow for a new resource
- \`edit\`: Opens an editing workflow for an existing resource (requires \`value\` parameter)`,
      type: 'IntentAction',
    },
    {
      title: 'IntentType',
      description: `Supported resource types that can be targeted by intents.`,
      type: 'IntentType',
    },
    {
      title: 'IntentQueryOptions',
      description: `Options for invoking intents when using the query string format.`,
      type: 'IntentQueryOptions',
    },
    {
      title: 'IntentResponse',
      description: `Response object returned when the intent workflow completes.`,
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
        title: 'Metafield Definition',
        examples: [
          {
            description:
              'Create a new metafield definition. Opens the metafield definition creation workflow.',
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
              'Edit an existing metafield definition. Requires a metafield definition GID.',
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
};

export default data;
