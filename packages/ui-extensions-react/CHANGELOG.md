# @shopify/ui-extensions-react

## 2023.10.3

### Patch Changes

- [#2110](https://github.com/Shopify/ui-extensions/pull/2110) [`c4641e99b`](https://github.com/Shopify/ui-extensions/commit/c4641e99b26dbe66b33852b679142fd51bd54d96) Thanks [@oliverigor](https://github.com/oliverigor)! - ScrollView scrollTo docs changes, image source docs changes

- Updated dependencies [[`c4641e99b`](https://github.com/Shopify/ui-extensions/commit/c4641e99b26dbe66b33852b679142fd51bd54d96)]:
  - @shopify/ui-extensions@2023.10.3

## 2023.10.2

### Patch Changes

- [#1943](https://github.com/Shopify/ui-extensions/pull/1943) [`ffffc132`](https://github.com/Shopify/ui-extensions/commit/ffffc132bedece35dda551e6bea39f1d6be6e42b) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Improve error messaging when a React hook is used from a different API surface than the extension calling it.

- Updated dependencies [[`ffffc132`](https://github.com/Shopify/ui-extensions/commit/ffffc132bedece35dda551e6bea39f1d6be6e42b)]:
  - @shopify/ui-extensions@2023.10.2

## 2023.10.1

### Patch Changes

- [#1657](https://github.com/Shopify/ui-extensions/pull/1657) [`370a9366`](https://github.com/Shopify/ui-extensions/commit/370a936634c4b537885716e30bd50dd8b1d0c7c1) Thanks [@oliverigor](https://github.com/oliverigor)! - Add docs fixes for the conditional style Style type

- Updated dependencies [[`370a9366`](https://github.com/Shopify/ui-extensions/commit/370a936634c4b537885716e30bd50dd8b1d0c7c1)]:
  - @shopify/ui-extensions@2023.10.1

## 2023.10.0

### Major Changes

- [#1296](https://github.com/Shopify/ui-extensions/pull/1296) [`a8e16322`](https://github.com/Shopify/ui-extensions/commit/a8e16322b367c4efd079d8e69331bd234bedb0c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Bump `@remote-ui/core` and `@remote-ui/react` versions.

  > **Warning**: Extensions using `@shopify/ui-extensions-react` must now use react `^18.0.0` or greater.

  Extensions are also expected to reconcile their own react version.

  In order to use the latest version of `@shopify/ui-extensions-react`, you should modify your `package.json` to resemble the following:

  ```
  {
    ...
    "dependencies": {
      "react": "^18.0.0",
      "@shopify/ui-extensions": "2023.10.x",
      "@shopify/ui-extensions-react": "2023.10.x",
      "react-reconciler": "0.29.0"
    },
    "devDependencies": {
      "@types/react": "^18.0.0"
    }
  }
  ```

### Minor Changes

- [#1340](https://github.com/Shopify/ui-extensions/pull/1340) [`a7ea6cb0`](https://github.com/Shopify/ui-extensions/commit/a7ea6cb06c3838228bfeefa94d4826b747720ad3) Thanks [@lsit](https://github.com/lsit)! - Add PaymentIcon component to the checkout surface

- [#1351](https://github.com/Shopify/ui-extensions/pull/1351) [`8df8429b`](https://github.com/Shopify/ui-extensions/commit/8df8429b69c3bdec736d0885c922be1db2c4c5fe) Thanks [@jkeohan](https://github.com/jkeohan)! - Add ProductThumbnail component to the checkout surface

- [#1397](https://github.com/Shopify/ui-extensions/pull/1397) [`198d0848`](https://github.com/Shopify/ui-extensions/commit/198d08481470776f547e26f70fbc8b9836da3e6d) Thanks [@jamesvidler](https://github.com/jamesvidler)! - New `ConsentCheckbox` and `ConsentPhoneField` components which allow extensions to render their own consent UI, supporting the "sms-marketing" policy.

- [#1397](https://github.com/Shopify/ui-extensions/pull/1397) [`198d0848`](https://github.com/Shopify/ui-extensions/commit/198d08481470776f547e26f70fbc8b9836da3e6d) Thanks [@jamesvidler](https://github.com/jamesvidler)! - Adds the `useShippingOptionTarget` react hook to retrieve the target shipping option.

- [#1364](https://github.com/Shopify/ui-extensions/pull/1364) [`3437fc05`](https://github.com/Shopify/ui-extensions/commit/3437fc050df2d7ee1d95a75084804ad0f47a70e3) Thanks [@rcaplanshopify](https://github.com/rcaplanshopify)! - Adds `purchase.checkout.payment-method-list.render-before` and `purchase.checkout.payment-method-list.render-after` extension targets, rendered above and below the payment method list.

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

- [#1324](https://github.com/Shopify/ui-extensions/pull/1324) [`a15fc4ad`](https://github.com/Shopify/ui-extensions/commit/a15fc4ad073ff905d3860e9e21080ee379813c58) Thanks [@LTiger14](https://github.com/LTiger14)! - Export CustomerSegmentTemplate and the props

- [#1274](https://github.com/Shopify/ui-extensions/pull/1274) [`e198e10a`](https://github.com/Shopify/ui-extensions/commit/e198e10a99fc3da52d37822959db94105f04987f) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Update CustomerSegmentTemplate prop names

- [#1316](https://github.com/Shopify/ui-extensions/pull/1316) [`0905d719`](https://github.com/Shopify/ui-extensions/commit/0905d7193344c28fc9d346c2f7df873f23856671) Thanks [@lihaokx](https://github.com/lihaokx)! - 1. Rename point to target; 2. Update extension target names; 3, Add new types

- [#1074](https://github.com/Shopify/ui-extensions/pull/1074) [`3e60fb40`](https://github.com/Shopify/ui-extensions/commit/3e60fb402fdec6c624e85d925cffa955faadf6c8) Thanks [@MitchLillie](https://github.com/MitchLillie)! - Rename components with Admin prefix

- [#1294](https://github.com/Shopify/ui-extensions/pull/1294) [`1dd7a197`](https://github.com/Shopify/ui-extensions/commit/1dd7a1975cf23522f667fe19d1261b761726a252) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Remove CustomerSegmentationTemplate and deprecated prop names

- [#1283](https://github.com/Shopify/ui-extensions/pull/1283) [`8a9917b2`](https://github.com/Shopify/ui-extensions/commit/8a9917b247068178dba339bfa4fbfb91efc2fe0c) Thanks [@lihaokx](https://github.com/lihaokx)! - Move customer account ui extension from main to unstable branch.

- [#1279](https://github.com/Shopify/ui-extensions/pull/1279) [`f537b081`](https://github.com/Shopify/ui-extensions/commit/f537b0814d3fcf0605396e9453a95ad4b58fcd2a) Thanks [@PrescilliaA](https://github.com/PrescilliaA)! - Introduces InternalCustomerSegmentTemplate component

- Updated dependencies [[`a7ea6cb0`](https://github.com/Shopify/ui-extensions/commit/a7ea6cb06c3838228bfeefa94d4826b747720ad3), [`8df8429b`](https://github.com/Shopify/ui-extensions/commit/8df8429b69c3bdec736d0885c922be1db2c4c5fe), [`198d0848`](https://github.com/Shopify/ui-extensions/commit/198d08481470776f547e26f70fbc8b9836da3e6d), [`82ba4be1`](https://github.com/Shopify/ui-extensions/commit/82ba4be1efd0745ebd14ef10db4c54badba8c9f6), [`d0bd64d2`](https://github.com/Shopify/ui-extensions/commit/d0bd64d27f4cb41c31ef174393029d841a744ce3), [`e198e10a`](https://github.com/Shopify/ui-extensions/commit/e198e10a99fc3da52d37822959db94105f04987f), [`a8e16322`](https://github.com/Shopify/ui-extensions/commit/a8e16322b367c4efd079d8e69331bd234bedb0c8), [`3437fc05`](https://github.com/Shopify/ui-extensions/commit/3437fc050df2d7ee1d95a75084804ad0f47a70e3), [`0905d719`](https://github.com/Shopify/ui-extensions/commit/0905d7193344c28fc9d346c2f7df873f23856671), [`d539b687`](https://github.com/Shopify/ui-extensions/commit/d539b68792ab3068c2ddd89ae8a2077cc1ddcc56), [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090), [`1de5d9cf`](https://github.com/Shopify/ui-extensions/commit/1de5d9cf7c14f1f7220be4af8c8b35561ee862b8), [`1dd9abf0`](https://github.com/Shopify/ui-extensions/commit/1dd9abf0faf5b63c9b6c341608fc53a8207f485d), [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090), [`f4d0ea17`](https://github.com/Shopify/ui-extensions/commit/f4d0ea1754f132337536e1154a4ea4ed7d1fefde), [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090), [`3e60fb40`](https://github.com/Shopify/ui-extensions/commit/3e60fb402fdec6c624e85d925cffa955faadf6c8), [`fa561eed`](https://github.com/Shopify/ui-extensions/commit/fa561eed6071fc7e8308e7fecf589b60093cafe4), [`1dd7a197`](https://github.com/Shopify/ui-extensions/commit/1dd7a1975cf23522f667fe19d1261b761726a252), [`8a9917b2`](https://github.com/Shopify/ui-extensions/commit/8a9917b247068178dba339bfa4fbfb91efc2fe0c), [`1be8d871`](https://github.com/Shopify/ui-extensions/commit/1be8d871a284967c7f9860a2321666b6f416c57f), [`39553479`](https://github.com/Shopify/ui-extensions/commit/39553479c51dbdba24b33669bb7ed697eccba090), [`898ac175`](https://github.com/Shopify/ui-extensions/commit/898ac175661e02e7f09089672dfb652cdf6b6089), [`7a65c283`](https://github.com/Shopify/ui-extensions/commit/7a65c2836aa91ac3e6e225d8476b2c44baae87fb), [`22f71433`](https://github.com/Shopify/ui-extensions/commit/22f71433069b4cc1d4a322dad8dc6ecb70959ea8), [`f537b081`](https://github.com/Shopify/ui-extensions/commit/f537b0814d3fcf0605396e9453a95ad4b58fcd2a)]:
  - @shopify/ui-extensions@0.0.0
