import type {CodeTabType, ExampleType, LinkType} from '@shopify/generate-docs';

const examplePath = '../examples';

export const REQUIRES_PROTECTED_CUSTOMER_DATA =
  'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) for some properties.';

type NonEmptyArray<T> = [T, ...T[]];
type ExtensionExampleLanguage = 'js' | 'jsx';
type ExtensionCodeTabConfig = {
  [key in ExtensionExampleLanguage]: {
    title: string;
    fileExtension: 'ts' | 'tsx';
  };
};
const codeExampleTabConfig: ExtensionCodeTabConfig = {
  js: {
    title: 'JavaScript',
    fileExtension: 'ts',
  },
  jsx: {
    title: 'React',
    fileExtension: 'tsx',
  },
};

/**
 * Returns all examples available, specified with a key for reference.
 */
export function getExamples(
  languages: NonEmptyArray<ExtensionExampleLanguage>,
): {
  [key: string]: ExampleType;
} {
  if (!languages || languages.length === 0) {
    throw new HelperDocsError(
      'You must define at least one extension code language context you wish to retrieve the example(s) for.',
    );
  }
  /**
   * Provides the code tab for the requested languages in "JavaScript" and "React".
   */
  function getExtensionCodeTabs(name: string): CodeTabType[] {
    return languages.map((language) => {
      return {
        code: `${examplePath}/${name}.example.${codeExampleTabConfig[language].fileExtension}`,
        language,
        title: codeExampleTabConfig[language].title,
      };
    });
  }

  // Add new examples here that can be shared across multiples pages.
  return {
    // The `name` of the example, used to reference this example with `getExample(name)` or `getHookExample(name)`.
    default: {
      // Shown in the example accordion or not shown at all if used as a default example on a page.
      description:
        "The extension API allows you to access information about the merchant's store, the customer's cart, and make changes.",
      // Shown on the right-hand side of the page.
      codeblock: {
        // Shared for each code tab.
        title: 'How extensions work',
        // Use `generateCodeTabs(name)` to ensure you have both "JavaScript" and "React" examples available.
        tabs: getExtensionCodeTabs('default'),
      },
    },
    // For examples specific to extension points that differ from the StandardApi, organize them into folders (<extension-point-name>/<example>).
    'cart-line-render-after/default': {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('cart-line-render-after/default'),
      },
    },
    api: {
      description: `
The extension API is passed as a parameter to the extension point function.
In React, you can access it from any component through the \`useExtensionApi()\` hook.
      `,
      codeblock: {
        title: 'Accessing Properties',
        tabs: getExtensionCodeTabs('api'),
      },
    },
    'api-subscribable': {
      description: `
Some API property values may change after the extension is rendered.
\`StatefulRemoteSubscribable\` properties allow you to subscribe to changes and perform a function or re-render your extension.

If you are using React, you can utilize the property's corresponding hook, or the [\`useSubscription()\`](/docs/api/checkout-ui-extensions/react-hooks/utilities/usesubscription) hook to subscribe to changes and automatically re-render your extension.
      `,
      codeblock: {
        title: 'Subscribing to changes',
        tabs: getExtensionCodeTabs('api-subscribable'),
      },
    },
    translate: {
      description: `
Define strings in JSON files for each locale and render them using \`translate()\`.
See [localizing UI extensions](/docs/apps/checkout/best-practices/localizing-ui-extensions) for more information.
      `,
      codeblock: {
        title: 'Translating strings',
        tabs: [
          ...getExtensionCodeTabs('translate'),
          ...[
            {
              code: `${examplePath}/translate.locale.example.json`,
              language: 'json',
              title: 'locales/en.default.json',
            },
          ],
        ],
      },
    },
    'translate-pluralization': {
      description: `
You can use the \`count\` option to get a pluralized string based on the current locale.
See [localizing UI extensions](/docs/apps/checkout/best-practices/localizing-ui-extensions) for more information.
      `,
      codeblock: {
        title: 'Translating strings with pluralization',
        tabs: [
          ...getExtensionCodeTabs('translate-pluralization'),
          ...[
            {
              code: `${examplePath}/translate-pluralization.locale.example.json`,
              language: 'json',
              title: 'locales/en.default.json',
            },
          ],
        ],
      },
    },
    'extension-points': {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('extension-points'),
      },
    },
    settings: {
      description: `
You can define settings that merchants can edit within the checkout editor.
See [settings](/docs/api/checkout-ui-extensions/configuration#settings-definition) for more information on how to define these.
      `,
      codeblock: {
        title: 'Define merchant settings',
        tabs: [
          {
            code: `${examplePath}/settings.example.toml`,
            language: 'toml',
            title: 'shopify.ui.extension.toml',
          },
        ],
      },
    },
    'settings-access': {
      description: `
You can retrieve settings values within your extension. In React, the \`useSettings()\` hook re-renders your extension with the latest values.
In JavaScript, subscribe to changes and update your UI directly.
      `,
      codeblock: {
        title: 'Accessing merchant settings',
        tabs: getExtensionCodeTabs('settings-access'),
      },
    },
    'storefront-query-api': {
      description: `
You can access the [Storefront GraphQL API](/docs/api/storefront) via the \`query()\` helper function.
Ensure your extension can use this API by [enabling the \`api_access\` capability](/docs/api/checkout-ui-extensions/configuration#api-access).
      `,
      codeblock: {
        title: 'Access the Storefront API with query',
        tabs: getExtensionCodeTabs('query-default'),
      },
    },
    'storefront-query-with-fetch': {
      description: `
You can access the [Storefront GraphQL API](/docs/api/storefront) using global \`fetch()\`.
Ensure your extension can access the Storefront API via the [\`api_access\` capability](/docs/api/checkout-ui-extensions/configuration#api-access).
      `,
      codeblock: {
        title: 'Accessing the Storefront API with fetch()',
        tabs: getExtensionCodeTabs('query-fetch'),
      },
    },
    'buyer-journey-intercept/page-level-error': {
      description: `Intercept and prevent a buyer's progress through checkout while displaying an error message at the page level.
        See the [validation tutorial](/docs/apps/checkout/validation) for more examples and best practices.`,
      codeblock: {
        title: 'Block progress and show error at page level',
        tabs: getExtensionCodeTabs('buyer-journey-intercept/page-level-error'),
      },
    },
    'buyer-journey-intercept/target-native-field': {
      description: `Intercept and prevent a buyer's progress through checkout while targeting a specific checkout UI field.
        See the [validation tutorial](/docs/apps/checkout/validation) for more examples and best practices.`,
      codeblock: {
        title: 'Block progress and show error for a checkout UI field',
        tabs: getExtensionCodeTabs(
          'buyer-journey-intercept/target-native-field',
        ),
      },
    },
    'buyer-journey-intercept/extension-banner': {
      description: `Intercept and prevent a buyer's progress through checkout while displaying an error message in your extension.
        See the [validation tutorial](/docs/apps/checkout/validation) for more examples and best practices.`,
      codeblock: {
        title: 'Block progress and show error in your extension',
        tabs: getExtensionCodeTabs('buyer-journey-intercept/extension-banner'),
      },
    },
    subscription: {
      description: '',
      codeblock: {
        title: 'Subscribing to changes',
        tabs: getExtensionCodeTabs('subscription'),
      },
    },
    'session-token': {
      description: `
You can request a session token from Shopify to use with your third party API calls.  The contents of the token claims are signed using your shared app secret so you can trust any information contained in the claims came from Shopify unaltered.

> Note: You will need to [enable the network_access capability](/docs/api/checkout-ui-extensions/configuration#network-access) to use \`fetch()\`.
`,
      codeblock: {
        title: 'Using a session token with fetch()',
        tabs: getExtensionCodeTabs('session-token'),
      },
    },
    'session-token-jwt': {
      description: `
The contents of the token are signed using your shared app secret.  The optional \`sub\` claim contains the customer's \`gid\` if they are logged in and your app has permission to read customer accounts. For example, a loyalty app that needs to check a customer's point balance can use the \`sub\` claim to verify the customer's account.

> Caution: Session tokens are _not_ authorization tokens and do not guarantee the request originated from Shopify.
`,
      codeblock: {
        title: 'Session token claims',
        tabs: [
          {
            code: `${examplePath}/session-token-jwt.example.json`,
            language: 'json',
            title: 'session-token.jwt',
          },
        ],
      },
    },
  };
}

