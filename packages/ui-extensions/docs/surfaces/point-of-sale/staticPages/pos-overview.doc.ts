import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'POS UI extensions',
  description: `The UI Extensions library enables individuals to build extensions that use interface elements and behaviors that mirror the look and feel of the POS retail experience. These elements render natively, providing the performance and accessibility inherent to a native app. POS UI extensions are available for the smart grid.
  > Tip:
  > Shopify constantly works on adding new features to POS UI extensions. You can visit the [changelog](/docs/api/pos-extensions/ui-extensions-reference/versions) to make sure you're using the latest version of POS UI extensions.
  `,
  id: 'pos-ui-extensions',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'overview',
      title: 'Overview',
      sectionContent: 'Extend the Shopify POS with UI Extensions.',
      sectionCard: [
        {
          subtitle: 'Extension targets',
          name: 'View all available extension targets',
          url: '/docs/api/pos-ui-extensions/targets',
          type: 'pickaxe-1',
        },
        {
          subtitle: 'APIs',
          name: 'See all accessible APIs',
          url: '/docs/api/admin-extensions/components',
          type: 'pickaxe-2',
        },
        {
          subtitle: 'Components',
          name: 'Explore all available components',
          url: '/docs/api/admin-extensions/api/extension-targets',
          type: 'blocks',
        },
        {
          subtitle: 'Figma UI Kit',
          name: 'Use the Figma UI kit to design your extension.',
          url: '/apps/checkout/checkout-ux-guidelines',
          type: 'star',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'getting-started',
      title: 'Getting Started',
      sectionContent: 'Get started with POS UI Extensions with Shopify CLI.',
      sectionCard: [
        {
          name: 'Getting started guide',
          subtitle: 'Set up your development environment',
          url: '/docs/api/pos-ui-extensions/getting-started',
          type: 'blocks',
        },
      ],
    },
  ],
};

export default data;
