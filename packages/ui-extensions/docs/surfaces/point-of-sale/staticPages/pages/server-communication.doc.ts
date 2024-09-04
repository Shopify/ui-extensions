import type {LandingTemplateSchema} from '@shopify/generate-docs';

const examplePath = '../examples/server-communication';

const data: LandingTemplateSchema = {
  title: 'Communicate with a server',
  description:
    'Learn how to fetch data from your development server to your POS UI extension.',
  id: 'server-communication',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'authenticating',
      title: 'Authenticating with a development server',
      sectionContent: `
Often, an extension running on a simulator or a device will need to communicate with a development server running on a local machine. One solution is to use the [session API](/docs/api/pos-ui-extensions/apis/session-api) to get session tokens, and to pass these tokens to your development servers for [authentication](/docs/apps/auth/session-tokens/getting-started) using the [shopify_app gem](https://github.com/Shopify/shopify-api-ruby).
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'cors',
      title: 'CORS considerations',
      sectionContent: `Requests originating from an extension will be of origin **cdn.shopify.com** and **extensions.shopifycdn.com**. Your server needs to allow requests from both origins.`,
    },
    {
      type: 'Generic',
      anchorLink: 'https',
      title: 'HTTPS requirement',
      sectionContent: `
Shopify POS will refuse to fetch any non-HTTPS requests. Therefore, you must find a way to host your development server where it serves HTTPS requests. For example, a standard rails server will run on \`localhost:3000\`. Attempting to access this server from an Android emulator using \`10.0.2.2:3000\` will fail. One strategy is to use [Cloudflare Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/), which provide an HTTPS URL to connect.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'example-extension',
      title: 'Example extension',
      codeblock: {
        title: 'Example extension',
        tabs: [
          {
            title: 'Tile',
            code: `${examplePath}/tile.tsx`,
            language: 'tsx',
          },
          {
            title: 'Modal',
            code: `${examplePath}/modal.tsx`,
            language: 'tsx',
          },
        ],
      },
      sectionContent: `
Here is an example extension that presents a Smart Grid tile. When tapped, the tile will present a modal that uses the Session API to get a session token, and then fetches a test endpoint on the development server.
      `,
    },
  ],
};

export default data;
