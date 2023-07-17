/* eslint-disable no-template-curly-in-string */
import {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Admin UI Extensions',
  description:
    'Admin UI Extensions are a way to extend the Shopify Admin experience. The extensions can be used to add new functionality to the Shopify Admin. It allows you to integrate your app into the Shopify Admin in a more meaningful way.',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  id: 'admin-extensions',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'actionExtensions',
      title: 'Overview',
      image: 'action-extension-example.gif',
      sectionContent: 'Extend the Shopify Admin with UI Extensions.',
      sectionNotice: [
        {
          title: 'Developer Preview',
          sectionContent:
            'Please note that Admin Action Extensions and Admin Block Extensions are currently in developer preview. You can only render them while developing locally on a development store.',
          type: 'warning',
        },
      ],
      sectionCard: [
        {
          name: 'Get started building your first admin extension',
          subtitle: 'Tutorial',
          url: '#gettingStarted',
          type: 'tutorial',
        },
        {
          subtitle: 'Component APIs',
          name: 'See all available components',
          url: 'admin-extensions/components',
          type: 'blocks',
        },
        {
          subtitle: 'Reference',
          name: 'View a list of available extension targets',
          url: 'apis/extension-points',
          type: 'app',
        },
        {
          subtitle: 'Direct API access',
          name: 'Access the Shopify GraphQL API directly',
          url: '#directAPIAccess',
          type: 'tool',
        },
        {
          subtitle: 'Custom Protocols',
          name: 'Easily construct URLs to navigate to common localtions',
          url: '#directAPIAccess',
          type: 'gear',
        },
        {
          subtitle: 'UI Reference',
          name: 'Figma UI Kit (coming soon)',
          url: '#',
          type: 'figma',
        },
      ],
    },
    {
      type: 'Generic',
      anchorLink: 'gettingStarted',
      sectionContent:
        'To get started, create a new app and cd into the app directory. Then generate an extension.',
      title: 'Getting Started',
      codeblock: {
        title: 'Generate an extension',
        tabs: [
          {
            code: './examples/getting-started.ts',
            language: 'bash',
            title: 'CLI',
          },
        ],
      },
    },
    {
      type: 'Generic',
      title: 'Direct API access',
      sectionContent:
        "Make requests to Shopify directly from your extension, simply use `fetch`! The access scopes you have in your extension are the same as the access scopes you have in your app. If you need to make a request to a resource that requires a different access scope, update your app's access scopes.",
      anchorLink: 'directAPIAccess',
      codeblock: {
        title: 'Query Shopify data',
        tabs: [
          {
            code: './examples/direct-api.tsx',
            language: 'tsx',
            title: 'Get Product Data',
          },
        ],
      },
    },
    {
      type: 'GenericAccordion',
      title: 'Custom Protocols',
      sectionContent:
        'Custom protocols make it easier to navigate to common locations, and construct URLs.',
      anchorLink: 'customProtocols',
      accordionContent: [
        {
          title: '"shopify:admin"',
          description:
            'Use the shopify protocol when you want to construct a URL with a root of the Shopify Admin.',
          codeblock: {
            title: 'shopify:admin',
            tabs: [
              {
                title: 'Link to Product Page',
                language: 'tsx',
                code: '<Link to="shopify:admin/products/1234567890" />',
              },
              {
                title: 'Fetch data',
                language: 'ts',
                code: `fetch("shopify:admin/api/graphql.json", {
  method: "POST",
  body: JSON.stringify(simpleProductQuery),
});`,
              },
            ],
          },
        },
        {
          title: '"app:"',
          description:
            'Use the app protocol to construct a URL for your app. Shopify will handle constructing the base URL for your app. This works for both embedded and non-embedded apps.',
          codeblock: {
            title: 'app:',
            tabs: [
              {
                title: 'Link to Product Page',
                language: 'tsx',
                code: '<Link to="app:settings/advanced" />',
              },
            ],
          },
        },
        {
          title: '"extension:"',
          description: 'Triggers an action extension from a block extension.',
          codeblock: {
            title: 'extension:',
            tabs: [
              {
                title: 'Trigger Action Extension from a Block extension',
                language: 'tsx',
                code: '<Link to={`extension:${extension.handle}/${extensionTarget}`} />',
              },
            ],
          },
        },
        {
          title: '"/relative/urls"',
          description:
            'Relative urls are relative to the extension you are creating. This is useful when you want to link to a route within your extension.',
          codeblock: {
            title: '/relative/urls',
            tabs: [
              {
                title: 'Link to route in your extension',
                language: 'tsx',
                code: '<Link to={`/reviews/${product.id}`} />',
              },
            ],
          },
        },
      ],
    },
  ],
};

export default data;
