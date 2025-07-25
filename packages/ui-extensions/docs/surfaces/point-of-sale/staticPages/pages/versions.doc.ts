import type {LandingTemplateSchema} from '@shopify/generate-docs';
import {TargetLink} from '../../reference/types/ExtensionTargetType';

const data: LandingTemplateSchema = {
  title: 'Versions',
  description:
    'POS UI Extensions versions. Contains the changelog for each version as well as the information on which versions are currently supported.',
  id: 'versions',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: '202507',
      title: '2025.07',
      sectionContent: `
- Added in POS version: 10.6
- Release day: 07/03/2025

## Breaking Changes

- Removed the deprecated \`FormattedTextField\` component. Use the [TextField](/docs/api/pos-ui-extensions/components/textfield) component instead. It will continue to work in POS 10.6.0, but will no longer function in POS 10.7.0.

## Deprecations

- Deprecated \`'minor'\`, \`'major'\`, \`'spot'\`, \`'caption'\`, \`'badge'\` as values for the \`size\` prop in the [Icon](/docs/api/pos-ui-extensions/components/icon) component. Use \`'s'\`, \`'m'\`, \`'l'\`, \`'xl'\` instead.
- Deprecated \`'arrow'\`, \`'available-at-other-locations'\`, \`'collections'\`, \`'connectivity-warning'\`, \`'delivery'\`, \`'home'\`, \`'image-placeholder'\`, \`'internet'\`, \`'menu'\`, \`'orders'\`, \`'products'\`, \`'shipment'\` as values for the \`name\` prop in the [Icon](/docs/api/pos-ui-extensions/components/icon) component. See valid values for [\`IconName\`](/docs/api/pos-ui-extensions/latest/components/icon#icon-propertydetail-name).

## Important Fixes

- Updated [pos.draft-order-details.block.render](https://shopify.dev/docs/api/pos-ui-extensions/targets/draft-order-details/pos-draft-order-details-block-render) to allow the proper set of components, called \`BlockComponents\`. Previously, this target erroneously accepted \`ActionComponents\`, which are intended for targets like \`pos.draft-order-details.action.render\`.
- Fixed an issue where the [SearchBar](/docs/api/pos-ui-extensions/components/searchbar) component's \`onTextChange\` handler was not being called when the clear button was pressed. Available from POS 10.8.0.

### Features

- Added support for [Direct API access](/docs/api/pos-ui-extensions#direct-api-access), and [authenticated requests](/docs/api/pos-ui-extensions#app-authentication).
- Added required \`posVersion\` property to [Session](/docs/api/pos-ui-extensions/apis/session-api) interface.
- Added optional \`currency\` property to [Discount](/docs/api/pos-ui-extensions/apis/cart-line-item-api#cartlineitemapi-propertydetail-cartlineitem) interface.
- Added \`executedAt\` property to [BaseTransactionComplete](/docs/api/pos-ui-extensions/targets/receipts/pos-receipt-footer-block-render#transactioncompletewithreprintdata-propertydetail-transaction) interface.
- Added optional \`exchangeId\` and \`returnId\` property to [ReturnTransactionData](/docs/api/pos-ui-extensions/targets/receipts/pos-receipt-footer-block-render#transactioncompletewithreprintdata-propertydetail-transaction) interface.
- Added required \`variantId\` property to [ProductApi](/docs/api/pos-ui-extensions/apis/product-api#productapi-propertydetail-variantid) interface.
- Added optional \`taxLines\` property to [ShippingLine](/docs/api/pos-ui-extensions/targets/post-transaction/pos-transaction-complete-event-observe#transactioncompletedata-propertydetail-transaction) interface.
- Added optional \`onBlur\` handler to [SearchBar](/docs/api/pos-ui-extensions/components/searchbar) component.
- Added optional \`tone\` property to [Icon](/docs/api/pos-ui-extensions/components/icon) component and expanded \`name\` and \`size\` options.
- Added optional \`editable\` property to \`Cart\` interface.
- Added \`useCartEditable\` hook to access the cart's editable state.
- Added support for the ${TargetLink.PosCartLineItemDetailsActionMenuItemRender} and ${TargetLink.PosCartLineItemDetailsActionRender} targets on the cart line item details screen.
- Introduced a [Storage API](/docs/api/pos-ui-extensions/apis/storage-api). The Storage API gives the UI Extension access to store data on the POS device that the extension is running on.

### Developer Preview

  - Added support for the ${TargetLink.PosExchangePostActionMenuItemRender}, ${TargetLink.PosExchangePostActionRender}, ${TargetLink.PosExchangePostBlockRender} targets.
  - Added support for the ${TargetLink.PosReturnPostActionMenuItemRender}, ${TargetLink.PosReturnPostActionRender}, ${TargetLink.PosReturnPostBlockRender} targets.
  `,
    },
    {
      type: 'Generic',
      anchorLink: '202504',
      title: '2025.04',
      sectionContent: `
- Added in POS version: 9.31
- Release day: 04/01/2025

## Important Fixes

- **POS 10.3.0**:

  - Fixed an issue where the \`TextField\` component failed to apply the \`maxLength\` parameter.

- **POS 10.2.0**:

  - Fixed a sizing issue with the \`Button\` component.
  - Fixed an issue where the \`Section\` component was displaying a divider between child components.

- **POS 10.0.0**:

  - Removed \`email\`, \`firstName\`, \`lastName\`, and \`note\` from the [Customer](/docs/api/pos-ui-extensions/apis/cart-api#customer) object.
  - POS UI Extensions components automatically use our new POS visual design language.

### Features

**Developer Preview**:
  - Added support for the ${TargetLink.PosTransactionCompleteObserve} target.
  - Added support for cash tracking session. ${TargetLink.PosCashTrackingSessionStartObserve}, ${TargetLink.PosCashTrackingSessionCompleteObserve} targets.
  - Added support for the ${TargetLink.PosCartUpdateObserve} target.
  - Added support for the ${TargetLink.PosReceiptFooterBlockRender} target.
  - Introduced a [POSReceiptBlock component](/docs/api/pos-ui-extensions/components/posreceiptblock). It's the required parent component for ${TargetLink.PosReceiptFooterBlockRender} targets.
  - Introduced a [QRCode component](/docs/api/pos-ui-extensions/components/qrcode). It can be used to render a QR code in POS receipts but must be within a [POSReceiptBlock component](/docs/api/pos-ui-extensions/components/posreceiptblock).
  `,
    },
    {
      type: 'Generic',
      anchorLink: '202501',
      title: '2025.01',
      sectionContent: `
- Added in POS version: 9.26.0
- Release day: 1/6/2025

## Important Fixes

- **POS 10.3.0**:

  - Fixed an issue where the \`TextField\` component failed to apply the \`maxLength\` parameter.

- **POS 10.2.0**:

  - Fixed a sizing issue with the \`Button\` component.
  - Fixed an issue where the \`Section\` component was displaying a divider between child components.

- **POS 10.0.0**:

  - Removed \`email\`, \`firstName\`, \`lastName\`, and \`note\` from the [Customer](/docs/api/pos-ui-extensions/apis/cart-api#customer) object.
  - POS UI Extensions components automatically use our new POS visual design language.

- **POS 9.31.0**:

  - Modal updated so neither swiping down nor tapping outside of modal will dismiss modal.

- **POS 9.29.0**:

  - Fixed an issue where the \`FormattedTextField\` component was rendering black input text in dark mode.

- **POS 9.27.0**:

  - Fixed an issue where the \`Stack\` component was not rendering correctly. By default, \`Stack\` will now always wrap. Additionally, stacks using \`'block'\` will now compress horizontally. Use \`alignContents: 'stretch'\` to take all of the horizontal space. This will not have an impact on layout in previous POS versions.

### Breaking Changes

- Removed the deprecated \`ActionItem\` component. Use a [Button](/docs/api/pos-ui-extensions/components/button) instead.
- Removed the deprecated \`SmartGridApi\`. Use the [ActionApi](/docs/api/pos-ui-extensions/apis/action-api) instead.
- Removed the deprecated DiscountType. Use [CartDiscountType](/docs/api/pos-ui-extensions/apis/cart-api#cartapi-propertydetail-applycartdiscount) and [LineItemDiscountType](/docs/api/pos-ui-extensions/apis/cart-api#cartapi-propertydetail-setlineitemdiscount) instead.
- Removed the deprecated \`badge\` prop from the [List](/docs/api/pos-ui-extensions/components/list) component. Use \`badges\` instead.
- Removed the deprecated \`TextFieldProps\` type from the [TextField](/docs/api/pos-ui-extensions/components/textfield) component.
- Deprecated \`'vertical'\` and \`'horizontal'\` as values for the \`direction\` field in the [Stack](/docs/api/pos-ui-extensions/components/Stack) component. Use \`'block'\` and \`'inline'\` instead.
- Deprecated the \`flex\` field in the [Stack](/docs/api/pos-ui-extensions/components/Stack) component. Set \`blockSize\` or \`inlineSize\` to a value other than \`'auto'\` to create the desired size for your \`Stack\`.
- Deprecated the \`flexWrap\` field in the [Stack](/docs/api/pos-ui-extensions/components/Stack) component. Content will now wrap automatically.
- Deprecated the \`paddingHorizontal\` and \`paddingVertical\` fields in the [Stack](/docs/api/pos-ui-extensions/components/Stack) component. Use \`paddingInline\` and \`paddingBlock\` instead.
- Removed \`customValidator\` prop from the [FormattedTextField](/docs/api/pos-ui-extensions/components/formattedtextfield) component.
- Removed \`email\`, \`firstName\`, \`lastName\`, and \`note\` from the [Customer](/docs/api/pos-ui-extensions/apis/cart-api#customer) object.
- \`Text\` now takes priority in growing over other components. To contain Text to its minimum width, wrap it in a \`Box\` component.

### Features

- Added [PrintApi](/docs/api/pos-ui-extensions/apis/print-api) and a [PrintPreview](/docs/api/pos-ui-extensions/components/printpreview) component.
- Added \`currency\` prop to the [SessionApi](/docs/api/pos-ui-extensions/apis/session-api).
- [Cart API](/docs/api/pos-ui-extensions/apis/cart-api) updates:
  - Added \`bulkUpdateCart\` function for single-operation cart updates.
  - The \`addLineItem\` and \`addCustomSale\` functions now return a \`UUID\` for the added line item.
- Added [Box](/docs/api/pos-ui-extensions/components/box) component.
- Added a new \`justifyContent\` prop to [Stack](/docs/api/pos-ui-extensions/components/Stack) component. The default value is \`'start'\`.
- Added a new \`alignContents\` prop to [Stack](/docs/api/pos-ui-extensions/components/Stack) component. The default value is \`'start'\`. By default, \`'block'\` stacks may compress horizontally. Use \`'stretch'\` to take all of the horizontal space.
- Added a new \`alignItems\` prop to [Stack](/docs/api/pos-ui-extensions/components/Stack) component. The default value is \`'stretch'\`. This may by default cause certain elements to stretch.
- Added a new \`blockSize\` prop to [Stack](/docs/api/pos-ui-extensions/components/Stack) component. This will allow setting a vertical size for the stack.
- Added a new \`inlineSize\` prop to [Stack](/docs/api/pos-ui-extensions/components/Stack) component. This will allow setting a horizontal size for the stack.
- Added sizing and fill options to the [Image](/docs/api/pos-ui-extensions/components/image) component.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '2024101',
      title: '2024.10.1',
      sectionContent: `
- Added in POS version: 9.22.0
- Release day: 11/11/2024

## Important Fixes

- **POS 10.3.0**:

  - Fixed an issue where the \`TextField\` component failed to apply the \`maxLength\` parameter.

- **POS 10.2.0**:

  - Fixed a sizing issue with the \`Button\` component.
  - Fixed an issue where the \`Section\` component was displaying a divider between child components.

- **POS 10.0.0**:

  - Removed \`email\`, \`firstName\`, \`lastName\`, and \`note\` from the [Customer](/docs/api/pos-ui-extensions/apis/cart-api#customer) object.
  - POS UI Extensions components automatically use our new POS visual design language.

### Features

- Fixes long standing issue where \`useEffect\` teardown functions are not working in React
      `,
    },
    {
      type: 'Generic',
      anchorLink: '202410',
      title: '2024.10',
      sectionContent: `
- Added in POS version: 9.19.0
- Release day: 10/1/2024

## Important Fixes

- **POS 10.3.0**:

  - Fixed an issue where the \`TextField\` component failed to apply the \`maxLength\` parameter.

- **POS 10.2.0**:

  - Fixed a sizing issue with the \`Button\` component.
  - Fixed an issue where the \`Section\` component was displaying a divider between child components.

- **POS 10.0.0**:

  - Removed \`email\`, \`firstName\`, \`lastName\`, and \`note\` from the [Customer](/docs/api/pos-ui-extensions/apis/cart-api#customer) object.

### Features

- Added support for iOS debugging with the Safari dev tools.
- On iOS, modals now appear in windowed mode.
- Introduced a [POSBlock component](/docs/api/pos-ui-extensions/components/POSBlock). It's the required parent component for block extension targets.
- Introduced a [POSBlockRow component](/docs/api/pos-ui-extensions/components/POSBlockRow). It's the required child component for POSBlock, and can be used to wrap other components.
- Added support for the ${TargetLink.PosProductDetailsBlockRender} target.
- Added support for the ${TargetLink.PosPurchasePostBlockRender} target.
- Added support for the ${TargetLink.PosOrderDetailsBlockRender} target.
- Added support for the ${TargetLink.PosCustomerDetailsBlockRender} target.
- Deprecated the [ActionItem component](/docs/api/pos-ui-extensions/components/ActionItem). Please use the [Button component](/docs/api/pos-ui-extensions/components/Button) instead.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '202407',
      title: '2024.07',
      sectionContent: `
- Added in POS version: 9.15.0
- Release day: 08/14/2024

## Important Fixes

- **POS 10.3.0**:

  - Fixed an issue where the \`TextField\` component failed to apply the \`maxLength\` parameter.

- **POS 10.2.0**:

  - Fixed a sizing issue with the \`Button\` component.
  - Fixed an issue where the \`Section\` component was displaying a divider between child components.

- **POS 10.0.0**:

  - Removed \`email\`, \`firstName\`, \`lastName\`, and \`note\` from the [Customer](/docs/api/pos-ui-extensions/apis/cart-api#customer) object.
  - POS UI Extensions components automatically use our new POS visual design language.

### Features

- Introduced a [SectionHeader component](/docs/api/pos-ui-extensions/components/sectionheader). It can be used to title sections and structure content.
- Removed \`subtitle\` property to the [FormattedTextField](/docs/api/pos-ui-extensions/apis/formatted-text-field) component.
- Removed \`subtitle\` property to the [TextField](/docs/api/pos-ui-extensions/apis/text-field) component.
- Renamed the \`OrderAPIContent\` interface to \`OrderApiContent\`.
- Added support for the ${TargetLink.PosProductDetailsActionMenuItemRender} and ${TargetLink.PosProductDetailsActionRender} targets.
- Added support for the ${TargetLink.PosOrderDetailsActionMenuItemRender} and ${TargetLink.PosOrderDetailsActionRender} targets.
- Added support for the ${TargetLink.PosDraftOrderDetailsActionMenuItemRender} and ${TargetLink.PosDraftOrderDetailsActionRender} targets.
- Added support for the ${TargetLink.PosCustomerDetailsActionMenuItemRender} and ${TargetLink.PosCustomerDetailsActionRender} targets.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '202404',
      title: '2024.04',
      sectionNotice: [
        {
          sectionContent: `This is the first version using the \`ui-extensions(-react)\` package. Please see the [migration guide](/docs/api/pos-ui-extensions/migrating) for more information.`,
          title: 'Note',
          type: 'Info',
        },
      ],
      sectionContent: `
- Added in POS version: 9.11.0
- Release day: 06/10/2024

### Features

- Added support for the ${TargetLink.PosPurchasePostActionMenuItemRender} and ${TargetLink.PosPurchasePostActionRender} targets.
      `,
    },
  ],
};

export default data;
