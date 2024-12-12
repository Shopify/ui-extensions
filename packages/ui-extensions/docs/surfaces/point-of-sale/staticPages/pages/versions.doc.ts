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
      anchorLink: 'support-policy',
      title: 'Support Policy',
      sectionContent: '',
      sectionNotice: [
        {
          title: 'End of Support Plan',
          type: 'Warning',
          sectionContent: `
          To ensure the best possible ongoing POS UI Extension development experience, starting in April 2025, we will end support for versions on a one-year rolling basis. This table details the end of support schedule.

|released version|removed versions|
|---:|---|
|2025-04|1.0.0, 1.0.1, 1.1.2, 1.2.0, 1.3.0, 1.4.0, 1.5.1, 1.6.0, 1.7.0, 2024-04|
|2025-07|2024-07|
|2025-10|2024-10|
|2026-01|2025-01|
|2026-04|2025-04|

Refer to the [migration guide](/docs/api/pos-ui-extensions/migrating) for more information.`,
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: '202501',
      title: '2025.01',
      sectionContent: `
- Added in POS version: 9.26
- Removed in POS version: N/A
- Release day: 1/6/2025

### Breaking Changes
- Removed the deprecated ActionItem component. Use a [Button](/docs/api/pos-ui-extensions/components/button) instead.
- Removed the deprecated SmartGridApi. Use the [ActionApi](/docs/api/pos-ui-extensions/apis/action-api) instead.
- Removed the deprecated DiscountType. Use [CartDiscountType](/docs/api/pos-ui-extensions/apis/cart-api#cartapi-propertydetail-applycartdiscount) and [LineItemDiscountType](/docs/api/pos-ui-extensions/apis/cart-api#cartapi-propertydetail-setlineitemdiscount) instead.
- Removed the deprecated \`badge\` prop from the [List](/docs/api/pos-ui-extensions/components/list) component. Use \`badges\` instead.
- Removed the deprecated \`TextFieldProps\` type from the [TextField](/docs/api/pos-ui-extensions/components/textfield) component.
- Removed \`customValidator\` prop from the [FormattedTextField](/docs/api/pos-ui-extensions/components/formattedtextfield) component.

### Features

- Added [PrintApi](/docs/api/pos-ui-extensions/apis/print-api) and a [PrintPreview](/docs/api/pos-ui-extensions/components/printpreview) component.
- Added \`currency\` prop to the [SessionApi](/docs/api/pos-ui-extensions/apis/session-api).
- [Cart API](/docs/api/pos-ui-extensions/apis/cart-api) updates:
  - \`addLineItem\` and \`addCustomSale\` now return a UUID for the created item.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '2024101',
      title: '2024.10.1',
      sectionContent: `
- Added in POS version: 9.22
- Removed in POS version: N/A
- Release day: 11/11/2024.

### Features

- Fixes long standing issue where \`useEffect\` teardown functions are not working in React',
      `,
    },
    {
      type: 'Generic',
      anchorLink: '202410',
      title: '2024.10',
      sectionContent: `
- Added in POS version: 9.19
- Removed in POS version: N/A
- Release day: 10/1/2024.

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
- Added in POS version: 9.15
- Removed in POS version: N/A
- Release day: 08/14/2024.

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
- Added in POS version: 9.11
- Removed in POS version: N/A
- Release day: 06/10/2024.

### Features

- Added support for the ${TargetLink.PosPurchasePostActionMenuItemRender} and ${TargetLink.PosPurchasePostActionRender} targets.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '170',
      title: '1.7.0',
      sectionNotice: [
        {
          sectionContent: `This is the final version using the \`retail-ui-extensions(-react)\` package. Please see the [migration guide](/docs/api/pos-ui-extensions/migrating) for more information.`,
          title: 'Note',
          type: 'Info',
        },
      ],
      sectionContent: `
- Added in POS version: 9.4.0
- Removed in POS version: N/A
- Release day: 03/13/2024.

### Features

- Added \`discounts\` property to the [Cart](/docs/api/pos-ui-extensions/apis/cart-api) object in the Cart API.
- Added \`addCartCodeDiscount\` function to the [Cart API](/docs/api/pos-ui-extensions/apis/cart-api#cartapi-propertydetail-addcartcodediscount).
- Added \`removeAllDiscounts\` function to the [Cart API](/docs/api/pos-ui-extensions/apis/cart-api#cartapi-propertydetail-removealldiscounts).
- Added \`listHeaderComponent\` property to the [List](/docs/api/pos-ui-extensions/components/list#list-propertydetail-listheadercomponent) component.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '160',
      title: '1.6.0',
      sectionContent: `
- Added in POS version: 9.2.0
- Removed in POS version: N/A
- Release day: 02/15/2024.

### Features

