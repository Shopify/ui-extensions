import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'POS UI extensions',
  description: `The UI Extensions library enables individuals to build extensions that use interface elements and behaviors that mirror the look and feel of the POS retail experience. These elements render natively, providing the performance and accessibility inherent to a native app.`,
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
      anchorLink: 'api-versioning',
      title: 'API versioning',
      sectionContent: `POS UI extensions are built on a versioned API that receives regular updates with new features, improvements, and additional targets. We recommend using the latest supported API version to access the most current capabilities and ensure optimal compatibility with POS devices.

You can track new releases and update your extensions by referencing the [developer changelog](/changelog).`,
    },
    {
      type: 'Generic',
      anchorLink: 'overview',
      title: 'Overview',
      sectionContent: 'Extend the Shopify POS with UI Extensions.',
      sectionCard: [
        {
          subtitle: 'Extension targets',
          name: 'See all available extension targets',
          url: 'targets',
          type: 'pickaxe-1',
        },
        {
          subtitle: 'APIs',
          name: 'See all available APIs',
          url: 'apis',
          type: 'pickaxe-2',
        },
        {
          subtitle: 'Components',
          name: 'See all available components',
          url: 'components',
          type: 'blocks',
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
          url: 'getting-started',
          type: 'blocks',
        },
      ],
    },
  ],
};

export default data;
