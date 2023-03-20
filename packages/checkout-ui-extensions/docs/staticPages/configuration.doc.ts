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
      sectionContent:
        "| Property  | Required? | Description  | \n|---|---|---|\n| `type` | Yes | The type of extension. For checkout UI extensions, this value is `checkout_ui_extension`. |\n| `name`  | Yes | The name of the checkout UI extension. |\n| `extension_points`  | Yes | The [API endpoints](/api/checkout-ui-extensions/extension-points-overview) that let you add custom workflows and functionality at defined points of the checkout process. |\n| `metafields`  | Yes | The [metafields](/api/admin-graphql/latest/objects/metafield) that your extension needs to read. <br></br>You can specify up to five `key` and `namespace` pairs in the settings file. When the extension is executed, Shopify looks for the metafields in each resource and returns their contents. |\n| `capabilities`  | No | Defines the capabilities associated with the checkout UI extension. <br></br><ul><li>[`api_access`](#api-access): Allows you to query [Storefront API](/api/storefront) from your extension.</li><li>[`network_access`](#network-access): Allows you to use the [JavaScript fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in your extension to make external network calls. If you add this property, then you need to [complete the request for network access](#network-access) in your [Partner Dashboard](https://partners.shopify.com/current/apps).</li><li>[`block_progress`](#block-progress): States that your extension might block checkout progress using the [buyerJourney](/api/checkout-extensions/checkout/extension-points/api#standardapi) intercept to enforce validation. [This capability isn't guaranteed](#block-progress), and requires the merchant to allow it when configuring the extension within the checkout editor. </li></ul> |\n| `settings` | No | Defines settings for the checkout UI extension that a merchant can set values for in the checkout editor. For more information, refer to [settings definition](#settings-definition). |",
    },
    {
      type: 'Generic',
      anchorLink: 'api-access',
      title: 'Storefront API access',
      sectionContent:
        'The following section describes the use cases of the `api_access` capability and the Storefront API access scopes.',
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
          title: 'Alternatives to requesting network access',
          sectionContent:
            'If you need to make an external call for data, then consider storing the data in a metafield instead of requesting network access. Storing data in a metafield enables you to rely on Shopify for the uptime, scaling, and durability of the data storage.',
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
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'block-progress',
      title: 'Block progress',
      sectionContent:
        'The following section describes use cases for blocking checkout progress, and how you can detect whether the merchant has allowed it.',
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
          title: 'When to request blocking checkout progress',
          sectionContent:
            "If your extension relies on required input or validating order information, then you might need to block checkout progress if the order isn't valid. You can do this with the [buyerJourney](/api/checkout-ui-extensions/extension-points-api#standardapi) intercept, by returning `behavior: block`. \n\n For example, for some purchases you need to collect and verify a customer's age. For the order to be valid, you need to verify that an age is set and that it's greater than or equal to a minimum value. \n\n In order to block checkout progress, your extension must have the `block_progress` capability.",
        },
        {
          title: 'Granting the capability to block checkout progress',
          sectionContent:
            'Setting `block_progress` in the `shopify.ui.extension.toml` file informs merchants that your extension blocks checkout progress for invalid orders.  Merchants can allow or disallow this capability in the checkout editor. \n\n > Note: \n > When running a local extension with the `block_progress` capability, it will be automatically granted. This simulates a scenario where the merchant has allowed this capability. ',
        },
        {
          title: 'Detecting the ability to block checkout progress',
          sectionContent:
            "In your extension code, you can use [capabilities](/api/checkout-ui-extensions/extension-points-api#standardapi) to see if the merchant has granted this capability. \n\n If your extension can't block checkout progress, then a `behavior: block` return in the [buyerJourney](/api/checkout-ui-extensions/extension-points-api#standardapi) intercept is treated as `behavior: allow`. \n\n When developing a local extension, you can remove the `block_progress` capability from your `shopify.ui.extension.toml` file to simulate a merchant disallowing the capability. \n\n > Tip: \n > We recommend having some UI to cover cases where you can't block checkout progress. For example, you might want to show a warning rather than block checkout progress when an order doesn't pass validation.",
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
