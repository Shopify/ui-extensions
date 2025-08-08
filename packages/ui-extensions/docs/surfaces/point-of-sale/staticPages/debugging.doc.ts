import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Debugging',
  description: 'Discover how you can debug your POS UI Extensions.',
  id: 'debugging',
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
      sectionContent: `
APIs and components will report if they receive parameters of an unexpected type. For further debugging, you can use \`console.log\` to print any additional information in the console.

### APIs
If an API receives an incorrect parameter, it won't attempt to perform the action and it will \`throw\` an error instead. This error can be viewed either by implementing a \`try/catch\` block or by using the Chrome console.

### Components

If a component is given an incorrect parameter, the extension will be replaced with a non-descriptive user interface that indicates an issue has occurred. In case the extension is running locally, the developer will also see the exact error displayed as a toast message.

**In the future we plan to modify this behavior to display the error in the Chrome console instead, aligning with the API approach.**`,
    },
    {
      type: 'Generic',
      anchorLink: `debugging-on-android`,
      title: `Debugging on Android`,
      sectionContent: `
This section covers how to view POS UI Extension logs and errors on Android devices.

### Requirements

- The extension needs to be running on a [development store](/docs/apps/tools/development-stores) in the POS app. Debugging is only available on development stores. You can create a development store from the Partner Portal, or you can use an existing development store for debugging purposes.
![Development store](/assets/api/pos/debug-development-store.png)
- You've set up an Android Studio emulator, or you have an Android device available with the POS app installed. If you use an Android device, you can follow the [Chrome developer documentation](https://developer.chrome.com/docs/devtools/remote-debugging/) to set up a device for debugging purposes.

### Android

1. Connect the Android device to your computer or launch the Android emulator.
2. Make sure the POS UI Extension is running on the POS app.
3. Using Google Chrome, navigate to <a href=chrome://inspect>chrome://inspect</a>.
4. The UI Extension sandbox should appear on the list as "Shopify UI Extensions Internal"
5. Click the inspect button. This should open a DevTools window, where you will be able to interact with the console, and view \`console.log\` statements in your code along with inspecting the network activity.

### Demo

The following demo shows how to debug a POS UI Extension on Android by using the Chrome dev tools. The example extension code has \`console.log\` statements when the SmartGrid tile is pressed to open modal.

![Debugging demo](/assets/api/pos/debug-ui-extension.gif)
`,
    },
    {
      type: 'Generic',
      anchorLink: `debugging-on-ios`,
      title: `Debugging on iOS`,
      sectionContent: `
This section covers how to view POS UI Extension logs and errors on iOS devices.

### Requirements

- The extension needs to be running on a [development store](/docs/apps/tools/development-stores) in the POS app. Debugging is only available on development stores. You can create a development store from the Partner Portal, or you can use an existing development store for debugging purposes.
![Development store](/assets/api/pos/debug-development-store.png)
- You have an iOS device available with the POS app installed. Please follow the [Safari documentation](https://support.apple.com/en-ca/guide/safari/sfri20948/mac) to set up dev tooling.

### iOS

1. Connect the iOS device to your computer.
2. Make sure the POS UI Extension is running on the POS app.
3. Using Safari on your computer, click the 'Develop' menu in the top toolbar.
4. You should see your iOS device appear there. Select it. A new menu will appear, and you can then select the load.html context.
5. This should open a new window, where you will be able to interact with the console, and view \`console.log\` statements in your code along with inspecting the network activity.

### Demo

The following demo shows ow to debug a POS UI Extension on iOS by using the Safari dev tools. The example extension code has \`console.log\` statements that appear when we open the Safari dev tools.

![Debugging demo](/assets/api/pos/debug-ui-extension-ios.gif)
`,
    },
  ],
};

export default data;
