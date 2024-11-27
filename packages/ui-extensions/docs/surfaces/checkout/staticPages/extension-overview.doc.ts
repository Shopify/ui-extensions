import type {LandingTemplateSchema} from '@shopify/generate-docs';

// Order of data shape mimics visual structure of page
// Anything in an array can have multiple objects

const data: LandingTemplateSchema = {
  // The title of the page.
  title: 'Targets Overview',
  // A short description of the page. Appears in the hero section below the title.
  description: `
A [target](/docs/apps/app-extensions/configuration#targets) represents where your checkout UI extension will appear.

You register for targets in your [configuration file](/docs/api/checkout-ui-extensions/configuration), and you include a JavaScript function that will run at that location in checkout.
  `,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm id matches the reference name.
  id: 'extension-targets-overview',
  // Basic content for the page and Hero section.
  sections: [
    {
      type: 'GenericAccordion',
      title: 'Checkout locations',
      anchorLink: 'supported-locations',
      sectionContent:
        'Checkout is where buyers go to purchase goods. Checkout consists of the information, shipping, and payment steps in addition to the order summary and Shop Pay. Learn more about building [custom functionality for checkout](/docs/api/checkout-ui-extensions).',
      accordionContent: [
        {
          title: 'Information',
          description: `
This is the first step in the checkout process where the buyer enters contact information and a delivery address.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-information.png',
        },
        {
          title: 'Shipping',
          description: `
Point in checkout where the buyer selects a shipping method.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-shipping.png',
        },
        {
          title: 'Payment',
          description: `
Point in checkout where the buyer enters their payment information.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-payment.png',
        },
        {
          title: 'Order summary',
          description: `
Summary of the cart contents, discounts, and order totals.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-order-summary.png',
        },
        {
          title: 'Shop Pay',
          description: `
Accelerated checkout where Shopify pre-fills buyer information using their Shop Pay account.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-shop-pay.png',
        },
        {
          title: 'Split shipping',
          description: `
When multiple shipments are expected, a checkout will render split shipping options.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-split-shipping.png',
        },
        {
          title: 'Local Pickup',
          description: `
Point in checkout where the buyer can select a store location to pick up their purchase.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-local-pickup.png',
        },
        {
          title: 'Pickup Points',
          description: `
Point in checkout where the buyer can select a pickup point to have their purchase delivered to.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-pickup-points.png',
        },
        {
          title: 'Overlays',
          description: `
Static extension targets that floats above the checkout.

Review [all extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-chat.png',
        },
        {
          title: 'One-page checkout',
          description: `
All checkout pages (information, shipping, and payment) are combined into a single page with the order summary.

Get started testing extensions on [one-page checkout](/docs/apps/checkout/best-practices/testing-ui-extensions#one-page-checkout).
`,
          image: 'supported-locations-one-page-checkout.png',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Thank you locations',
      anchorLink: 'supported-typ-locations',
      sectionContent:
        'The **Thank you** page is shown to buyers immediately after a checkout is successfully submitted. Learn more about building for [the **Thank you** page](/docs/apps/checkout/thank-you-order-status).',
      accordionContent: [
        {
          title: 'Order details',
          description: `
Displays all order information to buyers.

Review [all **Thank you** page extension targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-thank-you.png',
        },
        {
          title: 'Order summary',
          description: `
Summary of the cart contents, discounts, and order totals.

Review [all **Thank you** page extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-order-summary-thank-you.png',
        },
        {
          title: 'Overlays',
          description: `
Static extension targets that floats above the Thank you page.

Review [all **Thank you** page extensions targets](/docs/api/checkout-ui-extensions/targets).
`,
          image: 'supported-locations-chat-thank-you.png',
        },
      ],
    },
    {
      type: 'Generic',
      // Anchor link for the section.
      anchorLink: 'static-extension-targets',
      // The title of the section.
      title: 'Static extension targets',
      // Content for the section.
      image: 'static-extension-targets.png',
      sectionContent: `Static extension targets render immediately before or after most core checkout features such as contact information, shipping methods, and order summary line items. Merchants use the [checkout editor](/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor) to activate and place the extension in the checkout experience.
      \n\nWhen a core checkout feature isn't rendered, neither are the static extension targets tied to it. For example, shipping methods aren't shown when customers select the option for store pickup and the UI extensions that load before or after the shipping method aren't rendered.
      \n\nChoose static extension targets when your content and functionality is closely related to a core checkout feature. An example is a shipping delay notice.
      `,
      sectionCard: [
        {
          name: 'Extension targets',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/targets',
          type: 'blocks',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'block-extension-targets',
      title: 'Block extension targets',
      sectionContent: `Block extension targets render between core checkout features. Merchants can use the [checkout and accounts editor](/docs/apps/build/checkout/test-checkout-ui-extensions#test-the-extension-in-the-checkout-editor) to place the extension in the [**checkout**](/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations), [**Thank you**](/docs/api/checkout-ui-extensions/extension-targets-overview#supported-typ-locations) pages.
      \n\nBlock extensions are always rendered, regardless of what other checkout elements are present. For example, an extension placed above the shipping address will still render even for digital products which don't require a shipping address.\n\nChoose block extension targets when your content and functionality works independently of a core checkout feature. This is useful for custom content, like a field to capture order notes from the customer.
      \n\nBlock extension targets always support multiple placements. Each placement has an associated placement reference that represents its location on the page. For example, the block extension target \`purchase.checkout.block.render\` supports fourteen placements. The placement references include \`INFORMATION1\`, \`DELIVERY1\`, \`PAYMENT1\`, and more.
      \n\nYou can use placement references as URL parameters to [test block extensions](/docs/apps/build/checkout/test-checkout-ui-extensions#block-targets) in all supported placements on a page. You can also use placement references to [define the default placement](/docs/apps/build/app-extensions/configure-app-extensions#checkout-ui-extensions) of an extension for merchants.`,
      image: 'block-extension-targets.png',
      sectionCard: [
        {
          name: 'Extension targets',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/targets',
          type: 'blocks',
        },
        {
          name: 'Placement references',
          subtitle: 'Learn more',
          url: '/docs/apps/build/checkout/test-checkout-ui-extensions#placement-references',
          type: 'resource',
        },
      ],
    },
  ],
};

export default data;
