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
  ],
};

export default data;