- Added \`bannerProps\` prop to [CameraScanner](/docs/api/pos-ui-extensions/components/camerascanner#camerascanner-propertydetail-bannerprops).
- Added \`fetchPaginatedProductVariantsWithProductId\` to [ProductSearch](/docs/api/pos-ui-extensions/api/productsearch-api#productsearchapi-propertydetail-fetchpaginatedproductvariantswithproductid).
      `,
    },
    {
      type: 'Generic',
      anchorLink: '151',
      title: '1.5.1',
      sectionContent: `
- Added in POS version: 8.22.0
- Removed in POS version: N/A
- Release day: 11/13/2023.

### Features

- Added \`isGiftCard\` prop to [lineItem](/docs/api/pos-ui-extensions/apis/cart-api) in the Cart API.
- Deprecated \`DiscountType\` and introduced \`CartDiscountType\` and \`LineItemDiscountType\` in the Cart API.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '150',
      title: '1.5.0',
      sectionContent: `
- Added in POS version: 8.21.0
- Removed in POS version: N/A
- Release day: 10/30/2023.

### Features

- Added \`bulkAddLineItemProperties\` to the [Cart API](/docs/api/pos-ui-extensions/apis/cart-api), which allows updating multiple line item properties in one call.
- Added \`bulkSetLineItemDiscounts\` to the [Cart API](/docs/api/pos-ui-extensions/apis/cart-api), which allows updating multiple line item discounts in one call.
      `,
    },
    {
      type: 'Generic',
      anchorLink: '140',
      title: '1.4.0',
      sectionContent: `
- Added in POS version: 8.18.0
- Removed in POS version: N/A
- Release day: 9/27/2023.

### Features

- Added optional \`BadgeStatus\` prop to the [Badge component](/docs/api/pos-ui-extensions/components/badge).
- Added \`isDevice\` function to the [Device API](/docs/api/pos-ui-extensions/apis/device-api).
- Introduced a [\`Connectivity API\`](/docs/api/pos-ui-extensions/apis/connectivity-api). The Connectivity API gives the UI extension access to the information about the device connectivity.
- Added optional \`overrideNavigateBack\` prop to the [Screen component](/docs/api/pos-ui-extensions/components/screen).`,
    },
    {
      type: 'Generic',
      anchorLink: '130',
      title: '1.3.0',
      sectionContent: `
- Added in POS version: 8.15.0
- Removed in POS version: N/A
- Release day: 8/16/2023.

### Features

Introduced the following components:

- [\`DatePicker\`](/docs/api/pos-ui-extensions/components/datepicker): Used to select dates.
- [\`TimePicker\`](/docs/api/pos-ui-extensions/components/timepicker): Used to select times.
- [\`DateField\`](/docs/api/pos-ui-extensions/components/datefield): Used to select dates using a text input.
- [\`TimeField\`](/docs/api/pos-ui-extensions/components/timefield): Used to select times using a text input.
- [\`TextArea\`](/docs/api/pos-ui-extensions/components/textarea): A text field to allow merchants to input or modify multiline text.
- [\`NumberField\`](/docs/api/pos-ui-extensions/components/numberfield): A text field to capture numerical values.
- [\`EmailField\`](/docs/api/pos-ui-extensions/components/emailfield): A text field to capture email addresses.
- [\`TextField\`](/docs/api/pos-ui-extensions/components/textfield): A updated text field supporting text input.
- [\`Tile component\`](/docs/api/pos-ui-extensions/components/tile): Updated to support \`badgeValue\`. The \`enabled\` and \`onPress\` properties are now optional.
`,
    },
    {
      type: 'Generic',
      anchorLink: '120',
      title: '1.2.0',
      sectionContent: `
- Added in POS version: 8.12.0
- Removed in POS version: N/A
- Release day: 6/26/2023.

### Features

- Introduced a [PinPad component](/docs/api/pos-ui-extensions/components/pinpad). It can be used to authenticate or identify individuals through a standardized number pad.
- Introduced [Product Search API](/docs/api/pos-ui-extensions/apis/productsearch-api). The Product Search API gives the UI Extension access to the native product search and fetching functionality of Shopify POS.
- Added a function for setting an attributed staff to the cart and line items to [Cart API](/docs/api/pos-ui-extensions/api/cart-api).
- The [Navigator component](/docs/api/pos-ui-extensions/components/navigator) now supports a new prop called \`initialScreenName\`. It can be used to set the name of the \`Screen\` to initialize to.
- Introduced a [Device API](/docs/api/pos-ui-extensions/apis/device-api). The Device API gives the UI Extension access to the information about the device that the extension is running on.
- The [List component](/docs/api/pos-ui-extensions/components/list) was updated to support \`badge\` property for \`leftSide\` image, and \`toggleSwitch\` property for \`rightSide\`.
`,
    },
    {
      type: 'Generic',
      anchorLink: '112',
      title: '1.1.2',
      sectionContent: `
- Added in POS version: 8.9.0
- Removed in POS version: N/A
- Release day: 5/15/2023.

### Features

- Introduces new \`CameraScanner\` component.
- Introduces new \`Scanner\` API.
`,
    },
    {
      type: 'Generic',
      anchorLink: '101',
      title: '1.0.1',
      sectionContent: `
- Added in POS version: 8.8.1
- Removed in POS version: N/A
- Release day: 5/3/2023.

### Fixes

- Addresses a problem where certain published extensions could not be launched on POS.
`,
    },
    {
      type: 'Generic',
      anchorLink: '100',
      title: '1.0.0',
      sectionContent: `
- Added in POS version: 8.8.0
- Removed in POS version: N/A
- Release day: 5/1/2023.

### Features

- The \`Banner\` component now can hide the action button.
- The \`Stepper\` component now has \`minimumValue\`, \`maximumValue\`, and \`value\` props.

### Fixes

- An unremovable scanning icon was removed from \`SearchBar\`.
- Icon sizes were adjusted for \`SearchBar\` to avoid cropping.
- \`FormattedTextField\` now doesn't crash on \`currency\` value for \`inputType\`.
- Removed multiple broken \`inputType\` values for \`FormattedTextField\`.
- Resolved multiple path issues with the package.
`,
    },
  ],
};

export default data;
