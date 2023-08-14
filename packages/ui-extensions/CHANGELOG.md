# @shopify/ui-extensions

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
