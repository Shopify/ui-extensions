import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'Configuration',
  description: `
When you create a [checkout UI extension](/api/checkout-ui-extensions/), an [app extension configuration](/docs/apps/app-extensions/configuration) \`shopify.extension.toml\` file is automatically generated in your extension's directory.

This guide describes [extension targeting](#targets), [capabilities](#capabilities), [metafields](#metafields), and the [settings](#settings-definition) you can configure in the app extension configuration.
`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm the id matches the reference name.
  id: 'configuration',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'how-it-works',
      title: 'How it works',
      sectionContent: `
You define properties for your checkout UI extension in the extension configuration file. The \`shopify.extension.toml\` file contains the extension's configuration, which includes the extension name, targets, metafields, capabilities, and settings.

When an extension is published to Shopify, the contents of the settings file are pushed alongside the extension.
`,
      codeblock: {
        title: 'shopify.extension.toml',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/configuration/extended.example.toml',
            language: 'toml',
          },
        ],
      },
      sectionNotice: [
        {
          title: 'Tip',
          sectionContent: `
You can configure more than one type of extension within a configuration file.
`,
          type: 'info',
        },
      ],
      sectionCard: [
        {
          name: 'App extension configuration',
          subtitle: 'Learn more',
          url: '/docs/apps/app-extensions/configuration',
          type: 'gear',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'targets',
      title: 'Targets',
      sectionContent: `
[Targets](/docs/api/checkout-ui-extensions/extension-targets-overview) represent where your checkout UI extension will be injected. You may have one or many targets defined in your app extension configuration using the \`targeting\` field.

Along with the \`target\`, Shopify needs to know which code to execute for it. You specify the path to your code file by using the  \`module\` property.


      `,
      accordionContent: [
        {
          title: 'Supporting a single extension target',
          description: `
          Your code should have a default export if it only supports a single extension target.
          `,
          codeblock: {
            title: 'Single extension target',
            tabs: [
              {
                title: 'shopify.extension.toml',
                code: './examples/configuration/single-target.example.toml',
                language: 'toml',
              },
              {
                title: 'Block.jsx',
                code: './examples/configuration/single-target.example.tsx',
                language: 'jsx',
              },
            ],
          },
        },
        {
          title: 'Supporting multiple extension targets',
          description: `
          You can support multiple extension targets within a single configuration file. However, you must provide a separate file per extension target using the \`export default\` declaration.
          `,
          codeblock: {
            title: 'Multiple extension targets',
            tabs: [
              {
                title: 'shopify.extension.toml',
                code: './examples/configuration/multiple-targets.example.toml',
                language: 'toml',
              },
              {
                title: 'Actions.jsx',
                code: './examples/configuration/multiple-targets-actions.example.tsx',
                language: 'jsx',
              },
              {
                title: 'ShippingOptions.jsx',
                code: './examples/configuration/multiple-targets-shipping.example.tsx',
                language: 'jsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'capabilities',
      title: 'Capabilities',
      sectionContent: `
Defines the [capabilities](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-extension) associated with your extension.
| Property | Description  |
|---|---|
| [\`api_access\`](#api-access) | Allows your extension to query the Storefront API.
| [\`network_access\`](#network-access) | Allows your extension make external network calls.
| [\`block_progress\`](#block-progress) | States that your extension might block the buyer's progress.
| [\`collect_buyer_consent\`](#collect-buyer-consent) | Allows your extension to collect buyer consent for specific policies such as SMS marketing.
`,
      codeblock: {
        title: 'Capabilities',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/configuration/capabilities.example.toml',
            language: 'toml',
          },
        ],
      },
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
            title: 'shopify.extension.toml',
            code: './examples/configuration/api-access.example.toml',
            language: 'toml',
          },
        ],
      },
      sectionCard: [
        {
          name: 'API access examples',
          subtitle: 'See',
          url: '/docs/api/checkout-ui-extensions/apis/storefront-api#examples',
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
          sectionContent: `Enabling the \`api_access\` capability allows you to use the Standard API [\`query\`](/docs/api/checkout-ui-extensions/apis/storefront-api) method and the global \`fetch\` to retrieve data from the [Storefront API](/api/storefront) without manually managing token aquisition and refresh.

\`query\` lets you request a single GraphQL response from the Storefront API.

If you prefer to construct GraphQL requests yourself or you would like to use a full-featured GraphQL client such as Apollo or urql, our custom \`fetch\` global automatically appends the required access tokens.

The GraphQL client of your choice shouldn’t use any DOM APIs, as they aren’t available in a checkout UI extension's Web Worker.

> Note: Both \`query\` and \`fetch\` will work for calling the Storefront API with the \`api_access\` capability enabled. If you are using \`fetch\` to get data external to Shopify, refer to the [\`network_access\`](/api/checkout-ui-extensions/configuration#network-access) capability.`,
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
- <code>unauthenticated_read_metaobjects</code>
`,
        },
        {
          title: 'Protocol Links',
          sectionContent: `
Protocol links are an easy way for Shopify to infer the type of request you are trying to make. If you would like to make a request to the [Storefront GraphQL API](/docs/api/storefront), you can use our [Storefront Protocol](/docs/api/checkout-ui-extensions/unstable/apis/storefront-api#examples) to infer your Storefront URL and API version.
          `,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'network-access',
      title: 'Network access',
      sectionContent: `
The following section describes use cases for requesting network access, alternatives to requesting network access, and steps for completing a request for network access.
> Caution:
> If your extension specifies the \`network_access\` capability, you must request access in order to publish your extension.
`,
      codeblock: {
        title: 'Enable network access',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/configuration/network-access.example.toml',
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
3. Click **API access**.
4. Under **Allow network access in checkout UI extensions**, click **Allow network access**

   Your request is automatically approved and your app is immediately granted the approval scope that's required for your checkout UI extension to make external network calls.

5. Add <code>network_access = true</code> to the <code>[extensions.capabilities]</code> section of your extension's configuration file.`,
        },
        {
          title: 'Required CORS headers',
          sectionContent: `
UI extensions run in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) but the exact origin they run on may change without notice. When receiving network requests from extensions, your server must support [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for any origin by always returning this response header:

<code>Access-Control-Allow-Origin: *</code>
`,
        },
        {
          title: 'Security considerations',
          sectionContent: `
When processing HTTP requests on your API server, you cannot guarantee that your own extension will have made every request. When responding with sensitive data, keep in mind that requests could originate from anywhere on the Internet.

Your extension can pass a [session token](/docs/api/checkout-ui-extensions/unstable/apis/session-token) to your API server but this only guarantees the integrity of its claims. It does not guarantee the request itself originated from Shopify. For example, your API server could trust the session token's \`sub\` claim (the customer ID) but it could not trust a \`?customer_id=\` query parameter.

Consider a scenario where your extension retrieves a discount code from your API server and [applies it to the checkout](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-applydiscountcodechange). It would not be safe to expose an API endpoint named \`/get-discount-code\` if any buyer could make a direct HTTP request and obtain a discount code.
`,
        },
        {
          title: 'App Proxy',
          sectionContent: `
UI extensions can make fetch requests to [App Proxy](/docs/apps/online-store/app-proxies) URLs, but there are some differences and limitations related to the security context within which UI extensions run.

UI extension requests made to the App Proxy will execute as CORS requests. See _Required CORS headers_ above for information about requirements related to CORS.

UI extension requests made to the App Proxy will not assign the <code>logged_in_customer_id</code> query parameter. Instead use a [session token](/docs/api/checkout-ui-extensions/unstable/apis/session-token) which provides the <code>sub</code> claim for the logged in customer.

UI extension requests made to the App Proxy of password protected shops is not supported. Extension requests come from a web worker which does not share the same session as the parent window.

The App Proxy doesn't handle all [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Specifically, <code>CONNECT</code> and <code>TRACE</code> are unsupported.
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
          url: '/docs/api/checkout-ui-extensions/apis/buyer-journey#examples',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Enable progress blocking',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/configuration/block-progress.example.toml',
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
Setting \`block_progress\` in the \`shopify.extension.toml\` file informs merchants that your extension blocks the buyer's progress for invalid orders. Merchants can allow or disallow this capability in the checkout editor.

> Note:
> When running a local extension with the \`block_progress\` capability, it will be automatically granted. This simulates a scenario where the merchant has allowed the capability.
`,
        },
        {
          title: 'Detecting the ability to block progress',
          sectionContent: `
In your extension, look for \`block_progress\` in [extension.capabilities](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-extension) to see if the merchant has granted the blocking capability.

If the merchant declined the permission for your app to block progress, the \`behavior: 'block'\` option in the [buyer journey](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-buyerjourney) intercept will be treated as \`behavior: 'allow'\`, and checkout will proceed as normal.

When developing a local extension, you can remove the \`block_progress\` capability from your \`shopify.extension.toml\` file to simulate a merchant disallowing the capability.

> Tip:
> We recommend having some UI to cover cases where you can't block checkout progress. For example, you might want to show a warning rather than block checkout progress when an order doesn't pass validation.`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'collect-buyer-consent',
      title: 'Collect buyer consent',
      sectionContent:
        'If your extension utilizes the [ConsentCheckbox](/docs/api/checkout-ui-extensions/components/forms/consentcheckbox) or [ConsentPhoneField](/docs/api/checkout-ui-extensions/components/forms/consentphonefield) components to render a customized UI for collecting buyer consent, you must first declare that capability in your configuration file.',
      sectionSubContent: [
        {
          title: 'SMS Marketing',
          sectionContent:
            "In order to collect buyer consent for SMS marketing, you'll need to specifically declare this intent using `sms_marketing = true` in your toml configuration. This corresponds to the `policy` prop for the `Consent` components.",
        },
        {
          title: 'Customer Privacy',
          sectionContent:
            "In order to collect customer privacy consent, you'll need to add `customer_privacy = true` in your toml configuration. This will let you use our [Customer Privacy API](/docs/api/checkout-ui-extensions/unstable/apis/customer-privacy).",
        },
      ],
      codeblock: {
        title: 'Collect buyer consent',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/configuration/collect-buyer-consent.example.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'metafields',
      title: 'Metafields',
      sectionContent: `
Defines the [metafields](/docs/apps/custom-data/metafields) that are available to your extension.

Each extension target uses the metafields defined in \`[[extensions.metafields]]\` unless they specify their own \`[[extensions.targeting.metafields]]\`.

Supported resource metafield types include:

| Resource | Description |
|---| --- |
| \`cart\` | The cart associated with the current checkout. |
| \`company\` | The company for B2B checkouts. |
| \`companyLocation\` | The company's location for B2B checkouts. |
| \`customer\` | The customer account that is interacting with the current checkout. |
| \`product\` | The products that the customer intends to purchase. |
| \`shop\` | The shop that is associated with the current checkout. |
| \`shopUser\` | The Shop App user that is associated with the current checkout if there is one. |
| \`variant\` | The product variants that the customer intends to purchase. |

You retrieve these metafields in your extension by reading [\`appMetafields\`](/docs/api/checkout-ui-extensions/apis/standardapi#properties-propertydetail-appmetafields).

> Tip:
> You may write to \`cart\` metafields by using [\`applyMetafieldsChange\`](/docs/api/checkout-ui-extensions/apis/checkoutapi#properties-propertydetail-applymetafieldchange) with \`type: "updateCartMetafield"\`.
      `,
      codeblock: {
        title: 'Metafields',
        tabs: [
          {
            title: 'Metafields',
            code: './examples/configuration/metafields.example.toml',
            language: 'toml',
          },
        ],
      },
      sectionCard: [
        {
          name: 'useAppMetafields',
          subtitle: 'Hook',
          url: '/docs/api/checkout-ui-extensions/react-hooks/metafields/useappmetafields',
          type: 'blocks',
        },
        {
          name: 'useApplyMetafieldsChange',
          subtitle: 'Hook',
          url: '/docs/api/checkout-ui-extensions/react-hooks/metafields/useapplymetafieldschange',
          type: 'blocks',
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
            'Each setting can include validation options. Validation options enable you to apply additional constraints to the data that a setting can store, such as a minimum or maximum value, or a regular expression. The setting\'s `type` determines the available validation options. \n\n You can include a validation option for a setting using the validation `name` and a corresponding `value`. The appropriate value depends on the setting type to which the validation applies.\n\n The following table outlines the available validation options with supported types for applying constraints to a setting:\n\n | Validation option | Description | Supported types | Example |\n|---|---|---|---|\n| Minimum length | The minimum length of a text value. | <ul><li><code>single_line_text_field</code></li><li><code>multi_line_text_field</code></li></ul> | <pre>[[extensions.settings.fields.validations]]<br> name = "min"<br> value = "8"</pre> |\n| Maximum length | The maximum length of a text value. | <ul><li><code>single_line_text_field</code></li><li><code>multi_line_text_field</code></li></ul> | <pre>[[extensions.settings.fields.validations]]<br> name = "max"<br> value = "25"</pre> |\n| Regular expression | A regular expression. Shopify supports [RE2](https://github.com/google/re2/wiki/Syntax). | <ul><li><code>single_line_text_field</code></li><li><code>multi_line_text_field</code></li></ul> | <pre>[[extensions.settings.fields.validations]]<br> name = "regex"<br> value = "(@)(.+)$"</pre> |\n| Choices | A list of up to 128 predefined options that limits the values allowed for the metafield.  | `single_line_text_field` | <pre>[[extensions.settings.fields.validations]]<br> name = "choices"<br> value = "["red", "green", "blue"]"</pre> |\n| Minimum date | The minimum date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. | `date` | <pre>[[extensions.settings.fields.validations]]<br> name = "min"<br> value = "2022-01-01"</pre> |\n| Maximum date | The maximum date in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. | `date` | <pre>[[extensions.settings.fields.validations]]<br> name = "max"<br> value = "2022-03-03"</pre> |\n| Minimum datetime | The minimum date and time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. | `date_time` | <pre>[[extensions.settings.fields.validations]]<br> name = "min"<br> value = "2022-03-03T16:30:00"</pre> |\n| Maximum datetime | The maximum date and time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. |  `date_time` | <pre>[[extensions.settings.fields.validations]]<br> name = "max"<br> value = "2022-03-03T17:30:00"</pre> |\n| Minimum integer | The minimum integer number. | `number_integer` | <pre>[[extensions.settings.fields.validations]]<br> name = "min"<br> value = "9"</pre> |\n| Maximum integer | The maximum integer number. | `number_integer` | <pre>[[extensions.settings.fields.validations]]<br> name = "max"<br> value = "15"</pre> |\n| Minimum decimal | The minimum decimal number. |  `number_decimal` | <pre>[[extensions.settings.fields.validations]]<br> name = "min"<br> value = "0.5"</pre> |\n| Maximum decimal | The maximum decimal number. |  `number_decimal` | <pre>[[extensions.settings.fields.validations]]<br> name = "max"<br> value = "1.99"</pre> |\n| Maximum precision | The maximum number of decimal places to store for a decimal number. | `number_decimal` | <pre>[[extensions.settings.fields.validations]]<br> name = "max_precision"<br> value = "2"</pre> |',
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
            title: 'shopify.extension.toml',
            code: './examples/configuration/settings.example.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'preloads-definition',
      title: 'Preloads definition',
      sectionContent: `
For specific targets, you must provide the URL of assets or pages loaded by UI components within its extension. This allows Shopify to preload them as early as possible and ensure a performant experience for buyers. Currently, the only supported property is \`chat\` for the [\`Chat\` component](/docs/api/checkout-ui-extensions/latest/components/overlays/chat).

The \`chat\` property specifies the URL for the iframe used in this extension target. The URL can be absolute or relative. Relative URLs are resolved against the app URL defined in the app configuration.

For example,

* if the app URL is \`https://example.com\` and \`chat = "/my-chat-application"\`, the resolved URL will be \`https://example.com/my-chat-application\`.
* if \`chat = "https://my-chat-application.com"\`, the resolved URL will be \`https://my-chat-application.com\`.
      `,
      codeblock: {
        title: 'Extension target preloads',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/configuration/preloads.example.toml',
            language: 'toml',
          },
          {
            title: 'Block.jsx',
            code: './examples/configuration/preloads.example.tsx',
            language: 'jsx',
          },
        ],
      },
    },
  ],
};

export default data;
