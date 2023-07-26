import {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  title: 'API versioning and unified UI extensions',
  description: `
As of Summer Editions 2023 (July 26), we have introduced some important changes to checkout UI extensions:

- The introduction of API versioning and the [associated API versioning strategy](/docs/api/usage/versioning)
- Changes to the configuration \`toml\` file that match the format for other app extensions
- \`extension points\` have been renamed to \`targets\`

For more details on the above, [please visit our post on the ui-extensions public repository](https://github.com/Shopify/ui-extensions/discussions/1149)
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
- a new mandatory field: \`api_version\`. This field must be a Shopify API version, in the same format you would use for [Shopify's REST and GraphQL APIs](https://shopify.dev/api/usage/versioning). This version will control what extension points, components, and APIs are available to your extension, and will come with the same 1 year (minimum) guarantee as our other APIs. The first public API version for checkout UI extensions will be \`2023-07\`
- \`handle\`, which should be set in the nested \`extensions\` level of your configuration file. This is a unique identifier for your extension, and will be used to reference it from other extensions. We recommend using dash casing for the handle (for example, \`my-extension\` for an extension named "My extension")
- \`shopify.ui.extension.toml\` is now \`shopify.extension.toml\`
`,
    },
    {
      type: 'GenericAccordion',
      anchorLink: 'converting-the-extension-configuration-file',
      title: 'Update the configuration file',
      sectionContent: `
First rename your \`shopify.ui.extension.toml\` file to \`shopify.extension.toml\`.

Then update the extension configuration file to the new format.
`,
      accordionContent: [
        {
          title: 'Old shopify.extension.toml',
          description: '',
          codeblock: {
            title: 'shopify.extension.toml',
            tabs: [
              {
                title: 'shopify.extension.toml',
                code: `
type = "checkout_ui_extension"
name = "My Extension"

extension_points = [
  'Checkout::Dynamic::Render'
]

[[metafields]]
namespace = "my_namespace"
key = "my_key"

[settings]
[[settings.fields]]
key = "banner_title"
type = "single_line_text_field"
name = "Banner title"
description = "Enter a title for the banner"

`,
                language: 'toml',
              },
            ],
          },
        },
        {
          title: 'New shopify.extension.toml',
          description: '',
          codeblock: {
            title: 'shopify.extension.toml',
            tabs: [
              {
                title: 'shopify.extension.toml',
                code: `
api_version = "2023-07"

[[extensions]]
type = "ui_extension"
name = "My Extension"
handle = "my-extension"

[[extensions.targeting]]
module =  "./src/index.ts"
target = "purchase.checkout.block.render"

[[extensions.metafields]]
namespace = "my_namespace"
key = "my_key"

[extensions.settings]
[[extensions.settings.fields]]
key = "banner_title"
type = "single_line_text_field"
name = "Banner title"
description = "Enter a title for the banner"

`,
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

In your \`package.json\`, replace any \`@shopify/checkout-ui-extension\` package with the \`@shopify/ui-extension\` equivalent.

You will notice that the UI extension packages have a new versioning system. In the new versions, the "major" version number is the API version year (e.g., \`2023\`), the "minor" version number is the API version month (e.g., \`07\` for \`2023.07\`), and the "patch" version number is reserved by Shopify for making bugfixes on the contents of the package (e.g. \`.1\` for \`2023.07.1\`). You will need to match the version of the package you install to the API version your extension targets, so that you get access to the types and runtime utilities associated with that API version. We recommend using a version that locks in the major and minor version numbers, and allows the patch version to be updated, like the \`2023.7.x\` version range shown above.

> Caution:
> The \`2023.7.x\` version range has a couple breaking changes compared to the \`0.27.x\` range of the \`@shopify/checkout-ui-extensions(-react)\` packages. If you want to upgrade to the new API versioning system, but continue to use the APIs you were using before without any changes, we also provide a \`2023.4.x\` version range that contains the same APIs as the \`0.27.x\` range of the old packages.
`,
      accordionContent: [
        {
          title: 'Old package.json',
          description: '',
          codeblock: {
            title: 'package.json',
            tabs: [
              {
                title: 'package.json',
                code: `
{
  "dependencies": {
    "@shopify/checkout-ui-extensions": "^0.27.0",
    "@shopify/checkout-ui-extensions-react": "^0.27.0",
  }
}
`,
                language: 'json',
              },
            ],
          },
        },
        {
          title: 'New package.json',
          description: '',
          codeblock: {
            title: 'package.json',
            tabs: [
              {
                title: 'package.json',
                code: `
{
  "dependencies": {
    "@shopify/ui-extensions": "2023.7.x",
    "@shopify/ui-extensions-react": "2023.7.x",
  }
}
`,
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
Finally, the new format has a slightly different system for registering your extension point code. The file you list as the \`module\` for a given extension point **must** export your extension point code as the default export from the module.`,
      accordionContent: [
        {
          title: 'Old extension code (plain)',
          description: '',
          codeblock: {
            title: 'index.ts',
            tabs: [
              {
                title: 'index.ts',
                code: `
import {extend, Banner} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root, {extensionPoint, i18n}) => {
  root.appendChild(
    root.createComponent(
      Banner,
      {title: 'My extension'},
      i18n.translate('welcome', {extensionPoint}),
    ),
  );
});
`,
                language: 'ts',
              },
            ],
          },
        },
        {
          title: 'New extension code (plain)',
          description: '',
          codeblock: {
            title: 'index.ts',
            tabs: [
              {
                title: 'index.ts',
                code: `
import {extension, Banner} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {extension:{target}, i18n}) => {
    root.appendChild(
      root.createComponent(
        Banner,
        {title: 'My extension'},
        i18n.translate('welcome', {target}),
      ),
    );
  },
);
`,
                language: 'ts',
              },
            ],
          },
        },
        {
          title: 'Old extension code (React)',
          description: '',
          codeblock: {
            title: 'index.tsx',
            tabs: [
              {
                title: 'index.tsx',
                code: `
import {
  useApi,
  render,
  Banner,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => (
  <App />
));

function App() {
  const {extensionPoint} = useApi();
  const translate = useTranslate();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {extensionPoint})}
    </Banner>
  );
}
`,
                language: 'tsx',
              },
            ],
          },
        },
        {
          title: 'New extension code (React)',
          description: '',
          codeblock: {
            title: 'index.tsx',
            tabs: [
              {
                title: 'index.tsx',
                code: `
import {
  reactExtension,
  useApi,
  Banner,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <App />,
);

function App() {
  const {extension:{target}} = useApi();
  const translate = useTranslate();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {target})}
    </Banner>
  );
}
`,
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
      sectionContent:
        'Deploy after applying the above changes to get your extensions migrated.',
      codeblock: {
        title: 'Deploy',
        tabs: [
          {
            title: 'Deploy',
            code: './examples/migration/migration-output.txt',
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
| Checkout::CartLineDetails::RenderLineComponents | purchase.cart-line-item.line-components.render |
| Checkout::CartLines::RenderAfter | purchase.checkout.cart-line-list.render-after |
| Checkout::Contact::RenderAfter | purchase.checkout.contact.render-after |
| Checkout::DeliveryAddress::RenderBefore | purchase.checkout.delivery-address.render-before |
| Checkout::Dynamic::Render | purchase.checkout.block.render |
| Checkout::GiftCard::Render | purchase.checkout.gift-card.render |
| Checkout::OrderStatus::CartLineDetails::RenderAfter | customer-account.order-details.cart-line-item.render-after |
| Checkout::OrderStatus::CartLines::RenderAfter | customer-account.order-index.action.render |
| Checkout::OrderStatus::Dynamic::Render | customer-account.order-details.block.render |
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
| Checkout::ThankYou::CustomerInformation::RenderAfter | purchase.thank-you.contact-information.render-after |
| Checkout::ThankYou::Dynamic::Render | purchase.thank-you.block.render |
`,
    },
  ],
};

export default data;
