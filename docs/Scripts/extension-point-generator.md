# Extension Point Generator

The purpose of this document is to explain what happens under the hood when you run:

```bash
yarn run new-extension-point
```

## What is an extension-point in the context of Argo Admin?

Conceptually, an **extension point** is a point within a Shopify host where a developer can expose a custom app extension. Many different applications work together to make this happen. For the purpose of this library, we define an extension point as a collection of APIs and callbacks (types and interfaces) that are exposed to the host application.

## New Files and Updates

The `new-extension-point` script creates and updates a number of files. These are:

- Component schema types and the extension point schema...

  - `argo-admin/src/component-schemas/schema-types.ts`
    - A new type is generated based on the **name** that is passed into the script prompt
    - The type is generated with an `any` definition -- the developer will need to add properties to make the type useful
    - If the type already exists (even if it is used on a different page) an new type definition will not be created
  - `argo-admin/src/component-schemas/extension-point-schema.ts`
    - If the schema type from `schema-types.ts` has not yet been imported into this file, the script will add it to the import statement
    - A new property will be added to the schema using the extension point ID (a concatonation of the host, page, and extension point name, eg. 'Admin::CustomerDetails::PrimaryCard') as the key and the schema type as the value

- APIs and callback interfaces specific to the new extension point...

  Several files live in a "page" folder (eg. customer-details, customer-list, product-details, product-list, order-details, order-list, something-custom, etc.). If the folder and files already exist for a specific page, then the script will update these files. Otherwise it will create a new folder and three new files.

  - `argo-admin/src/extension-points/<some-page>/api.ts`
    - This defines an API for the new extension point
    - It starts with an intersection type of `StandardApi`, `ToastApi`, and `DataApi`, but the developer should modify this type for their needs
  - `argo-admin/src/extension-points/<some-page>/callback.ts`
    - This uses the extension point API interface to define a callback interface for the extension point
  - `argo-admin/src/extension-points/<some-page>/index.ts`
    - This just exports the api and callback

- Shared extension point files...

  In the root of the `extension-points` directory, the script will make some additional changes to merge the definitions from all the individual extension points.

  - `argo-admin/src/extension-points/extension-api.ts`
    - The newly defined ExtensionAPI is imported and added to the list that `ExtensionApi` extends from
  - `argo-admin/src/extension-points/extension-point.ts`
    - The extension point ID is added as a permitted value in the `ExtensionPoint` type
  - `argo-admin/src/extension-points/extension-point-callback.ts`
    - The newly defined ExtensionPointCallback is imported and added to the list that `ExtensionPointCallback` extends from
