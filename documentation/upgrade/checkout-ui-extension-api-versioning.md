# Introducing: API versioning

Hey folks! I wanted to give you a preview of a few changes we will be making as part of introducing our first public API version for Checkout UI Extensions. These changes will be shipped early next year, and the code changes you’ll need to make are pretty minimal. If you’re busy when this launches, you will also be able to continue publishing existing extensions, **without any changes**, for the foreseeable future.

The main changes you will need to make will be to your configuration file (`shopify.ui.extension.toml`). We will be changing a few of the fields you currently use to configure a UI extension:

- `type`, which currently is hardcoded to `checkout_ui_extension`, can be removed. The new extension format will be used for UI extensions in more surfaces than just checkout.
- `extension_points`, which is currently a list of the extension point targets your extension can be embedded into, is expanded to include additional details. Most notably, you will need to provide a `module`, which is a reference to the file in your project that implements the extension. `metafields` that you will query must also now be specified per-extension point.

We will also be adding a new mandatory field: `api_version`. This field must be a Shopify API version, in the same format you would use for [Shopify's REST and GraphQL APIs](https://shopify.dev/api/usage/versioning). This version will control what extension points, components, and APIs are available to your extension, and will come with the same 1 year (minimum) guarantee as our other APIs. The first public API version for checkout UI extensions will be `2023-01`.

If you your extension configuration file had the following contents:

```toml
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
name = "My Extension"
api_version = "2023-01"

[[extension_points]]
target = "Checkout::Dynamic::Render"
module = "./src/index.ts"

  [[extension_points.metafields]]
  namespace = "my_namespace"
  key = "my_key"

[settings]
  [[settings.fields]]
  key = "banner_title"
  type = "single_line_text_field"
  name = "Banner title"
  description = "Enter a title for the banner"
```

In addition to the configuration changes, there are two code changes that will be required as well. We will be moving to a new set of packages for distributing UI extension APIs — `@shopify/checkout-ui-extensions` and `@shopify/checkout-ui-extensions-react` will be replaced with `@shopify/ui-extensions/checkout` and `@shopify/ui-extensions-react/checkout`. These new packages will allow you to implement extensions for multiple surfaces without requiring multiple dependencies. You'll need to update any import for the existing packages with the new package.

In your package.json, replace any `@shopify/checkout-ui-extension` package with the `@shopify/ui-extension` equivalent:

```diff
{
  "dependencies": {
-    "@shopify/checkout-ui-extensions": "^0.22.0",
+    "@shopify/ui-extensions": "2023.1.x",
-    "@shopify/checkout-ui-extensions-react": "^0.22.0",
+    "@shopify/ui-extensions-react": "2023.1.x",
  }
}
```

You will notice that the UI extension packages have a new versioning system. In the new versions, the "major" version number is the API version year (e.g., `2023`), the "minor" version number is the API version month (e.g., `1` for `2023-01`), and the "patch" version number is reserved by Shopify for making bugfixes on the contents of the package. You will need to match the version of the package you install to the API version your extension targets, so that you get access to the types and runtime utilities associated with that API version. We recommend using a version that locks in the major and minor version numbers, and allows the patch version to be updated, like the `2023.1.x` version range shown above.

> **Note:** The `2023.1.x` version range has a couple breaking changes compared to the `0.22.x` range of the `@shopify/checkout-ui-extensions(-react)` packages. The most notable change is related to how you read and items with multiple sub-lines. A guide for this change will be written and linked here. If you want to upgrade to the new API versioning system, but continue to use the APIs you were using before without any changes, we also provide a `2022.10.x` version range that contains the same APIs as the `0.22.x` range of the old packages.

Finally, the new format has a slightly different system for registering your extension point code. The file you list as the `module` for a given extension point **must** export your extension point code as the default export from the module.

A basic extension today looks like this:

```tsx
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
```

After the change, it will instead look like this:

```tsx
import {extension, Banner} from '@shopify/ui-extensions/checkout';

export default extension(
  'Checkout::Dynamic::Render',
  (root, {extensionPoint, i18n}) => {
    root.appendChild(
      root.createComponent(
        Banner,
        {title: 'My extension'},
        i18n.translate('welcome', {extensionPoint}),
      ),
    );
  },
);
```

If you use React, the new format will be a similarly minor change, compared to the code you write today:

```tsx
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  const {extensionPoint} = useExtensionApi();
  const translate = useTranslate();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {extensionPoint})}
    </Banner>
  );
}

// Becomes:

import {
  reactExtension,
  useExtensionApi,
  Banner,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  const {extensionPoint} = useExtensionApi();
  const translate = useTranslate();

  return (
    <Banner title="luxury-trade-ext">
      {translate('welcome', {extensionPoint})}
    </Banner>
  );
}
```

These changes are small, but they are not just cosmetic. We are making these changes now so that:

- We have a flexible UI extension authoring format that can support extension points not just in Checkout, but also in other areas of Shopify like the Admin
- We have an easier path towards optimizing the build outputs for UI extensions

If you have any questions or concerns, please feel free to post them here!
