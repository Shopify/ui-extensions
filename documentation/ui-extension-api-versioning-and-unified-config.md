# Introducing: API versioning and the unified extension configuration file

We’re introducing some important changes to the way you write UI extensions. As of Summer Editions 2023, we will be introducing a [new `shopify.extension.toml` file](https://shopify.dev/docs/apps/app-extensions/configuration). This file will be used to define the basic configuration for your UI extension, and it is the same format that you will use to define [Shopify Functions](https://shopify.dev/docs/apps/functions) and other types of extensions. In the future, we’ll use this new "unified" configuration file to give you more flexibility in combining extensions of different types to solve merchant problems.

Additionally, UI extensions now have the same [API versioning strategy](https://shopify.dev/api/usage/versioning) as Shopify Functions, and Shopify’s GraphQL API. New API versions will be released 4 times per year, in January, April, July, and October, and are referenced using identifiers like `2023-07` (July, 2023). Each API version is supported for one year, but Shopify always strives to build APIs that will be supported for much longer than that.

As part of our first API version, we are introducing one major breaking change for existing extensions: new names for the ["targets"](https://shopify.dev/docs/apps/app-extensions/configuration#targets) you use to define where your extension appears in Shopify. We are introducing these targets (previously referred to as "extension points") to improve consistency about how we talk about extensibility across Shopify, and we feel they are also a lot more understandable than our previous format. A mapping of legacy to new target names is included in the [migration guide below](#new-target-names).

If you already have a UI extension, you can continue to use the existing "unstable" API until July 2024, including the legacy target names. After that, you will need to migrate your extension to be versioned. New APIs will only be released for the versioned API, so we’d love to have you migrate as soon as possible.

## Migrating existing extensions to the unified format and API versioning

> **Note:** only [checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions) can be migrated to the new format at this time.

The main changes you will need to make will be to your configuration file (`shopify.ui.extension.toml`). First, rename this file to `shopify.extension.toml` — this file is no longer specific to UI extensions, and can contain multiple related extension configurations in a single file.

Next, We will be changing a few of the fields you currently use to configure a UI extension:

- All fields should be nested under a new `extensions` array at the top level of your configuration file. Your file can now contain multiple related extension definitions, each a new element in this `extensions` array.
- `type`, which currently is set to `checkout_ui_extension`, should be renamed to `ui_extension`. The new extension format will be used for UI extensions in more surfaces than just checkout.
- `extension_points`, which is currently a list of the extension point targets your extension can be embedded into, is renamed to `targeting` and expanded to include additional details. Most notably, you will need to provide a `module`, which is a reference to the file in your project that implements the extension.

There are also two new mandatory fields in your configuration file:

- `api_version`, which should be set at the root of your configuration file. This field must be a Shopify API version, in the same format you would use for [Shopify's REST and GraphQL APIs](https://shopify.dev/api/usage/versioning). This version will control what extension points, components, and APIs are available to your extension.
- `handle`, which should be set in the nested `extensions` level of your configuration file. This is a unique identifier for your extension, and will be used to reference it from other extensions in the future. We recommend using a "handleized" version of your extension’s name (for example, `my-extension` for an extension named "My Extension").

If you your extension configuration file had the following contents:

```toml
# extensions/my-extension/shopify.ui.extension.toml

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
```

To adopt the next extension format, you would change its contents to:

```toml
# extensions/my-extension/shopify.extension.toml

api_version = "2023-07"

[[extensions]]
type = "ui_extension"
name = "My Extension"
handle = "my-extension"

[[extensions.targeting]]
target = "purchase.checkout.block.render"
module = "./src/index.ts"

[[extensions.metafields]]
namespace = "my_namespace"
key = "my_key"

[extensions.settings]
[[extensions.settings.fields]]
key = "banner_title"
type = "single_line_text_field"
name = "Banner title"
description = "Enter a title for the banner"
```

In addition to the configuration changes, there are two code changes that will be required as well. We will be moving to a new set of packages for distributing UI extension APIs — `@shopify/checkout-ui-extensions` and `@shopify/checkout-ui-extensions-react` will be replaced with `@shopify/ui-extensions/checkout` and `@shopify/ui-extensions-react/checkout`. These new packages will allow you to implement extensions for multiple surfaces without requiring multiple dependencies. You'll need to update any import for the existing packages with the new package.

In your package.json, replace any `@shopify/checkout-ui-extension` package with the `@shopify/ui-extension` equivalent. If you are using React, you must install the same version range of both `@shopify/ui-extensions-react` and `@shopify/ui-extensions`.

```diff
{
  "dependencies": {
-    "@shopify/checkout-ui-extensions": "^0.27.0",
+    "@shopify/ui-extensions": "2023.7.x",
-    "@shopify/checkout-ui-extensions-react": "^0.27.0",
+    "@shopify/ui-extensions-react": "2023.7.x",
  }
}
```

You will notice that the UI extension packages have a new versioning system. In the new versions, the "major" version number is the API version year (e.g., `2023`), the "minor" version number is the API version month (e.g., `7` for `2023-07`), and the "patch" version number is reserved by Shopify for making bugfixes on the contents of the package. You will need to match the version of the package you install to the API version your extension targets, so that you get access to the types and runtime utilities associated with that API version. We recommend using a version that locks in the major and minor version numbers, and allows the patch version to be updated, like the `2023.7.x` version range shown above.

Lastly, the new format has a slightly different system for registering your code to the target defined in your `shopify.extension.toml` file. The file you list as the `module` for a given target **must** export your extension point code as the default export from the module.

A basic extension today looks like this:

```tsx
import {extend, Banner} from '@shopify/checkout-ui-extensions';

extend('Checkout::Dynamic::Render', (root, {extensionPoint, i18n}) => {
  root.appendChild(
    root.createComponent(
      Banner,
      {title: 'My extension'},
      i18n.translate('welcome', {target: extensionPoint}),
    ),
  );
});
```

After the change, it will instead look like this:

```tsx
import {extension, Banner} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {extension, i18n}) => {
    root.appendChild(
      root.createComponent(
        Banner,
        {title: 'My extension'},
        i18n.translate('welcome', {target: extension.target}),
      ),
    );
  },
);
```

If you use React, the new format will be a similarly minor change, compared to the code you write today:

```tsx
import {
  useApi,
  render,
  Banner,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  const translate = useTranslate();
  const {extensionPoint} = useApi();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {target: extensionPoint})}
    </Banner>
  );
}

// Becomes:

import {
  reactExtension,
  useApi,
  Banner,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  const translate = useTranslate();
  const {extension} = useApi();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {target: extension.target})}
    </Banner>
  );
}
```

## New target names

The following table shows the mapping of legacy target names to the new target names:

| Legacy target name                                      | New target name                                                 |
| ------------------------------------------------------- | --------------------------------------------------------------- |
| Checkout::Actions::RenderBefore                         | purchase.checkout.actions.render-before                         |
| Checkout::CartLineDetails::RenderAfter                  | purchase.checkout.cart-line-item.render-after                   |
| Checkout::CartLineDetails::RenderLineComponents         | purchase.cart-line-item.line-components.render                  |
| Checkout::CartLines::RenderAfter                        | purchase.checkout.cart-line-list.render-after                   |
| Checkout::Contact::RenderAfter                          | purchase.checkout.contact.render-after                          |
| Checkout::CustomerInformation::RenderAfter              | purchase.thank-you.customer-information.render-after            |
| Checkout::DeliveryAddress::RenderBefore                 | purchase.checkout.delivery-address.render-before                |
| Checkout::Dynamic::Render                               | purchase.checkout.block.render                                  |
| Checkout::GiftCard::Render                              | purchase.checkout.gift-card.render                              |
| Checkout::OrderStatus::CartLineDetails::RenderAfter     | customer-account.order-status.cart-line-item.render-after       |
| Checkout::OrderStatus::CartLines::RenderAfter           | customer-account.order-status.cart-line-list.render-after       |
| Checkout::OrderStatus::CustomerInformation::RenderAfter | customer-account.order-status.customer-information.render-after |
| Checkout::OrderStatus::Dynamic::Render                  | customer-account.order-status.block.render                      |
| Checkout::PaymentMethod::Render                         | purchase.checkout.payment-option-item.details.render            |
| Checkout::PaymentMethod::RenderRequiredAction           | purchase.checkout.payment-option-item.action-required.render    |
| Checkout::PickupLocations::RenderAfter                  | purchase.checkout.pickup-location-list.render-after             |
| Checkout::PickupLocations::RenderBefore                 | purchase.checkout.pickup-location-list.render-before            |
| Checkout::PickupPoints::RenderAfter                     | purchase.checkout.pickup-point-list.render-after                |
| Checkout::PickupPoints::RenderBefore                    | purchase.checkout.pickup-point-list.render-before               |
| Checkout::Reductions::RenderAfter                       | purchase.checkout.reductions.render-after                       |
| Checkout::Reductions::RenderBefore                      | purchase.checkout.reductions.render-before                      |
| Checkout::ShippingMethodDetails::RenderAfter            | purchase.checkout.shipping-option-item.render-after             |
| Checkout::ShippingMethodDetails::RenderExpanded         | purchase.checkout.shipping-option-item.details.render           |
| Checkout::ShippingMethods::RenderAfter                  | purchase.checkout.shipping-option-list.render-after             |
| Checkout::ShippingMethods::RenderBefore                 | purchase.checkout.shipping-option-list.render-before            |
| Checkout::ThankYou::CartLineDetails::RenderAfter        | purchase.thank-you.cart-line-item.render-after                  |
| Checkout::ThankYou::CartLines::RenderAfter              | purchase.thank-you.cart-line-list.render-after                  |
| Checkout::ThankYou::CustomerInformation::RenderAfter    | purchase.thank-you.customer-information.render-after            |
| Checkout::ThankYou::Dynamic::Render                     | purchase.thank-you.block.render                                 |

> **Note:** the targets starting with `customer-account.order-status.` are the new names for Order Status page extensions, and should be imported from `@shopify/ui-extensions/customer-account` instead of `@shopify/ui-extensions/checkout`.

Make sure you update the target name both in your extension configuration file (with the `extensions.targeting.target` field) and in your extension’s source code.
