import type {LandingTemplateSchema} from '@shopify/generate-docs';

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
      anchorLink: '202408',
      title: '2024.08',
      sectionContent: `
- Added in POS version: N/A
- Removed in POS version: N/A
- Release day: TBD.

### Features

- Removed \`subtitle\` property to the [FormattedTextField](/docs/api/pos-ui-extensions/apis/formatted-text-field) component.
- Removed \`subtitle\` property to the [TextField](/docs/api/pos-ui-extensions/apis/text-field) component.
- Renamed the \`OrderAPIContent\` interface to \`OrderApiContent\`.
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

- Added support for the [pos.purchase.post.action.menu-item.render](/docs/api/pos-ui-extensions/targets/post-purchase/pos-purchase-post-action-menu-item-render) and [pos.purchase.post.action.render](/docs/api/pos-ui-extensions/targets/post-purchase/pos-purchase-post-action-render) targets.
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