const links: {[key: string]: LinkType[]} = {
  apis: [
    {
      name: 'StandardApi',
      subtitle: 'APIs',
      url: '/docs/api/checkout-ui-extensions/apis/standardapi',
      type: 'StandardApi',
    },
    {
      name: 'CartLineRenderAfterApi',
      subtitle: 'APIs',
      url: '/docs/api/checkout-ui-extensions/apis/cartlinerenderafterapi',
      type: 'CartLineRenderAfterApi',
    },
    {
      name: 'ExtensionPoints',
      subtitle: 'APIs',
      url: '/docs/api/checkout-ui-extensions/apis/extensionpoints',
      type: 'ExtensionPoints',
    },
  ],
  configuration: [
    {
      name: 'Configuration',
      subtitle: 'Overview',
      url: '/docs/api/checkout-ui-extensions/configuration',
      type: 'Configuration',
    },
    {
      name: 'Settings Definition',
      subtitle: 'Configuration',
      url: '/docs/api/checkout-ui-extensions/configuration#settings-definition',
      type: 'SettingsDefinition',
    },
    {
      name: 'Settings Examples',
      subtitle: 'APIs',
      url: '/docs/api/checkout-ui-extensions/apis/standardapi#example-settings',
      type: 'SettingsExamples',
    },
  ],
};

