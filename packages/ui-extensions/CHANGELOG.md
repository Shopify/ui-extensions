# @shopify/ui-extensions

## 2024.1.3

### Patch Changes

- [#2109](https://github.com/Shopify/ui-extensions/pull/2109) [`a92f4ab22`](https://github.com/Shopify/ui-extensions/commit/a92f4ab22d3c734555d32026e110a123d60f8a8c) Thanks [@oliverigor](https://github.com/oliverigor)! - ScrollView scrollTo docs changes, image source docs changes

## 2024.1.2

### Patch Changes

- [#1944](https://github.com/Shopify/ui-extensions/pull/1944) [`97bebf8b`](https://github.com/Shopify/ui-extensions/commit/97bebf8be714f8f11b08739859b1d3c75841b2fd) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Improve error messaging when a React hook is used from a different API surface than the extension calling it.

## 2024.1.1

### Patch Changes

- [#1653](https://github.com/Shopify/ui-extensions/pull/1653) [`6571d446`](https://github.com/Shopify/ui-extensions/commit/6571d446c76a9f5bae2c6b7f0fd1ea505dcd4eaf) Thanks [@oliverigor](https://github.com/oliverigor)! - Add docs fixes for the conditional style Style type

- [#1664](https://github.com/Shopify/ui-extensions/pull/1664) [`6cdfdc36`](https://github.com/Shopify/ui-extensions/commit/6cdfdc3645492949cfed9f7ce7bb6899d8899085) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Adds 2024-01 as a valid `ApiVersion` type value.

## 2024.1.0

### Major Changes

- [#1585](https://github.com/Shopify/ui-extensions/pull/1585) [`70f9bdc1`](https://github.com/Shopify/ui-extensions/commit/70f9bdc1bd0a4caf3d6b0d7033dcef0a012b3f90) Thanks [@jamesvidler](https://github.com/jamesvidler)! - The `purchase.checkout.shipping-option-list.render-before` and `purchase.checkout.shipping-option-list.render-after` will be duplicated for possible types of delivery groups (One Time Purchase and Subscription).
  You can use the new `target` or `useDeliveryGroupTarget()` React hook to access the delivery group the extension is attached to.

### Minor Changes

- [#1515](https://github.com/Shopify/ui-extensions/pull/1515) [`2452a939`](https://github.com/Shopify/ui-extensions/commit/2452a939e84c1a13ef1a107360419edee6c3a1d9) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds custom header and footer unified extension targets for checkout and thank you pages

- [#1472](https://github.com/Shopify/ui-extensions/pull/1472) [`9c836557`](https://github.com/Shopify/ui-extensions/commit/9c836557d97f08496bb073a11a0fb209eb176f5f) Thanks [@sirgalleto](https://github.com/sirgalleto)! - Add order routing extension targets and API

- [#1437](https://github.com/Shopify/ui-extensions/pull/1437) [`6de2fce0`](https://github.com/Shopify/ui-extensions/commit/6de2fce01bc32174089f91aafd870877a878a6eb) Thanks [@shopi-dori](https://github.com/shopi-dori)! - Adds the `bankIdNumber` to the `PaymentOptionItemApi`.
  Adds `background` to `View`, `Grid`, `GridItem`, `Pressable`, `ScrollView`, `InlineStack`, and `BlockStack` components.

- [#1424](https://github.com/Shopify/ui-extensions/pull/1424) [`9a8dda8c`](https://github.com/Shopify/ui-extensions/commit/9a8dda8c9332d5ed24fa020f6b03106e2da14e9c) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add Badge component to admin

- [#1428](https://github.com/Shopify/ui-extensions/pull/1428) [`9cd7d6f9`](https://github.com/Shopify/ui-extensions/commit/9cd7d6f9977683456399aed34f730adeecf98443) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add Banner component to admin

- [#1430](https://github.com/Shopify/ui-extensions/pull/1430) [`0a8b378a`](https://github.com/Shopify/ui-extensions/commit/0a8b378aac8ecc98c9b2d8b4142618aa50082663) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add ChoiceList to admin

- [#1625](https://github.com/Shopify/ui-extensions/pull/1625) [`29625d18`](https://github.com/Shopify/ui-extensions/commit/29625d18c269b1cb0e9ffe0b890c466d4a6901a8) Thanks [@billfienberg](https://github.com/billfienberg)! - Add ColorPicker remote component

- [#1431](https://github.com/Shopify/ui-extensions/pull/1431) [`8f82c578`](https://github.com/Shopify/ui-extensions/commit/8f82c5784944ed63d20a02859561d6655257edc2) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add ProgressIndicator to admin

### Patch Changes

- [#1601](https://github.com/Shopify/ui-extensions/pull/1601) [`ccbb2353`](https://github.com/Shopify/ui-extensions/commit/ccbb235377cb5c725832726abca99b1bc2f52a7b) Thanks [@belalsj](https://github.com/belalsj)! - Update Button and Text with interestTarget API

- [#1503](https://github.com/Shopify/ui-extensions/pull/1503) [`f4268b21`](https://github.com/Shopify/ui-extensions/commit/f4268b216c4ba75728c75a239b35354ab467dd6c) Thanks [@anahita-m](https://github.com/anahita-m)! - Removing legacy customer account extension targets

- [#1473](https://github.com/Shopify/ui-extensions/pull/1473) [`903a62c7`](https://github.com/Shopify/ui-extensions/commit/903a62c7db9f2bf980c44f358445991864f644e6) Thanks [@mikewilson01](https://github.com/mikewilson01)! - Add additional props to LWS component

- [#1401](https://github.com/Shopify/ui-extensions/pull/1401) [`0f0e410d`](https://github.com/Shopify/ui-extensions/commit/0f0e410d1b1c8a787a45227c86b256131031a114) Thanks [@JoshuaWhite1](https://github.com/JoshuaWhite1)! - Added details about title/summary truncation to docs

- [#1448](https://github.com/Shopify/ui-extensions/pull/1448) [`be9465df`](https://github.com/Shopify/ui-extensions/commit/be9465df3f58c3fd439b6bbb9424c7caf0bafb7e) Thanks [@robin-drexler](https://github.com/robin-drexler)! - add previously internal customer account apis to unstable

- [#1458](https://github.com/Shopify/ui-extensions/pull/1458) [`1fb524f6`](https://github.com/Shopify/ui-extensions/commit/1fb524f695f65541df0b9dbec93e0b8b5c65386c) Thanks [@robin-drexler](https://github.com/robin-drexler)! - fix policy modal handling

- [#1434](https://github.com/Shopify/ui-extensions/pull/1434) [`b45e1b7f`](https://github.com/Shopify/ui-extensions/commit/b45e1b7f5d1642a0eb8f3d9055d541dc8dda2f13) Thanks [@mikewilson01](https://github.com/mikewilson01)! - Add onStatusChange callback to LoginWithShop component

- [#1466](https://github.com/Shopify/ui-extensions/pull/1466) [`e53621b6`](https://github.com/Shopify/ui-extensions/commit/e53621b6457f68331d7c6b175b078627ef3fa7ea) Thanks [@mikewilson01](https://github.com/mikewilson01)! - Update props for LoginWithShop component

- [#1496](https://github.com/Shopify/ui-extensions/pull/1496) [`bb30cc52`](https://github.com/Shopify/ui-extensions/commit/bb30cc52550b1e973ef8560b3f742c3c5c6c9b3f) Thanks [@brianshen1990](https://github.com/brianshen1990)! - remove deprecated fields from doc in customer account ui extensions

- [#1569](https://github.com/Shopify/ui-extensions/pull/1569) [`cbc51b33`](https://github.com/Shopify/ui-extensions/commit/cbc51b33d376370bff9f4dc980e66b495f5fcfaa) Thanks [@oluwatimio](https://github.com/oluwatimio)! - Remove customer account location api

- [#1598](https://github.com/Shopify/ui-extensions/pull/1598) [`345ed9a0`](https://github.com/Shopify/ui-extensions/commit/345ed9a00d3fb1d9f35be4e92dcf022d29794aba) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Deprecate summary prop for AdminBlock

## 2023.10.0

### Minor Changes

- [#1296](https://github.com/Shopify/ui-extensions/pull/1296) [`a8e16322`](https://github.com/Shopify/ui-extensions/commit/a8e16322b367c4efd079d8e69331bd234bedb0c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Bump `@remote-ui/core` version.

- [#1340](https://github.com/Shopify/ui-extensions/pull/1340) [`a7ea6cb0`](https://github.com/Shopify/ui-extensions/commit/a7ea6cb06c3838228bfeefa94d4826b747720ad3) Thanks [@lsit](https://github.com/lsit)! - Add PaymentIcon component to the checkout surface

- [#1351](https://github.com/Shopify/ui-extensions/pull/1351) [`8df8429b`](https://github.com/Shopify/ui-extensions/commit/8df8429b69c3bdec736d0885c922be1db2c4c5fe) Thanks [@jkeohan](https://github.com/jkeohan)! - Add ProductThumbnail component to the checkout surface

- [#1397](https://github.com/Shopify/ui-extensions/pull/1397) [`198d0848`](https://github.com/Shopify/ui-extensions/commit/198d08481470776f547e26f70fbc8b9836da3e6d) Thanks [@jamesvidler](https://github.com/jamesvidler)! - New `ConsentCheckbox` and `ConsentPhoneField` components which allow extensions to render their own consent UI, supporting the "sms-marketing" policy.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`3437fc05`](https://github.com/Shopify/ui-extensions/commit/3437fc050df2d7ee1d95a75084804ad0f47a70e3) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds `purchase.checkout.payment-method-list.render-before` and `purchase.checkout.payment-method-list.render-after` extension targets, rendered above and below the payment method list.

- [#1281](https://github.com/Shopify/ui-extensions/pull/1281) [`d539b687`](https://github.com/Shopify/ui-extensions/commit/d539b68792ab3068c2ddd89ae8a2077cc1ddcc56) Thanks [@elanalynn](https://github.com/elanalynn)! - Add download and target props to ButtonAnchorProps in admin

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds useCartlineTarget API and deprecates useTarget API.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`1dd9abf0`](https://github.com/Shopify/ui-extensions/commit/1dd9abf0faf5b63c9b6c341608fc53a8207f485d) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Storage API stored data is now shared between all activated extension targets of the extension.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Includes masked identifier when submitting custom redeemable data.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Provides payment attributes to checkout extension.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds support for decorative color in Text and TextBlock components.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`7a65c283`](https://github.com/Shopify/ui-extensions/commit/7a65c2836aa91ac3e6e225d8476b2c44baae87fb) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds the `purchase.checkout.delivery-address.render-after` static extension target which is rendered after the shipping address form elements.

- [#1315](https://github.com/Shopify/ui-extensions/pull/1315) [`22f71433`](https://github.com/Shopify/ui-extensions/commit/22f71433069b4cc1d4a322dad8dc6ecb70959ea8) Thanks [@dnagoda](https://github.com/dnagoda)! - # Add checkoutToken Api

  Extensions now have access to the checkout token (a stable id used to identify the checkout) directly through the standard api. The checkout token will match:

  - **token** field in [WebPixel checkout payload](https://shopify.dev/docs/api/pixels/customer-events#checkout).
  - **checkout_token** in the [Admin REST Api Order resource](https://shopify.dev/docs/api/admin-rest/unstable/resources/order#resource-object)

### Patch Changes

- [#1361](https://github.com/Shopify/ui-extensions/pull/1361) [`82ba4be1`](https://github.com/Shopify/ui-extensions/commit/82ba4be1efd0745ebd14ef10db4c54badba8c9f6) Thanks [@lauramann](https://github.com/lauramann)! - Adds b2bEnabled enabledFeature on CustomerSegmentTemplateApi

- [#1286](https://github.com/Shopify/ui-extensions/pull/1286) [`d0bd64d2`](https://github.com/Shopify/ui-extensions/commit/d0bd64d27f4cb41c31ef174393029d841a744ce3) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Add exports for InternalCustomerSegmentTemplate categories and icons

- [#1274](https://github.com/Shopify/ui-extensions/pull/1274) [`e198e10a`](https://github.com/Shopify/ui-extensions/commit/e198e10a99fc3da52d37822959db94105f04987f) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Update CustomerSegmentTemplate prop names

- [#1316](https://github.com/Shopify/ui-extensions/pull/1316) [`0905d719`](https://github.com/Shopify/ui-extensions/commit/0905d7193344c28fc9d346c2f7df873f23856671) Thanks [@lihaokx](https://github.com/lihaokx)! - 1. Rename point to target; 2. Update extension target names; 3, Add new types

- [#1403](https://github.com/Shopify/ui-extensions/pull/1403) [`1de5d9cf`](https://github.com/Shopify/ui-extensions/commit/1de5d9cf7c14f1f7220be4af8c8b35561ee862b8) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Supports improvements for new checkout extensibility docs IA. Organizes docs by targets, and groups APIs.

- [#1275](https://github.com/Shopify/ui-extensions/pull/1275) [`f4d0ea17`](https://github.com/Shopify/ui-extensions/commit/f4d0ea1754f132337536e1154a4ea4ed7d1fefde) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Expose CustomerSegmentTemplate category and icon types

- [#1074](https://github.com/Shopify/ui-extensions/pull/1074) [`3e60fb40`](https://github.com/Shopify/ui-extensions/commit/3e60fb402fdec6c624e85d925cffa955faadf6c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Rename components with Admin prefix

- [#1343](https://github.com/Shopify/ui-extensions/pull/1343) [`fa561eed`](https://github.com/Shopify/ui-extensions/commit/fa561eed6071fc7e8308e7fecf589b60093cafe4) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Update docs for action extension GA

- [#1294](https://github.com/Shopify/ui-extensions/pull/1294) [`1dd7a197`](https://github.com/Shopify/ui-extensions/commit/1dd7a1975cf23522f667fe19d1261b761726a252) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Remove CustomerSegmentationTemplate and deprecated prop names

- [#1283](https://github.com/Shopify/ui-extensions/pull/1283) [`8a9917b2`](https://github.com/Shopify/ui-extensions/commit/8a9917b247068178dba339bfa4fbfb91efc2fe0c) Thanks [@lihaokx](https://github.com/lihaokx)! - Move customer account ui extension from main to unstable branch.

- [#1289](https://github.com/Shopify/ui-extensions/pull/1289) [`1be8d871`](https://github.com/Shopify/ui-extensions/commit/1be8d871a284967c7f9860a2321666b6f416c57f) Thanks [@lauramann](https://github.com/lauramann)! - Adds extension target for segment details

- [#1279](https://github.com/Shopify/ui-extensions/pull/1279) [`f537b081`](https://github.com/Shopify/ui-extensions/commit/f537b0814d3fcf0605396e9453a95ad4b58fcd2a) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Introduces InternalCustomerSegmentTemplate component

## 2023.7.2

### Patch Changes

- [#1267](https://github.com/Shopify/ui-extensions/pull/1267) [`dc7f7395`](https://github.com/Shopify/ui-extensions/commit/dc7f739538dd648c135768c2e71c5873e6a672e0) Thanks [@robin-drexler](https://github.com/robin-drexler)! - fix customer-account surface build and context

## 2023.7.1

### Patch Changes

- [#1249](https://github.com/Shopify/ui-extensions/pull/1249) [`fc0186ef`](https://github.com/Shopify/ui-extensions/commit/fc0186ef27b46aac7676d4b254626cf5c01e4239) Thanks [@mleandres](https://github.com/mleandres)! - New `useDeliveryGroup()` hook and improved documentation.

- [#1210](https://github.com/Shopify/ui-extensions/pull/1210) [`1faf52a5`](https://github.com/Shopify/ui-extensions/commit/1faf52a53aac15eae0b37738fe5871d6ee2ef8d4) Thanks [@vividviolet](https://github.com/vividviolet)! - Expose query API for Admin UI extensions

## 2023.7.0

### Major Changes

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Update API type names to match new extension target names

### Minor Changes

- [#1064](https://github.com/Shopify/ui-extensions/pull/1064) [`266c13c0`](https://github.com/Shopify/ui-extensions/commit/266c13c0ab971d7c88c485c2747b753c2e05a4d1) Thanks [@Fionoble](https://github.com/Fionoble)! - Added new admin components: Box, BlockStack, Checkbox, Form, InlineStack, TextArea

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Add support for reading and writing cart metafields.

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Add `Extension.target` field for checkout UI extensions to read the current extension target being rendered.

- [#1057](https://github.com/Shopify/ui-extensions/pull/1057) [`3dff93ac`](https://github.com/Shopify/ui-extensions/commit/3dff93acc1eb10fa524d5985fec2ca9df49fdcdd) Thanks [@Fionoble](https://github.com/Fionoble)! - Exposes Action and Block extension targets in the admin surface.

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Add `customer-account` entrypoints for order status page extensions

- [#774](https://github.com/Shopify/ui-extensions/pull/774) [`feaab61b`](https://github.com/Shopify/ui-extensions/commit/feaab61bfd0fb1c472133418ac7946d5dcdfc155) Thanks [@carolopolo](https://github.com/carolopolo)! - Changes typing of `description` prop of `<CustomerSegmentationTemplate/>` from `string` to `string | string[]`

- [#1145](https://github.com/Shopify/ui-extensions/pull/1145) [`2d147efa`](https://github.com/Shopify/ui-extensions/commit/2d147efab147ac9fdf77f5dd0d27fe65495bb0da) Thanks [@lemonmade](https://github.com/lemonmade)! - Add support for new extension target names

### Patch Changes

- [#1152](https://github.com/Shopify/ui-extensions/pull/1152) [`505582a6`](https://github.com/Shopify/ui-extensions/commit/505582a623a056726109710e35a7aeb40530e8fa) Thanks [@vividviolet](https://github.com/vividviolet)! - Rename all extensionPoint references to extension target

## 2023.4.3

### Patch Changes

- [#1216](https://github.com/Shopify/ui-extensions/pull/1216) [`9052b155`](https://github.com/Shopify/ui-extensions/commit/9052b1550f38d21563bcb36530f6b2bc580363eb) Thanks [@jamesvidler](https://github.com/jamesvidler)! - PickupLocationsApi and PickupPointsApi now return a `isLocationFormVisible` property as opposed to `locationFormVisible`. ShippingMethodDetailsApi now gurantees a target (`ShippingOption`) will be returned.

## 2023.4.2

### Patch Changes

- [#1135](https://github.com/Shopify/ui-extensions/pull/1135) [`b6df631c`](https://github.com/Shopify/ui-extensions/commit/b6df631cc4dd145d80555c05cfa79e02092210dc) Thanks [@lemonmade](https://github.com/lemonmade)! - Backported `Extension.target` field for checkout UI extensions

- [#1135](https://github.com/Shopify/ui-extensions/pull/1135) [`b6df631c`](https://github.com/Shopify/ui-extensions/commit/b6df631cc4dd145d80555c05cfa79e02092210dc) Thanks [@lemonmade](https://github.com/lemonmade)! - Preserve generic type argument for `I18nTranslate` function

## 2023.4.1

### Minor Changes

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Add support for reading and writing cart metafields.

### Patch Changes

- [#1117](https://github.com/Shopify/ui-extensions/pull/1117) [`8e11ad23`](https://github.com/Shopify/ui-extensions/commit/8e11ad230991479b9d944b3811aafb0a1f4a0b2c) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Clean up on Admin examples and types

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Updated faker dependancies for ui-extensions-react.

- [#1100](https://github.com/Shopify/ui-extensions/pull/1100) [`c7dba7ad`](https://github.com/Shopify/ui-extensions/commit/c7dba7adbd1349031d52b3ab6bbb4880fbd572d1) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Updated the documented examples to import from the ui-extensions package.

## 2023.4.0

### Minor Changes

- [#1064](https://github.com/Shopify/ui-extensions/pull/1064) [`266c13c0`](https://github.com/Shopify/ui-extensions/commit/266c13c0ab971d7c88c485c2747b753c2e05a4d1) Thanks [@Fionoble](https://github.com/Fionoble)! - Added new admin components: Box, BlockStack, Checkbox, Form, InlineStack, TextArea

- [#1057](https://github.com/Shopify/ui-extensions/pull/1057) [`3dff93ac`](https://github.com/Shopify/ui-extensions/commit/3dff93acc1eb10fa524d5985fec2ca9df49fdcdd) Thanks [@Fionoble](https://github.com/Fionoble)! - Exposes Action and Block extension targets in the admin surface.

- [#774](https://github.com/Shopify/ui-extensions/pull/774) [`feaab61b`](https://github.com/Shopify/ui-extensions/commit/feaab61bfd0fb1c472133418ac7946d5dcdfc155) Thanks [@carolopolo](https://github.com/carolopolo)! - Changes typing of `description` prop of `<CustomerSegmentationTemplate/>` from `string` to `string | string[]`

### Patch Changes

- [#1050](https://github.com/Shopify/ui-extensions/pull/1050) [`df9ff575`](https://github.com/Shopify/ui-extensions/commit/df9ff5753e7072ba2b6b8acd0427f7f331506ba6) Thanks [@lauramann](https://github.com/lauramann)! - Add viewMajor to source in CustomerSegmentationTemplate

- [#1044](https://github.com/Shopify/ui-extensions/pull/1044) [`ca55a50c`](https://github.com/Shopify/ui-extensions/commit/ca55a50cc111f679c4fb4e308db257e4c22b0330) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Add Heading and HeadingGroup components to admin surface

- [#1048](https://github.com/Shopify/ui-extensions/pull/1048) [`faaacfe3`](https://github.com/Shopify/ui-extensions/commit/faaacfe3942b9a25c45f523ab396330221f54564) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Add Button component to the Admin surface

- [#806](https://github.com/Shopify/ui-extensions/pull/806) [`d0e44415`](https://github.com/Shopify/ui-extensions/commit/d0e44415e6913b005d35ff75209bf712e7930f79) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Moving the Segmentation TemplateCategory from the api to the CustomerSegmentationTemplate component props.

- [#703](https://github.com/Shopify/ui-extensions/pull/703) [`100cfeda`](https://github.com/Shopify/ui-extensions/commit/100cfeda331247d284add99284b244d7a5cb7d0b) Thanks [@vividviolet](https://github.com/vividviolet)! - Add Admin surface to packages

- [#823](https://github.com/Shopify/ui-extensions/pull/823) [`0095a792`](https://github.com/Shopify/ui-extensions/commit/0095a792f4392b242aceccdcc0c8f1741ea22782) Thanks [@lemonmade](https://github.com/lemonmade)! - Example unstable change

- [#892](https://github.com/Shopify/ui-extensions/pull/892) [`0d68e3d1`](https://github.com/Shopify/ui-extensions/commit/0d68e3d163abba8fc48030ec3b2ac287fed4340c) Thanks [@LTiger14](https://github.com/LTiger14)! - Add confettiMajor to source in CustomerSegmentationTemplate

- [#1023](https://github.com/Shopify/ui-extensions/pull/1023) [`d250d7df`](https://github.com/Shopify/ui-extensions/commit/d250d7df500378b496f079292d33b6433053098c) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Remove legacy components on the admin surface and add components based on the unified API

- [#771](https://github.com/Shopify/ui-extensions/pull/771) [`2a3b4bd0`](https://github.com/Shopify/ui-extensions/commit/2a3b4bd0f8dbdf0e36530f2308ef794c71e2daf4) Thanks [@loic-d](https://github.com/loic-d)! - Introduce dateAdded on CustomerSegmentationTemplate

- [#1042](https://github.com/Shopify/ui-extensions/pull/1042) [`de735136`](https://github.com/Shopify/ui-extensions/commit/de735136e204b068f3654272261fb68b1943ad6e) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Add AppAction component

- [#1034](https://github.com/Shopify/ui-extensions/pull/1034) [`35a34867`](https://github.com/Shopify/ui-extensions/commit/35a34867922fde91f84644c06d094ede0ceb0415) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Ported latest changes from @shopify/checkout-ui-extensions package for corresponding version 2023-04.

- [#1074](https://github.com/Shopify/ui-extensions/pull/1074) [`3e60fb40`](https://github.com/Shopify/ui-extensions/commit/3e60fb402fdec6c624e85d925cffa955faadf6c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Rename components with Admin prefix

- [#759](https://github.com/Shopify/ui-extensions/pull/759) [`4e71987f`](https://github.com/Shopify/ui-extensions/commit/4e71987f1cd701e049ebfb9e4c726f2a841ce8be) Thanks [@loic-d](https://github.com/loic-d)! - Introduces CustomerSegmentationTemplate component

- [#1073](https://github.com/Shopify/ui-extensions/pull/1073) [`ad9d0f75`](https://github.com/Shopify/ui-extensions/commit/ad9d0f75078c2b2f915a14789f1bc2eec2ca2885) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Added ability to generate docs from within the repository.

- [#766](https://github.com/Shopify/ui-extensions/pull/766) [`0c5b0d5b`](https://github.com/Shopify/ui-extensions/commit/0c5b0d5b623e4d6a7e8c33e821991f9bdc5c8b20) Thanks [@loic-d](https://github.com/loic-d)! - Introduces standardMetafieldDependencies prop on CustomerSegmentationTemplate

- [#722](https://github.com/Shopify/ui-extensions/pull/722) [`c4d3ef8e`](https://github.com/Shopify/ui-extensions/commit/c4d3ef8ea10b8b9bc3a688b9ed7550d717870a22) Thanks [@vividviolet](https://github.com/vividviolet)! - Call root.mount for a rendering extension point

- [#822](https://github.com/Shopify/ui-extensions/pull/822) [`a49cfe5d`](https://github.com/Shopify/ui-extensions/commit/a49cfe5dc9609791af46f9f6170250fec30212b8) Thanks [@jonathanhamel4](https://github.com/jonathanhamel4)! - Changing the dateAdded type from Date to ISO 8601 string

- [#1062](https://github.com/Shopify/ui-extensions/pull/1062) [`aad2fb79`](https://github.com/Shopify/ui-extensions/commit/aad2fb797ef8d9da4c729cdae78f67019520cecf) Thanks [@lauramann](https://github.com/lauramann)! - Adds buyButtonMajor to source in CustomerSegmentationTemplate

- [#1043](https://github.com/Shopify/ui-extensions/pull/1043) [`1db18001`](https://github.com/Shopify/ui-extensions/commit/1db18001ee1e3cdcc421b9078db72f498bd4991f) Thanks [@olavoasantos](https://github.com/olavoasantos)! - Add Text component to the Admin surface

## 2022.10.6

### Patch Changes

- [#717](https://github.com/Shopify/ui-extensions/pull/717) [`5c2f511b`](https://github.com/Shopify/ui-extensions/commit/5c2f511bbea3b4f36fc9c63f79089a79a90ccf26) Thanks [@vividviolet](https://github.com/vividviolet)! - Fix exports for Checkout's surface

## 2022.10.5

### Patch Changes

- [#661](https://github.com/Shopify/ui-extensions/pull/661) [`2bef7a10`](https://github.com/Shopify/ui-extensions/commit/2bef7a10d32f80651d2cfa5ac528f551e4ab8b24) Thanks [@lemonmade](https://github.com/lemonmade)! - Bring in @shopify/checkout-ui-extensions@0.22.0
