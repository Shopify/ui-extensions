import {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Configuration',
  description:
    'When you create a [checkout UI extension](/api/checkout-ui-extensions/), the `shopify.ui.extension.toml` file is automatically generated in your checkout UI extension directory. This guide describes the properties that you can configure in `shopify.ui.extension.toml`.',
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm id matches the reference name.
  id: 'configuration',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'how-it-works',
      title: 'How it works',
      sectionContent:
        "You define properties for your checkout UI extension in the extension configuration file. The `shopify.ui.extension.toml` file contains the extension's configuration, which include the extension name, extension points, metafields, capabilities, and settings definition. \n\n When an extension is published to Shopify, the contents of the settings file are pushed alongside the extension.",
      codeblock: {
        title: 'Shopify Checkout UI scaffolding',
        tabs: [
          {
            title: 'shopify.ui.extension.toml',
            code: './examples/configure-example-extended.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'Markdown',
      anchorLink: 'configuration-properties',
      title: 'Configuration properties',
      sectionContent: `
| Property  | Required? | Description  |
|---|---|---|
| \`type\` | Yes | The type of extension. For checkout UI extensions, this value is \`checkout_ui_extension\`. |
| \`name\`  | Yes | The name of the checkout UI extension. |
| \`extension_points\`  | Yes | The [pre-defined points](/docs/api/checkout-ui-extensions/extension-points-overview) within checkout that your extension will render to. These values must match how your extension calls \`extend()\` or \`render()\`.<br /><br />For example, if your extension calls \`extend('Checkout::Dynamic::Render', () => {})\` then your config must specify \`Checkout::Dynamic::Render\`. |
| \`metafields\`  | Yes | The metafields that your extension [needs to read](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-appmetafields). <br></br>You can specify up to five \`key\` and \`namespace\` pairs in the settings file. When the extension is executed, Shopify looks for the metafields in each resource and returns their contents. |
| \`capabilities\`  | No | Defines the [capabilities](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-extension) associated with the UI extension. <br></br><ul><li>[\`api_access\`](#api-access): Allows your extension to query the Storefront API.</li><li>[\`network_access\`](#network-access): Allows your extension make external network calls.</li><li>[\`block_progress\`](#block-progress): States that your extension might block the buyer's progress.</li></ul> |
| \`settings\` | No | Defines [settings](#settings-definition) that a merchant can set values for in the checkout editor. |
`,
    },
    {
      type: 'Generic',
      anchorLink: 'api-access',
      title: 'Storefront API access',
      sectionContent:
        'The following section describes the use cases of the `api_access` capability and the [Storefront API](/api/storefront) access scopes.',
      codeblock: {
        title: 'Enable Storefront API access',
        tabs: [
          {
            title: 'shopify.ui.extension.toml',
            code: './examples/configure-api-access.toml',
            language: 'toml',
          },
        ],
      },
      sectionCard: [
        {
          name: 'API access examples',
          subtitle: 'See',
          url: '/docs/api/checkout-ui-extensions/apis/standardapi#example-storefront-api-access',
          type: 'blocks',
        },
      ],
      sectionSubContent: [
        {
          title: 'When to use Storefront API access',
          sectionContent: `API access is used when your extension needs to retrieve data from the [Storefront API](/api/storefront). For example, you may need to [fetch product data](/apps/checkout/product-offers/add-product-offer), check the product tags on an item in the cart, or convert a product's price to another currency.

> Tip:
> Shopify handles the authentication for all API calls from an extension.
`,
        },
        {
          title: 'Methods for accessing the Storefront API',
          sectionContent: `Enabling the \`api_access\` capability allows you to use the Standard API [\`query\`](/api/checkout-ui-extensions/extension-points-api#standardapi) method and the global \`fetch\` to retrieve data from the [Storefront API](/api/storefront) without manually managing token aquisition and refresh.

\`query\` lets you request a single GraphQL response from the Storefront API.

If you prefer to construct GraphQL requests yourself or you would like to use a full-featured GraphQL client such as Apollo or urql, our custom \`fetch\` global automatically appends the required access tokens.

The GraphQL client of your choice shouldn’t use any DOM APIs, as they aren’t available in a checkout UI extension's Web Worker.

> Note: Both \`query\` and \`fetch\` will work for calling the Storefront API with the \`api_access\` capability enabled. If you are using \`fetch\` to get data external to Shopify, refer to the [\`network_access\` capability](/api/checkout-ui-extensions/configuration#network-access)`,
        },
        {
          title: 'Storefront API access scopes',
          sectionContent: `
Your extensions will have the following unauthenticated access scopes to the Storefront API:

- <code>unauthenticated_read_product_publications</code>
- <code>unauthenticated_read_collection_publications</code>
- <code>unauthenticated_read_product_listings</code>
- <code>unauthenticated_read_product_tags</code>
- <code>unauthenticated_read_selling_plans</code>
- <code>unauthenticated_read_collection_listings</code>
`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'network-access',
      title: 'Network access',
      sectionContent:
        'The following section describes use cases for requesting network access, alternatives to requesting network access, and steps for completing a request for network access.',
      codeblock: {
        title: 'Enable network access',
        tabs: [
          {
            title: 'shopify.ui.extension.toml',
            code: './examples/configure-network-access.toml',
            language: 'toml',
          },
        ],
      },
      sectionSubContent: [
        {
          title: 'When to request network access',
          sectionContent:
            "If you need to get data into checkout that you can't currently get from Shopify, then you should request network access. For example, you might need to fetch additional data to render loyalty points.",
        },
        {
          title: 'Alternatives to network access',
          sectionContent: `
Instead of fetching data with an external network call, consider retrieving the data from a metafield. Your app may be able to use the [Admin API](/docs/api/admin) to write [metafields](/api/admin-graphql/latest/objects/metafield) on the shop, product, or customer ahead of checkout.

Retrieving data from [metafields](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-appmetafields) during checkout is faster since it won't introduce an external network call. This allows you to rely on Shopify for the uptime, scaling, and durability of the data storage.
`,
        },
        {
          title: 'Complete a request for network access',
          sectionContent: `
1. Go to your [Partner Dashboard](https://partners.shopify.com/current/apps).
2. Click the name of the app that you want to change.
3. Click **App setup**.
4. In the **Checkout UI extensions** section, on the **Enable network access in checkout UI extensions** card, click **Request access**.

   Your request is automatically approved and your app is immediately granted the approval scope that's required for your checkout UI extension to make external network calls.

5. Add <code>network_access = true</code> to the <code>settings</code> section of your extension's configuration file.`,
        },
        {
          title: 'Required CORS headers',
          sectionContent: `
Since UI extensions run in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), they have a null origin. They do not share the storefront or checkout's origin. For network calls to succeed, your server must support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for null origins by including this response header:

<code>Access-Control-Allow-Origin: *</code>
`,
        },
        {
          title: 'Security considerations',
          sectionContent: `
When processing HTTP requests on your API server, you cannot guarantee that your own extension will have made every request. When responding with sensitive data, keep in mind that requests could originate from anywhere on the Internet.

Your extension can pass a [session token](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-sessiontoken) to your API server but this only guarantees the integrity of its claims. It does not guarantee the request itself originated from Shopify. For example, your API server could trust the session token's \`sub\` claim (the customer ID) but it could not trust a \`?customer_id=\` query parameter.

Consider a scenario where your extension retrieves a discount code from your API server and [applies it to the checkout](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-applydiscountcodechange). It would not be safe to expose an API endpoint named \`/get-discount-code\` if any buyer could make a direct HTTP request and obtain a discount code.
`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'block-progress',
      title: 'Block progress',
      sectionContent:
        "The following section describes blocking the buyer's progress through checkout, and how you can detect whether the merchant has allowed it.",
      sectionCard: [
        {
          name: 'Blocking examples',
          subtitle: 'See',
          url: '/docs/api/checkout-ui-extensions/apis/standardapi#example-buyer-journey',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Enable progress blocking',
        tabs: [
          {
            title: 'shopify.ui.extension.toml',
            code: './examples/configure-block-progress.toml',
            language: 'toml',
          },
        ],
      },
      sectionSubContent: [
        {
          title: 'When to request blocking progress',
          sectionContent: `
If your extension relies on specific input then you might need to block the buyer's progress until they've provided all required information. You can do this with a [buyer journey](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-buyerjourney) intercept, by returning \`behavior: 'block'\`.

For example, for some purchases you need to collect and verify a customer's age. For the order to be valid, you need to verify that an age is set and that it's greater than or equal to a minimum value.

In order to block checkout progress, your extension must have the \`block_progress\` capability.
`,
        },
        {
          title: 'Granting the capability to block progress',
          sectionContent: `
Setting \`block_progress\` in the \`shopify.ui.extension.toml\` file informs merchants that your extension blocks the buyer's progress for invalid orders. Merchants can allow or disallow this capability in the checkout editor.

> Note:
> When running a local extension with the \`block_progress\` capability, it will be automatically granted. This simulates a scenario where the merchant has allowed the capability.
`,
        },
        {
          title: 'Detecting the ability to block progress',
          sectionContent: `
In your extension, look for \`block_progress\` in [extension.capabilities](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-extension) to see if the merchant has granted the blocking capability.

If the merchant declined the permission for your app to block progress, the \`behavior: 'block'\` option in the [buyer journey](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-buyerjourney) intercept will be treated as \`behavior: 'allow'\`, and checkout will proceed as normal.

When developing a local extension, you can remove the \`block_progress\` capability from your \`shopify.ui.extension.toml\` file to simulate a merchant disallowing the capability.

> Tip:
> We recommend having some UI to cover cases where you can't block checkout progress. For example, you might want to show a warning rather than block checkout progress when an order doesn't pass validation.`,
        },
      ],
    },
    {
      type: 'Markdown',
      anchorLink: 'settings-definition',
      title: 'Settings definition',
      sectionContent:
        "The settings for a checkout UI extension define a set of fields that the merchant can set a value for from the [checkout editor](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor). You can use validation options to apply additional constraints to the data that the setting can store, such as a minimum or maximum value. \n\n Each settings definition can include up to 20 settings. \n\n > Note: \n > All setting inputs are optional. You should code the extension so that it still works if the merchant hasn't set a value for the setting.",
      sectionSubContent: [
        {
          title: 'Properties',
          sectionContent:
            'The following table describes the properties that you can use to define a setting:\n\n | Property  | Required? | Description | Example |\n|---|---|---|---|\n| `key` | Yes | The key of the setting. When a merchant configures a value for this setting, the value will be exposed under this `key` when running your extension    | <pre>"banner_title"</pre> |\n| `type` | Yes | The [type](#supported-setting-types) of setting. | <pre>"single_line_text_field"</pre> |\n| `name` | Yes | The name of the setting. `name` is displayed to the merchant in the checkout editor. | <pre>"Banner title"</pre> |\n| `description` | No | The description of the setting. `description` is displayed to the merchant in the checkout editor. | <pre>"Enter a title for the banner."</pre> |\n| `validations` | No | Constraints on the setting input that Shopify validates. | <pre>validations: <br> name = "max",<br> value = "25"</pre> |',
        },
        {
          title: 'Supported setting types',
          sectionContent:
            'The setting type determines the type of information that the setting can store. The setting types have built-in validation on the setting input. \n\n Settings can have the following types: \n\n| Type | Description | Example value |\n|---|---|---|\n| `boolean` | A true or false value. | <pre>true</pre> |\n| `date` | A date in ISO 8601 format without a presumed time zone. | <pre>2022-02-02</pre> |\n| `date_time` | A date and time in ISO 8601 format without a presumed time zone. | <pre>2022-01-01T12:30:00</pre> |\n| `single_line_text_field` | A single line string. | <pre>Canada</pre> |\n| `multi_line_text_field` | A multi-line string. | <pre>Canada<br>United States<br>Brazil<br>Australia</pre> |\n| `number_integer` | A whole number in the range of +/-9,007,199,254,740,991. | <pre>10</pre> |\n| `number_decimal` | A number with decimal places in the range of +/-9,999,999,999,999.999999999. | <pre>10.4</pre> |\n| `variant_reference` | A globally-unique identifier (GID) for a product variant. | <pre>gid://shopify/ProductVariant/1<pre> |',
        },
        {
          title: 'Validation options',
          sectionContent:
            'Each setting can include validation options. Validation options enable you to apply additional constraints to the data that a setting can store, such as a minimum or maximum value, or a regular expression. The setting\'s `type` determines the available validation options. \n\n You can include a validation option for a setting using the validation `name` and a corresponding `value`. The appropriate value depends on the setting type to which the validation applies.\n\n The following table outlines the available validation options with supported types for applying constraints to a setting:\n\n | Validation option | Description | Supported types | Example |\n|---|---|---|---|\n| Minimum length | The minimum length of a text value. | <ul><li><code>single_line_text_field</code></li><li><code>multi_line_text_field</code></li></ul> | <pre>[[settings.fields.validations]]<br> name = "min"<br> value = "8"</pre> |\n| Maximum length | The maximum length of a text value. | <ul><li><code>single_line_text_field</code></li><li><code>multi_line_text_field</code></li></ul> | <pre>[[settings.fields.validations]]<br> name = "max"<br> value = "25"</pre> |\n| Regular expression | A regular expression. Shopify supports [RE2](https://github.com/google/re2/wiki/Syntax). | <ul><li><code>single_line_text_field</code></li><li><code>multi_line_text_field</code></li></ul> | <pre>[[settings.fields.validations]]<br> name = "regex"<br> value = "(@)(.+)$"</pre> |\n| Choices | A list of up to 128 predefined options that limits the values allowed for the metafield.  | `single_line_text_field` | <pre>[[settings.fields.validations]]<br> name = "choices"<br> value = "["red", "green", "blue"]"</pre> |\n| Minimum date | The minimum date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. | `date` | <pre>[[settings.fields.validations]]<br> name = "min"<br> value = "2022-01-01"</pre> |\n| Maximum date | The maximum date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. | `date` | <pre>[[settings.fields.validations]]<br> name = "max"<br> value = "2022-03-03"</pre> |\n| Minimum datetime | The minimum date and time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. | `date_time` | <pre>[[settings.fields.validations]]<br> name = "min"<br> value = "2022-03-03T16:30:00"</pre> |\n| Maximum datetime | The maximum date and time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. |  `date_time` | <pre>[[settings.fields.validations]]<br> name = "max"<br> value = "2022-03-03T17:30:00"</pre> |\n| Minimum integer | The minimum integer number. | `number_integer` | <pre>[[settings.fields.validations]]<br> name = "min"<br> value = "9"</pre> |\n| Maximum integer | The maximum integer number. | `number_integer` | <pre>[[settings.fields.validations]]<br> name = "max"<br> value = "15"</pre> |\n| Minimum decimal | The minimum decimal number. |  `number_decimal` | <pre>[[settings.fields.validations]]<br> name = "min"<br> value = "0.5"</pre> |\n| Maximum decimal | The maximum decimal number. |  `number_decimal` | <pre>[[settings.fields.validations]]<br> name = "max"<br> value = "1.99"</pre> |\n| Maximum precision | The maximum number of decimal places to store for a decimal number. | `number_decimal` | <pre>[[settings.fields.validations]]<br> name = "max_precision"<br> value = "2"</pre> |',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'example-settings-definition',
      title: 'Example settings definition',
      sectionContent:
        'The following example shows a settings definition that defines a setting named `banner_title` of type `single_line_text_field`. When the merchant sets a value for this setting from the checkout editor, Shopify validates that the provided value is between 5 and 20 characters in length \n\n Learn more about the settings api by completing our [custom banners example](/apps/checkout/custom-banners/add-custom-banner).',
      sectionCard: [
        {
          name: 'Settings example code',
          subtitle: 'See',
          url: '/docs/api/checkout-ui-extensions/apis/standardapi#example-settings',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Example settings',
        tabs: [
          {
            title: 'shopify.ui.extension.toml',
            code: './examples/settings-example.toml',
            language: 'toml',
          },
        ],
      },
    },
  ],
};

export default data;
