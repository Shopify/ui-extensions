# Extension Point Generator

The purpose of this document is to explain what happens under the hood when you run:

```bash
yarn run new-extension-point
```

## What is an extension-point in the context of Argo Admin?

Conceptually, an **extension point** is a point within a Shopify host where a developer can expose a custom app extension. Many different applications work together to make this happen. For the purpose of this library, we define an extension point as a collection of APIs and callbacks (types and interfaces) that are exposed to the host application.

Each extension point is tied to an extension identifier and multiple points can exist for a single extension identifier. For example, `product_subscription` defines the following extension points:
  - 'Admin::Product::SubscriptionPlan::Add'
  - 'Admin::Product::SubscriptionPlan::Create'
  - 'Admin::Product::SubscriptionPlan::Edit'
  - 'Admin::Product::SubscriptionPlan::Remove'

## New Files and Updates

The `new-extension-point` script creates and updates a number of files. These are:

- New file: `argo-admin/src/extension-points/identifiers/<extension_identifier>.ts`
This file contains interfaces specific to the new extension point
  - `<ExtensionIdentifierInCamelCase>ExtensionPoint = 'Admin::<page>::ExtensionIdentifierInCamelCase`
    - This is a union string of unique extension points. The string is automatically generated based the identifier and the page the developer has chosen to make the extension available. This can be modified as needed. Multiple extension points can be defined for a given extension identifier.
  - `<ExtensionIdentifierInCamelCase>ExtensionApi`
     - This us the interface for the API provided to the extension point. All extension points should include `StandardApi` at the minimum, but the developer should modify this type for their needs. If the extension requires `Data` or `Container`, these interfaces should be defined.
  - `<ExtensionIdentifierInCamelCase>ExtensionPointCallback`
     - Defines the render call back interface for the extension point using the generic `RenderableExtensionCallback` interface
     - By default, the available components for the Remote Root is set to be `AllComponentsSchema`, which contains all possible components. This should be modified to reflect the components that will actually be available for the extension point. We have a few shared schemas defined for the available Argo containers in this file `argo-admin/src/containers/index.ts` which can be used as a starting point.

- Shared extension points index `argo-admin/src/extension-points/index.ts`

  The script will make some additional changes to merge the definitions from all the individual extension points.

  - `ExtensionPoint`
    - The newly defined `<ExtensionIdentifierInCamelCase>ExtensionPoint` is imported and added to the union string
  - `ExtensionApi`= PlaygroundExtensionApi & ProductSubscriptionExtensionApi;
    - The newly defined `<ExtensionIdentifierInCamelCase>ExtensionApi` is imported and added to the intersection type
  - `ExtensionPointCallback`= PlaygroundExtensionApi & ProductSubscriptionExtensionApi;
    - The newly defined `<ExtensionIdentifierInCamelCase>ExtensionPointCallback` is imported and added to the intersection type