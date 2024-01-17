import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'API versioning and unified UI extensions',
  description: `
As of Summer Editions 2023 (July 26), we have introduced some important changes to checkout UI extensions:

- The introduction of API versioning and the [associated API versioning strategy](/docs/api/usage/versioning)
- Changes to the configuration \`toml\` file that match the format for other app extensions
- \`extension points\` have been renamed to \`targets\`

For more details on the above, [please visit our post on the ui-extensions public repository](https://github.com/Shopify/ui-extensions/discussions/1161)
`,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm id matches the reference name.
  id: 'versioning-migration',
  sections: [
    {
      type: 'Markdown',
      anchorLink: 'what-changed-in-the-toml-file',
      title: 'What changed in the toml file',
      sectionContent: `
The main changes you will need to make will be to your configuration file (\`shopify.ui.extension.toml\`). We changed a few of the fields you currently use to configure a UI extension:

- \`type\`, which currently is set to \`checkout_ui_extension\`, must be updated to \`ui_extension\`
- \`extension_points\` is now \`[[extensions.targeting]]\` and is expanded to include additional details. Most notably, you will need to provide a \`module\`, which is a reference to the file in your project that implements the extension. \`metafields\` that you will query must also now be specified per-extension point
- a new mandatory field: \`api_version\`. This field must be a Shopify API version, in the same format you would use for [Shopify's REST and GraphQL APIs](https://shopify.dev/api/usage/versioning). This version will control what extension points, components, and APIs are available to your extension, and will come with the same 1 year (minimum) guarantee as our other APIs. The first public API version for checkout UI extensions was \`2023-07\`
- \`handle\`, which should be set in the nested \`extensions\` level of your configuration file. This is a unique identifier for your extension, and will be used to reference it from other extensions. We recommend using dash casing for the handle (for example, \`my-extension\` for an extension named "My extension")
- \`shopify.ui.extension.toml\` is now \`shopify.extension.toml\`
`,
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'converting-the-extension-configuration-file',
      title: 'Update the configuration file',
      sectionContent: `
First, rename your \`shopify.ui.extension.toml\` file to \`shopify.extension.toml\`.

Next, update the extension configuration file to the new format. To make it easier for the CLI to detect which extensions are being migrated to the new format, you should have the directory name of the extension match the new \`handle\` field you provide. We recommend making both the directory name and \`handle\` fields be the handle-cased version of your extension name (for example, \`my-extension\` for an extension with \`name = "My extension"\`).
`,
      accordionContent: [
        {
          title: 'Previous shopify.ui.extension.toml',
          description: '',
          codeblock: {
            title: 'Previous shopify.ui.extension.toml',
            tabs: [
              {
                title: 'shopify.ui.extension.toml',
                code: './examples/migration/previous.example.toml',
                language: 'toml',
              },
            ],
          },
        },
        {
          title: 'New shopify.extension.toml',
          description: '',
          codeblock: {
            title: 'New shopify.extension.toml',
            tabs: [
              {
                title: 'shopify.extension.toml',
                code: './examples/migration/new.example.toml',
                language: 'toml',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'packages',
      title: 'Update the packages',
      sectionContent: `
We will be moving to a new set of packages for distributing UI extension APIs — \`@shopify/checkout-ui-extensions\` and \`@shopify/checkout-ui-extensions-react\` will be replaced with \`@shopify/ui-extensions/checkout\` and \`@shopify/ui-extensions-react/checkout\`. These new packages will allow you to implement extensions for multiple surfaces without requiring multiple dependencies. You'll need to update any import for the existing packages with the new package.

In your \`package.json\`, replace any \`@shopify/checkout-ui-extensions\` package with the \`@shopify/ui-extensions\` equivalent.

You will notice that the UI extension packages have a new versioning system. In the new versions, the "major" version number is the API version year (e.g., \`2023\`), the "minor" version number is the API version month (e.g., \`10\` for \`2023.10\`), and the "patch" version number is reserved by Shopify for making bugfixes on the contents of the package (e.g. \`.1\` for \`2023.10.1\`). You will need to match the version of the package you install to the API version your extension targets, so that you get access to the types and runtime utilities associated with that API version. We recommend using a version that locks in the major and minor version numbers, and allows the patch version to be updated, like the \`2023.10.x\` version range shown above.

> Caution:
> Versions \`2023.07.x\` and later have a couple breaking changes compared to the \`0.27.x\` range of the \`@shopify/checkout-ui-extensions(-react)\` packages. If you want to upgrade to the new API versioning system, but continue to use the APIs you were using before without any changes, we also provide a \`2023.4.x\` version range that contains the same APIs as the \`0.27.x\` range of the old packages.
`,
      accordionContent: [
        {
          title: 'Previous package.json',
          description: '',
          codeblock: {
            title: 'Previous package.json',
            tabs: [
              {
                title: 'package.json',
                code: './examples/migration/previous.package.example.json',
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'New package.json',
          description: '',
          codeblock: {
            title: 'New package.json',
            tabs: [
              {
                title: 'package.json',
                code: './examples/migration/new.package.example.json',
                language: 'json',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'extension-points',
      title: 'Update the extension points',
      sectionContent: `
Finally, the new format has a slightly different system for registering your extension target code. The file you list as the \`module\` for a given extension target **must** export your extension target code as the default export from the module.`,
      accordionContent: [
        {
          title: 'Previous code (JavaScript)',
          description: '',
          codeblock: {
            title: 'Previous index.ts',
            tabs: [
              {
                title: 'index.ts',
                code: './examples/migration/previous.extension.example.ts',
                language: 'ts',
              },
            ],
          },
        },
        {
          title: 'New code (JavaScript)',
          description: '',
          codeblock: {
            title: 'New index.ts',
            tabs: [
              {
                title: 'index.ts',
                code: './examples/migration/new.extension.example.ts',
                language: 'ts',
              },
            ],
          },
        },
        {
          title: 'Previous code (React)',
          description: '',
          codeblock: {
            title: 'Previous index.tsx',
            tabs: [
              {
                title: 'index.tsx',
                code: './examples/migration/previous.extension.example.tsx',
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'New code (React)',
          description: '',
          codeblock: {
            title: 'New index.tsx',
            tabs: [
              {
                title: 'index.tsx',
                code: './examples/migration/new.extension.example.tsx',
                language: 'tsx',
              },
            ],
          },
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'migrate',
      title: 'Migrate your extensions',
      sectionContent: `
Deploy after applying the above changes to get your extensions migrated.
> Note:
> You will need to update your \`@shopify/app\` and \`@shopify/cli\` packages to version \`3.48.0\` or later in order to migrate to the \`ui_extensions\` package types.
`,
      codeblock: {
        title: 'Deploy',
        tabs: [
          {
            title: 'Deploy',
            code: './examples/migration/migration-output.example.txt',
            language: 'plaintext',
          },
        ],
      },
    },
    {
      type: 'Markdown',
      anchorLink: 'extension-targets-list',
      title: 'Reference: extension point to extension target',
      sectionContent: `
Extension targets are more flexible and powerful than extension points and they allow to link UI extensions with functions.

| Extension point name  | Extension target name |
|---|---|
| Checkout::Actions::RenderBefore | purchase.checkout.actions.render-before |
| Checkout::CartLineDetails::RenderAfter | purchase.checkout.cart-line-item.render-after |
| Checkout::CartLines::RenderAfter | purchase.checkout.cart-line-list.render-after |
| Checkout::Contact::RenderAfter | purchase.checkout.contact.render-after |
| Checkout::DeliveryAddress::RenderBefore | purchase.checkout.delivery-address.render-before |
| Checkout::Dynamic::Render | purchase.checkout.block.render |
| Checkout::GiftCard::Render | purchase.checkout.gift-card.render |
| Checkout::OrderStatus::CartLineDetails::RenderAfter | customer-account.order-status.cart-line-item.render-after |
| Checkout::OrderStatus::CartLines::RenderAfter | customer-account.order-status.cart-line-list.render-after |
| Checkout::OrderStatus::Dynamic::Render | customer-account.order-status.block.render |
| Checkout::PickupLocations::RenderAfter | purchase.checkout.pickup-location-list.render-after |
| Checkout::PickupLocations::RenderBefore | purchase.checkout.pickup-location-list.render-before |
| Checkout::PickupPoints::RenderAfter | purchase.checkout.pickup-point-list.render-after |
| Checkout::PickupPoints::RenderBefore | purchase.checkout.pickup-point-list.render-before |
| Checkout::Reductions::RenderAfter | purchase.checkout.reductions.render-after |
| Checkout::Reductions::RenderBefore | purchase.checkout.reductions.render-before |
| Checkout::ShippingMethodDetails::RenderAfter | purchase.checkout.shipping-option-item.render-after |
| Checkout::ShippingMethodDetails::RenderExpanded | purchase.checkout.shipping-option-item.details.render |
| Checkout::ShippingMethods::RenderAfter | purchase.checkout.shipping-option-list.render-after |
| Checkout::ShippingMethods::RenderBefore | purchase.checkout.shipping-option-list.render-before |
| Checkout::ThankYou::CartLineDetails::RenderAfter | purchase.thank-you.cart-line-item.render-after |
| Checkout::ThankYou::CartLines::RenderAfter | purchase.thank-you.cart-line-list.render-after |
| Checkout::ThankYou::CustomerInformation::RenderAfter | purchase.thank-you.customer-information.render-after |
| Checkout::ThankYou::Dynamic::Render | purchase.thank-you.block.render |
`,
    },
  ],
};

export default data;