/**
 * Returns a specific Link that can be used as a related link on an entity.
 */
export function getLinkByType(type: string): LinkType {
  const link = Object.keys(links)
    .flatMap((key) => links[key])
    .find((link) => link.type === type);

  if (!link) {
    throw new HelperDocsError(
      `Could not find a matching link of the type "${type}". Does it exist within the file "src/docs/helper.docs.ts"?`,
    );
  }

  return link;
}

/**
 * Returns an array of `LinkType` that can be used as related links on an entity.
 * This uses a tag structure to allow you to group links together.
 * You can optinally exclude a specific type of link from the results
 */
export function getLinksByTag(name: string, excludeType?: string): LinkType[] {
  const linksByTag = links[name];
  if (!linksByTag) {
    throw new HelperDocsError(
      `Could not find a matching tag with the name "${name}". Does it exist within the file "src/docs/helper.docs.ts"?`,
    );
  }
  if (excludeType) {
    return linksByTag.filter((link) => link.type !== excludeType);
  }

  return linksByTag;
}

/**
 * Returns a specific `Example` by name, as specified in `getExamples()`.
 * Specify whether you want to include both `js` and `jsx`examples or just one.
 */
export function getExample(
  name: string,
  languages: NonEmptyArray<ExtensionExampleLanguage> = ['js'],
): ExampleType {
  const example = getExamples(languages)[name];
  if (!example) {
    throw new HelperDocsError(
      `Could not find a matching example with the name "${name}". Does it exist within the file "src/docs/helper.docs.ts?`,
    );
  }
  return example;
}

/**
 * Returns a specific react hook `Example` by name, as specified in `getExamples()`.
 */
export function getHookExample(name: string) {
  return getExample(name, ['jsx']);
}

class HelperDocsError extends Error {
  name = 'HelperDocsError';
}
