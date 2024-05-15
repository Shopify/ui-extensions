import type {LandingTemplateSchema} from '@shopify/generate-docs';

const examplePath = '../examples/getting-started';

const data: LandingTemplateSchema = {
  title: 'Getting started with POS UI extensions',
  description:
    'Learn how to prepare your development environment to start building POS UI extensions.',
  id: 'getting-started',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'what-youll-learn',
      title: "What you'll learn",
      sectionContent: `
In this tutorial, you'll learn how to do the following tasks:

- Generate a POS UI extension using Shopify CLI.
- Run the local extension in your development store.
- Test your app in Shopify POS.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'requirements',
      title: 'Requirements',
      sectionContent: `
- Create a [development store](/docs/apps/tools/development-stores).
- Install or migrate to [Shopify CLI version 3.0 or higher](/docs/apps/tools/cli).
- Create an [app](/docs/apps/getting-started/create).
- Embed [your app in Shopify POS](/docs/apps/pos/getting-started#embed-your-in-app-in-shopify-pos).
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'step-1-generate-a-pos-ui-extension',
      title: 'Step 1: Generate a POS UI Extension',
      codeblock: {
        title: 'Generate a POS UI Extension',
        tabs: [
          {code: `${examplePath}/generate-extension.bash`, language: 'bash'},
        ],
      },
      sectionContent: `
1. Navigate to your app directory.

2. Ensure Shopify CLI is using the most up to date versions.

3. Generate your POS UI extension template.

4. Select \`POS UI\` under the Point-of-Sale menu.

5. Give your extension a working name.

6. Select the programming language that you want to work in.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'step-2-run-the-local-extension-in-your-development-store',
      title: 'Step 2: Run the local extension in your development store',
      codeblock: {
        title: 'Install dependencies and start a local development server',
        tabs: [
          {
            title: 'npm',
            code: `${examplePath}/app-dev-npm.bash`,
            language: 'bash',
          },
          {
            title: 'yarn',
            code: `${examplePath}/app-dev-yarn.bash`,
            language: 'bash',
          },
        ],
      },
      sectionContent: `
After you create your extension, you can [start a local development server](/docs/apps/getting-started/create#step-2-start-a-local-development-server) so that you can run your extension in your development store.

When you start the server, Shopify CLI uses [Cloudflare](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/) to create a secure tunnel. Cloudflare gives your app extension a unique URL.

1. Install your project's dependencies using the command from your package manager of choice.

2. Start your local server for your extension in the app directory.

3. Follow the prompts to associate your extension with your app and development store. Your development server should now be running.

![Local Development Server Example](/assets/apps/pos/ui-ext-dev-server-console.png)

To learn more about the processes that execute when you run \`dev\`, refer to the list of [Shopify CLI commands](/docs/api/shopify-cli/app/app-dev).
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'step-3-install-your-app-and-preview-your-extension',
      title: 'Step 3: Install your app and preview your extension',
      sectionContent: `
You can install your app and preview your extension in Shopify POS from the developer console.

1. With your server running, press \`p\` to open the developer console.

2. To preview your extension, select the **View mobile** button. This generates a deep link or QR code.

3. Using a mobile device with the Shopify POS app installed, scan the QR code. This opens Shopify POS on your device and installs the extension in preview mode. If your extension's URL changes, you will need to re-add the smart grid extension tile.

> Tip:
> If you're using Android and your extension isn't loading, then refer to the [troubleshooting guide](/docs/apps/pos/ui-extensions/troubleshooting).

![The developer console showing a POS UI extension](/assets/apps/pos/ui-ext-dev-console.png)
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'updating',
      title: 'Updating',
      sectionContent: `
You can refer to the [list of the available POS UI Extension versions](/docs/api/pos-extensions/ui-extensions-reference/versions) to see if you are using the latest one.

Merchants can manage their POS UI extensions across locations from the POS channel. You can direct merchants to this capability in your merchant facing communication: \`https://admin.shopify.com/store/{shop}/apps/point-of-sale-channel/settings/pos-ui-extensions\`
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'next-steps',
      title: 'Next steps',
      sectionContent: `
- Follow along with an [example discount extension](/docs/api/pos-ui-extensions/example-discount-extension).
- Explore the full [reference of Shopify retail APIs and components](/docs/api/pos-ui-extensions) that you can use for your POS UI extension.
- Learn how to [deploy and release an app extension](/docs/apps/deployment/app-versions).
        `,
    },
  ],
};

export default data;
