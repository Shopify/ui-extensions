import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'POS UI extensions',
  description: `POS UI Extensions enable app developers to extend the capabilities of the Shopify POS app at defined extension points. You can use the POS UI Extension components and APIs to develop extensions that feel native to Shopify POS with faster performance.`,
  id: 'pos-ui-extensions',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'how-it-works',
      title: 'How it works',
      sectionContent:
        'Developers can get started with POS UI extensions by using Shopify CLI to generate extension scaffolding. Leveraging the defined extension points, extension API and components, developers can build a user experience to extend the capability of POS app. For example, you can build an extension that adds update cart, read cart data, apply discount to the product added in the cart and much more. Merchants can then discover and install extensions in the POS app. The demo below shows how merchants can discover and add POS UI extensions in the POS app.',
      sectionCard: [
        {
          name: 'Deploy and release extensions using Shopify CLI and the Partner Dashboard. ',
          url: '/docs/apps/deployment/extension',
          type: 'gear',
        },
      ],
      image: 'add-tile-smart-grid.png',
    },
    {
      type: 'Resource',
      anchorLink: 'resources',
      title: 'Resources',
      resources: [
        {
          name: 'remote-ui',
          subtitle:
            'Learn more about the underlying technology that powers POS UI extensions.',
          url: 'https://github.com/Shopify/remote-ui',
          type: 'gitHub',
        },
        {
          name: 'Figma UI Kit',
          subtitle: 'Use the Figma UI kit to design your extension.',
          url: '/apps/checkout/checkout-ux-guidelines',
          type: 'star',
        },
      ],
    },
  ],
};

export default data;
