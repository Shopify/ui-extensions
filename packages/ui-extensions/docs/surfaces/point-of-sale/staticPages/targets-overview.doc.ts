import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Targets Overview',
  description: `
A [target](/docs/apps/app-extensions/configuration#targets) represents where your POS UI extension will appear.

You register targets in your \`shopify.extension.toml\` and inside the Javascript file denoted by your toml's \`module\` property.
  `,
  id: 'extension-targets-overview',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'GenericAccordion',
      title: 'POS tile locations',
      anchorLink: 'tile-locations',
      sectionContent:
        'POS tile extensions appear on the smart grid. Learn more about [the smart grid](/docs/apps/pos#home-screen).',
      accordionContent: [
        {
          title: 'Smart grid',
          description: `
Displays a tile on the smart grid.

See [an example](targets/tile/pos-home-tile-render).
`,
          image: 'smart-grid.png',
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'POS action locations',
      anchorLink: 'action-locations',
      sectionContent:
        'POS action extensions appear as menu items throughout the POS and display modally when tapped.',
      accordionContent: [
        {
          title: 'Post-purchase',
          description: `
Displays an action target modally when a menu item is tapped on the post-purchase screen.

See [an example](targets/action/pos-purchase-post-action-render).
`,
          image: 'post-purchase-action.png',
        },
        {
          title: 'Post-return',
          description: `
Displays an action target modally when a menu item is tapped on the post-return screen.

See [an example](targets/action/pos-return-post-action-render).
`,
          image: 'post-return-action.png',
        },
        {
          title: 'Post-exchange',
          description: `
Displays an action target modally when a menu item is tapped on the post-exchange screen.

See [an example](targets/action/pos-exchange-post-action-render).
`,
        },
        {
          title: 'Customer details',
          description: `
Displays an action target modally when a menu item is tapped on the customer details screen.

See [an example](targets/action/pos-customer-details-action-render).
`,
          image: 'customer-details-action-menu.png',
        },
        {
          title: 'Product details',
          description: `
Displays an action target modally when a menu item is tapped on the product details screen.

See [an example](targets/action/pos-product-details-action-render).
`,
          image: 'product-details-action-menu.png',
        },
        {
          title: 'Order details',
          description: `
Displays an action target modally when a menu item is tapped on the order details screen.

See [an example](targets/action/pos-order-details-action-render).
`,
          image: 'order-details-action-menu.png',
        },
        {
          title: 'Draft order details',
          description: `
Displays an action target modally when a menu item is tapped on the draft order details screen.

See [an example](targets/action/pos-draft-order-details-action-render).
`,
          image: 'draft-order-action-menu.png',
        },
        {
          title: 'Cart line item details',
          description: `
Displays an action target modally when a menu item is tapped on the cart line item details screen.

See [an example](targets/action/pos-cart-line-item-details-action-render).
`,
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'POS block locations',
      anchorLink: 'block-locations',
      sectionContent:
        'POS block extensions render custom sections within native POS screens.',
      accordionContent: [
        {
          title: 'Post-purchase',
          description: `
Renders a custom section within the native post purchase screen.

See [an example](targets/block/pos-purchase-post-block-render).
`,
          image: 'post-purchase-block.png',
        },
        {
          title: 'Post-return',
          description: `
Renders a custom section within the native post return screen.

See [an example](targets/block/pos-return-post-block-render).
`,
          image: 'post-return-block.png',
        },
        {
          title: 'Post-exchange',
          description: `
Renders a custom section within the native post exchange screen.

See [an example](targets/block/pos-exchange-post-block-render).
`,
        },
        {
          title: 'Customer details',
          description: `
Renders a custom section within the customer details screen.

See [an example](targets/block/pos-customer-details-block-render).
`,
          image: 'customer-details-block.png',
        },
        {
          title: 'Product details',
          description: `
Renders a custom section within the native product details screen.

See [an example](targets/block/pos-product-details-block-render).
`,
          image: 'product-details-block.png',
        },
        {
          title: 'Order details',
          description: `
Renders a custom section within the native order details screen.

See [an example](targets/block/pos-order-details-block-render).
`,
          image: 'order-details-block.png',
        },
        {
          title: 'Draft order details',
          description: `
Renders a custom section within the native draft order details screen.

See [an example](targets/block/pos-draft-order-details-block-render).
`,
          image: 'draft-order-block.png',
        },
        {
          title: 'Receipt header',
          description: `
Renders a custom section in the header of printed receipts.

See [an example](targets/block/pos-receipt-header-block-render).
`,
        },
        {
          title: 'Receipt footer',
          description: `
Renders a custom section in the footer of printed receipts.

See [an example](targets/block/pos-receipt-footer-block-render).
`,
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'POS observe events',
      anchorLink: 'observe-events',
      sectionContent:
        'POS observe event extensions listen for specific events that occur during POS operations.',
      accordionContent: [
        {
          title: 'Transaction complete',
          description: `
Observes when a transaction is completed in the POS.

See [an example](targets/observe/pos-transaction-complete-event-observe).
`,
        },
        {
          title: 'Cash tracking session start',
          description: `
Observes when a cash tracking session is started.

See [an example](targets/observe/pos-cash-tracking-session-start-event-observe).
`,
        },
        {
          title: 'Cash tracking session complete',
          description: `
Observes when a cash tracking session is completed.

See [an example](targets/observe/pos-cash-tracking-session-complete-event-observe).
`,
        },
        {
          title: 'Cart update',
          description: `
Observes when the cart is updated during a transaction.

See [an example](targets/observe/pos-cart-update-event-observe).
`,
        },
      ],
    },
  ],
};

export default data;
