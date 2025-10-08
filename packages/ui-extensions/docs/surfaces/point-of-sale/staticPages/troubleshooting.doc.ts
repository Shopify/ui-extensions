import type {LandingTemplateSchema} from '@shopify/generate-docs';

const examplePath = './examples/troubleshooting';

const data: LandingTemplateSchema = {
  title: 'Troubleshooting',
  description:
    'Troubleshooting log for the POS UI Extensions package. Listed are some possible errors and resolutions to help aid in the event of unexpected error messages.',
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
  ],
};

export default data;
