import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Targets overview',
  description: `
A [target](/docs/apps/app-extensions/configuration#targets) represents where your POS UI extension will appear.
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
      title: 'Smart grid',
      anchorLink: 'smart-grid',
      sectionContent:
        'The smart grid. Learn more about [the smart grid](/docs/apps/pos#home-screen).',
      accordionContent: [
        {
          title: 'Tile',
          description: `
Displays a tile on the smart grid.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Modal',
          description: `
Displays a modal when a tile is tapped.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Post-purchase',
      anchorLink: 'post-purchase',
      sectionContent: 'The post-purchase screen',
      accordionContent: [
        {
          title: 'Menu item',
          description: `
Displays a menu item on the post-purchase screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Action',
          description: `
Displays a modal when a menu item is tapped.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Block',
          description: `
Renders a custom section within the native post purchase screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
      ],
    },

    {
      type: 'GenericAccordion',
      title: 'Customer details',
      anchorLink: 'customer-details',
      sectionContent: 'The customer details screen',
      accordionContent: [
        {
          title: 'Menu item',
          description: `
Displays a menu item on the customer details screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Action',
          description: `
Displays an action target modally when a menu item is tapped.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Product details',
      anchorLink: 'product-details',
      sectionContent: 'The product details screen',
      accordionContent: [
        {
          title: 'Menu item',
          description: `
Displays a menu item on the product details screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Action',
          description: `
Displays an action target modally when a menu item is tapped.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Order details',
      anchorLink: 'order-details',
      sectionContent: 'The order details screen',
      accordionContent: [
        {
          title: 'Menu item',
          description: `
Displays a menu item on the order details screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Action',
          description: `
Displays an action target modally when a menu item is tapped.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
      ],
    },
    {
      type: 'GenericAccordion',
      title: 'Draft Order details',
      anchorLink: 'draft-order-details',
      sectionContent: 'The draft order details screen',
      accordionContent: [
        {
          title: 'Menu item',
          description: `
Displays a menu item on the draft order details screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Action',
          description: `
Displays an action target modally when a menu item is tapped.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
        {
          title: 'Block',
          description: `
Renders a custom section within the native draft order details screen.

Review [all extension targets](/docs/api/pos-ui-extensions/targets).
`,
        },
      ],
    },
  ],
};

export default data;
