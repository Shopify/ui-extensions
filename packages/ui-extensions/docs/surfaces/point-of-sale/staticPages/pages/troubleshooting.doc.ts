import type {LandingTemplateSchema} from '@shopify/generate-docs';

const examplePath = '../examples/troubleshooting';

const data: LandingTemplateSchema = {
  title: 'Troubleshooting',
  description:
    'Troubleshooting log for the POS UI Extensions library. Listed are some possible errors and resolutions to help aid in the event of unexpected error messages.',
  id: 'troubleshooting',
  image: '/assets/landing-pages/templated-apis/hero.png',
  darkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  tabletImage: '/assets/landing-pages/templated-apis/hero.png',
  tabletDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  mobileImage: '/assets/landing-pages/templated-apis/hero.png',
  mobileDarkImage: '/assets/landing-pages/templated-apis/hero-dark.png',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'extension-not-rendering-qr-code',
      title: 'Extension is not rendering when scanning the QR code',
      sectionContent: `
### Resolution

The extension only renders on the [development store](/docs/apps/tools/development-stores) chosen when running \`shopify app dev\`.

If you're experiencing issues, verify that:

1. You're using the correct development store that was selected during the \`shopify app dev\` setup
2. You're logged into Shopify POS with the same store account
      `,
    },
    {
      type: 'Generic',
      anchorLink: `api-or-component-not-working`,
      title: `An API or a component doesn't work despite following the documentation`,
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: `${examplePath}/api-component-not-working.txt`,
            language: 'text',
          },
        ],
      },
      sectionContent: `
### Resolution

The POS UI extensions documentation represents the latest version of our components and APIs. If you're using an older version of the POS UI extensions library, then some features mentioned in the documentation might not be available to you.

Visit the [changelog](/docs/api/pos-extensions/ui-extensions-reference/versions) to make sure you're using the latest version of POS UI extensions. Additionally, if your app has multiple extensions, please ensure that all extensions have the same version of the POS UI extensions library installed. Failure to do so may cause unexpected behavior when loading extensions from the development server. This will be fixed in a future release of the CLI.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'extension-qr-not-working-on-android',
      title: 'Extension QR code does not work on Android',
      codeblock: {
        title: 'Examples',
        tabs: [
          {
            title: 'Example 1',
            code: `${examplePath}/unable-to-access.txt`,
            language: 'text',
          },
          {
            title: 'Example 2',
            code: `${examplePath}/site-unreachable.txt`,
            language: 'text',
          },
        ],
      },
      sectionContent: `
### Resolution
Android devices can have a restriction on how deep links are handled. To resolve this issue, you can use one of the following options:

1. Connect the device to your computer. Use Android Studio to open your deep link by running the following command: adb shell am start "com.shopify.pos://pos-ui-extensions?url=<EXTENSION_URL>". Replace <EXTENSION_URL> with the URL that you want to test.

2. Download and use a deep link opener app from Play Store.
      `,
    },
    {
      type: 'Generic',
      anchorLink: `could-not-resolve`,
      title: 'Could not resolve...',
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: `${examplePath}/could-not-resolve.txt`,
            language: 'text',
          },
        ],
      },
      sectionContent: `
### Resolution

This error is most likely from missing a dependency in package.json in the app root. Try re-installing your dependencies and running the app again.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'cannot-be-used-as-jsx',
      title: '... cannot be used as a JSX component',
      codeblock: {
        title: 'Example',
        tabs: [
          {
            code: `${examplePath}/cannot-be-used-as-jsx.txt`,
            language: 'text',
          },
        ],
      },
      sectionContent: `### Resolution

This issue commonly happens when \`Yarn\` is used for dependency management. The package's version was updated but \`npm\` conflicts with \`Yarn\`. In the root of your application run \`npm install\` to get it up to date as well. Restart your IDE if necessary.`,
    },
    {
      type: 'Generic',
      anchorLink: 'session-token-null',
      title: 'Session tokens are being returned as null',
      sectionContent: `
### Resolution

The \`getSessionToken()\` function returns \`null\` when the authenticated user (the user that logged into Shopify POS with their email address) doesn't have the correct app permissions enabled for your app. Session tokens are only returned for authenticated users who have enabled the correct app permission for the app making the request. This is irrelevant of POS Staff members, as those are not authenticated users. 

To resolve this issue:

1. **Check app permissions**: Verify that the authenticated user has the correct app permission enabled for your app. This can be seen in the Shopify Admin by navigating to Settings > Users > Select a user > Scroll down to view the permissions summary.

2. **Enable app permissions**: If the user does not have permissions to use your app, it can be added to one of the roles that is assigned to that user. This can be done in the Shopify Admin by navigating to Settings > Users > Roles > Select a role. You can then scroll down to the apps section and select the app for which you want to grant the user permissions.

For more information on configuring and managing app permissions, see the [Shopify app permissions documentation](https://help.shopify.com/en/manual/your-account/users/roles/permissions/store-permissions#apps-and-channels-permissions).
      `,
    },
  ],
};

export default data;
