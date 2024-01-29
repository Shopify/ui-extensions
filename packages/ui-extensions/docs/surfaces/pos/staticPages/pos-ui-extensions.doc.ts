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
      sectionContent: 'Extend the Shopify Admin with UI Extensions.',
      sectionCard: [
        {
          subtitle: 'Extension points',
          name: 'View all available extension points',
          url: '/docs/api/admin-extensions/components',
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
      anchorLink: 'extension-points-apis',
      title: 'Extension points and APIs',
      sectionContent:
        "POS UI extensions provide a set of extension points that you can use to build your extension. Every extension point has access to APIs. These APIs are a part of a larger API object that gets passed into the extend() function. You can use these APIs to interact with the POS. Note that if you're using React, you also have access to the useExtensionApi() hook. When using this hook, you can pass in the extension point to get the correct API object type returned from the hook. Not all APIs are available on every extension point. The following table includes all the available APIs, and the extension points that include them. If an API fails to perform an action, then it will throw an error. You can use a try/catch block to handle this scenario.",
      sectionCard: [
        {
          name: 'POS UI extension points',
          subtitle: 'Extension point reference',
          url: '/docs/api/checkout-ui-extensions/apis',
          type: 'blocks',
        },
        {
          name: 'POS UI extension APIs',
          subtitle: 'API reference',
          url: '/docs/api/checkout-ui-extensions/apis',
          type: 'blocks',
        },
      ],
      codeblock: {
        title: 'Tile extension point and cart API',
        tabs: [
          {
            title: 'React',
            code: './examples/extension-point-api.example.tsx',
            language: 'tsx',
          },
          {
            title: 'JS',
            code: './examples/extension-point-api.example.ts',
            language: 'js',
          },
        ],
      },
      initialLanguage: 'tsx',
    },
    {
      type: 'Generic',
      anchorLink: 'ui-components',
      title: 'Extension UI components',
      image: 'overview-ui-component-example.png',
      sectionContent:
        "POS UI extensions provide a set of components that you can use to build your extension. These components are available for the pos.home.tile.render and pos.home.modal.render extension points. If an extension fails to render, then the tile or the modal will show an error screen. Currently, it's not possible to view the render error, but this functionality will become available soon.",
      sectionCard: [
        {
          name: 'POS UI extension components',
          subtitle: 'Component reference',
          url: '/docs/api/checkout-ui-extensions/components',
          type: 'blocks',
        },
        {
          name: 'Figma UI kit',
          subtitle: 'UI Reference',
          url: 'https://www.figma.com/community/file/1255225508400961281',
          type: 'setting',
        },
      ],
    },
  ],
};

export default data;
