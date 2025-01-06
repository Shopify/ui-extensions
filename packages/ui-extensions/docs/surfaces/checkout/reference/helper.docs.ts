import type {CodeTabType, ExampleType, LinkType} from '@shopify/generate-docs';

const examplePath = '../examples';

export const REQUIRES_PROTECTED_CUSTOMER_DATA =
  'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) for some properties.';

export const REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2 =
  'level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).';

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

interface OptionalCodeMetadata {
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Returns all examples available, specified with a key for reference.
 */
export function getExamples(
  languages: NonEmptyArray<ExtensionExampleLanguage>,
): Record<string, ExampleType> {
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

  function createExample(
    id: string,
    metadata?: OptionalCodeMetadata,
  ): Record<string, ExampleType> {
    return {
      [id]: {
        description: metadata?.description ?? '',
        image: metadata?.image ?? undefined,
        codeblock: {
          title: metadata?.title ?? ` ${id.replace('/default', '')}`,
          tabs: getExtensionCodeTabs(id),
        },
      },
    };
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
    ...createExample('purchase.address-autocomplete.suggest/default'),
    ...createExample('purchase.address-autocomplete.format-suggestion/default'),
    ...createExample('purchase.cart-line-item.line-components.render/default'),
    ...createExample('purchase.checkout.actions.render-before/default'),
    ...createExample('purchase.checkout.block.render/default'),
    ...createExample('purchase.checkout.cart-line-item.render-after/default'),
    ...createExample('purchase.checkout.cart-line-list.render-after/default'),
    ...createExample('purchase.checkout.contact.render-after/default'),
    ...createExample('purchase.checkout.delivery-address.render-after/default'),
    ...createExample(
      'purchase.checkout.delivery-address.render-before/default',
    ),
    ...createExample(
      'purchase.checkout.payment-method-list.render-after/default',
    ),
    ...createExample(
      'purchase.checkout.payment-method-list.render-before/default',
    ),
    ...createExample(
      'purchase.checkout.pickup-location-list.render-after/default',
    ),
    ...createExample(
      'purchase.checkout.pickup-location-list.render-before/default',
    ),
    ...createExample(
      'purchase.checkout.pickup-location-option-item.render-after/default',
    ),
    ...createExample(
      'purchase.checkout.pickup-point-list.render-after/default',
    ),
    ...createExample(
      'purchase.checkout.pickup-point-list.render-before/default',
    ),
    ...createExample('purchase.checkout.reductions.render-after/default'),
    ...createExample('purchase.checkout.reductions.render-before/default'),
    ...createExample(
      'purchase.checkout.shipping-option-item.details.render/default',
    ),
    ...createExample(
      'purchase.checkout.shipping-option-item.render-after/default',
    ),
    ...createExample(
      'purchase.checkout.shipping-option-list.render-after/default',
    ),
    ...createExample(
      'purchase.checkout.shipping-option-list.render-before/default',
    ),
    ...createExample('purchase.thank-you.block.render/default'),
    ...createExample('purchase.thank-you.cart-line-item.render-after/default'),
    ...createExample('purchase.thank-you.cart-line-list.render-after/default'),
    ...createExample(
      'purchase.thank-you.customer-information.render-after/default',
    ),
    ...createExample('purchase.checkout.header.render-after/default'),
    ...createExample('purchase.checkout.footer.render-after/default'),
    ...createExample('purchase.thank-you.header.render-after/default'),
    ...createExample('purchase.thank-you.footer.render-after/default'),
    ...createExample('purchase.checkout.chat.render/default'),
    ...createExample('purchase.thank-you.chat.render/default'),
    'analytics-publish': {
      description:
        'You can publish analytics events to the Shopify analytics frameworks and they will be propagated to all web pixels on the page.',
      codeblock: {
        title: 'Publish',
        tabs: getExtensionCodeTabs('analytics-publish'),
      },
    },
    'analytics-visitor': {
      description:
        'You can submit visitor information to Shopify, these will be sent to the shop backend and not be propagated to web pixels on the page.',
      codeblock: {
        title: 'Visitor',
        tabs: getExtensionCodeTabs('analytics-visitor'),
      },
    },
    // For examples specific to extension targets that differ from the StandardApi, organize them into folders (<extension-point-name>/<example>).
    'cart-line-item/default': {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('cart-line-item/default'),
      },
    },
    'pickup-point-list/default': {
      description: '',
      codeblock: {
        title: 'Determine if the location input form is shown',
        tabs: getExtensionCodeTabs('pickup-point-list/default'),
      },
    },
    'shipping-option-item/default': {
      description: '',
      codeblock: {
        title: 'Reading the selected shipping option',
        tabs: getExtensionCodeTabs('shipping-option-item/default'),
      },
    },
    'pickup-location-list/default': {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('pickup-location-list/default'),
      },
    },
    'purchase.checkout.pickup-location-option-item.render-after/default': {
      description: '',
      codeblock: {
        title: 'Reading the selected pickup location option',
        tabs: getExtensionCodeTabs(
          'purchase.checkout.pickup-location-option-item.render-after/default',
        ),
      },
    },
    'order-confirmation/default': {
      description: '',
      codeblock: {
        title: 'Order confirmation',
        tabs: getExtensionCodeTabs('order-confirmation/default'),
      },
    },
    'checkout/default': {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('checkout/default'),
      },
    },
    api: {
      description: `
The extension API is passed as a parameter to the extension target function.
In React, you can access it from any component through the \`useApi()\` hook.
      `,
      codeblock: {
        title: 'Accessing Properties',
        tabs: getExtensionCodeTabs('api'),
      },
    },
    'extension-api': {
      description: `
The extension API is passed as a parameter to the extension target function.
In React, you can access it from any component through the \`useExtensionApi()\` hook.
      `,
      codeblock: {
        title: 'Accessing Properties',
        tabs: getExtensionCodeTabs('extension-api'),
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
    'extension-targets': {
      description: '',
      codeblock: {
        title: '',
        tabs: [
          ...getExtensionCodeTabs('extension-targets'),
          {
            code: `${examplePath}/extension-targets.example.toml`,
            language: 'toml',
            title: 'shopify.extension.toml',
          },
        ],
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
            title: 'shopify.extension.toml',
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

The \`shopify:storefront\` protocol will automatically infer your Storefront URL and API version declared in your extension config.

By omitting the API version (recommended), Shopify will use your API version configured in \`shopify.extension.toml\`. To change the API version, simply add it to the URL like \`shopify:storefront/api/2024-04/graphql.json\`.

See [Storefront GraphQL API endpoints](/docs/api/storefront#endpoints) for more information.
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
    'payments/use-available-payment-options': {
      description: '',
      codeblock: {
        title: 'Available payment options',
        tabs: getExtensionCodeTabs('payments/use-available-payment-options'),
      },
    },
    'payments/use-selected-payment-options': {
      description: '',
      codeblock: {
        title: 'Selected payment options',
        tabs: getExtensionCodeTabs('payments/use-selected-payment-options'),
      },
    },
    'customer-privacy/default': {
      description: '',
      codeblock: {
        title: 'Read Customer Privacy',
        tabs: getExtensionCodeTabs('customer-privacy/default'),
      },
    },
    'customer-privacy/sheet-consent-banner-with-form': {
      description: `
You can apply changes to customer consent by using the \`applyTrackingConsentChanges\` API.

> Note: Requires the [\`customer_privacy\` capability](https://shopify.dev/docs/api/checkout-ui-extensions/unstable/configuration#collect-buyer-consent) to be set to \`true\`.`,
      codeblock: {
        title: 'Use a Sheet to manage customer privacy consent',
        tabs: getExtensionCodeTabs(
          'customer-privacy/sheet-consent-banner-with-form',
        ),
      },
    },
    subscription: {
      description: '',
      codeblock: {
        title: 'Subscribing to changes',
        tabs: getExtensionCodeTabs('subscription'),
      },
    },
    'localized-fields/default': {
      description: '',
      codeblock: {
        title: 'Read localized fields',
        tabs: getExtensionCodeTabs('localized-fields/default'),
      },
    },
    'session-token': {
      description: `
You can request a session token from Shopify to use on your application server.  The contents of the token claims are signed using your shared app secret so you can trust the claims came from Shopify unaltered.

> Note: You will need to [enable the \`network_access\` capability](/docs/api/checkout-ui-extensions/configuration#network-access) to use \`fetch()\`.
`,
      codeblock: {
        title: 'Using a session token with fetch()',
        tabs: getExtensionCodeTabs('session-token'),
      },
    },
    'session-token-jwt': {
      description: `
The contents of the token are signed using your shared app secret.  The optional \`sub\` claim contains the customer's \`gid\` if they are logged in and your app has permission to read customer accounts. For example, a loyalty app that needs to check a customer's point balance can use the \`sub\` claim to verify the customer's account.

> Caution:
> Your app server can only trust the claims within the session token. It cannot use the token to trust the entire HTTP request. See [security considerations](/docs/api/checkout-ui-extensions/configuration#network-access) for details.
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
    storage: {
      description: '',
      codeblock: {
        title: 'Storage',
        tabs: getExtensionCodeTabs('storage'),
      },
    },
    'delivery-groups': {
      description: '',
      codeblock: {
        title: 'Delivery groups',
        tabs: getExtensionCodeTabs('delivery-groups'),
      },
    },
    'delivery-group': {
      description: '',
      codeblock: {
        title: 'Delivery group',
        tabs: getExtensionCodeTabs('delivery-group'),
      },
    },
    'attribute-values': {
      description: '',
      codeblock: {
        title: 'Attribute values',
        tabs: getExtensionCodeTabs('attribute-values'),
      },
    },
    'ui-close-overlay': {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('ui-components/overlay-close'),
      },
    },
    ...createExample('cart-instructions/attributes', {
      title: 'Attributes',
      description: `
      Check \`instructions.attributes.canUpdateAttributes\` before calling \`applyAttributeChange()\`.
      `,
    }),
    ...createExample('cart-instructions/cart-lines-add', {
      title: 'Lines',
      description: `
      Check \`instructions.lines.canAddCartLine\` or \`instructions.lines.canRemoveCartLine\` or \`instructions.lines.canUpdateCartLine\` before calling \`applyCartLinesChange()\`.
      `,
    }),
    ...createExample('cart-instructions/delivery', {
      title: 'Delivery',
      description: `
      Check \`instructions.delivery.canSelectCustomAddress\` before calling \`applyShippingAddressChange()\`. When \`true\`, this instruction implies that extensions can change the shipping address.
      `,
    }),
    ...createExample('cart-instructions/discounts', {
      title: 'Discounts',
      description: `
      Check \`instructions.discounts.canUpdateDiscountCodes\` before calling \`applyDiscountCodeChange()\`.
      `,
    }),
    ...createExample('cart-instructions/metafields', {
      title: 'Metafields',
      description: `
      Check \`instructions.metafields.canSetCartMetafields\` or \`instructions.metafields.canDeleteCartMetafields\` before calling \`applyMetafieldChange()\` if you are working with cart metafields.
      `,
    }),
    ...createExample('cart-instructions/notes', {
      title: 'Notes',
      description: `
      Check \`instructions.notes.canUpdateNote\` before calling \`applyNoteChange()\`.
      `,
    }),
  };
}

const links: Record<string, LinkType[]> = {
  apis: [
    {
      name: 'Targets',
      subtitle: 'Reference',
      url: '/docs/api/checkout-ui-extensions/targets',
      type: 'blocks',
    },
    {
      name: 'Components',
      subtitle: 'Reference',
      url: '/docs/api/checkout-ui-extensions/components',
      type: 'apps',
    },
    {
      name: 'Configuration',
      subtitle: 'Reference',
      url: '/docs/api/checkout-ui-extensions/configuration',
      type: 'gear',
    },
    {
      name: 'Tutorials',
      subtitle: 'Learn',
      url: '/apps/checkout',
      type: 'tutorial',
    },
  ],
  configuration: [
    {
      name: 'Configuration',
      subtitle: 'Overview',
      url: '/docs/api/checkout-ui-extensions/configuration',
      type: 'gear',
    },
    {
      name: 'Settings Definition',
      subtitle: 'Configuration',
      url: '/docs/api/checkout-ui-extensions/configuration#settings-definition',
      type: 'gear',
    },
    {
      name: 'Settings Examples',
      subtitle: 'APIs',
      url: '/docs/api/checkout-ui-extensions/apis/standardapi#example-settings',
      type: 'gear',
    },
  ],
  targets: [
    {
      name: 'APIs',
      subtitle: 'Reference',
      url: '/docs/api/checkout-ui-extensions/targets',
      type: 'blocks',
    },
    {
      name: 'Components',
      subtitle: 'Reference',
      url: '/docs/api/checkout-ui-extensions/components',
      type: 'apps',
    },
    {
      name: 'Configuration',
      subtitle: 'Reference',
      url: '/docs/api/checkout-ui-extensions/configuration',
      type: 'gear',
    },
    {
      name: 'Tutorials',
      subtitle: 'Learn',
      url: '/apps/checkout',
      type: 'tutorial',
    },
  ],
};

/**
 * Returns an array of `LinkType` that can be used as related links on an entity.
 * This uses a tag structure to allow you to group links together.
 * You can optionally exclude a specific type of link from the results
 */
export function getLinksByTag(
  name: string,
  excludeLinkName?: string,
): LinkType[] {
  const linksByTag = links[name];
  if (!linksByTag) {
    throw new HelperDocsError(
      `Could not find a matching tag with the name "${name}". Does it exist within the file "docs/reference/helper.docs.ts"?`,
    );
  }
  if (excludeLinkName) {
    return linksByTag.filter((link) => link.name !== excludeLinkName);
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
      `Could not find a matching example with the name "${name}". Does it exist within the file "docs/reference/helper.docs.ts" in getExamples()?`,
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

const CHECKOUT_API_DEFINITION = {
  title: 'CheckoutApi',
  description:
    'The API object provided to this and other `purchase.checkout` extension targets.',
  type: 'CheckoutApi',
};

const STANDARD_API_DEFINITION = {
  title: 'StandardApi',
  description:
    'The base API object provided to this and other `purchase.checkout` and `purchase.thank-you` extension targets.',
  type: 'StandardApi',
};

const ADDRESS_AUTOCOMPLETE_STANDARD_API_DEFINITION = {
  title: 'AddressAutocompleteStandardApi',
  description:
    'The base API object provided to this and other `purchase.address-autocomplete` extension targets.',
  type: 'AddressAutocompleteStandardApi',
};

const ADDRESS_AUTOCOMPLETE_SUGGEST_API_DEFINITION = {
  title: 'AddressAutocompleteSuggestApi',
  description:
    'The API object provided to the `purchase.address-autocomplete.suggest` extension target.',
  type: 'AddressAutocompleteSuggestApi',
};

const ADDRESS_AUTOCOMPLETE_SUGGEST_OUTPUT_DEFINITION = {
  title: 'AddressAutocompleteSuggestOutput',
  description:
    'The object expected to be returned by the `purchase.address-autocomplete.suggest` extension target.',
  type: 'AddressAutocompleteSuggestOutput',
};

const ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_API_DEFINITION = {
  title: 'AddressAutocompleteFormatSuggestionApi',
  description:
    'The API object provided to the `purchase.address-autocomplete.format-suggestion` extension target.',
  type: 'AddressAutocompleteFormatSuggestionApi',
};

const ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_OUTPUT_DEFINITION = {
  title: 'AddressAutocompleteFormatSuggestionOutput',
  description:
    'The object expected to be returned by the `purchase.address-autocomplete.format-suggestion` extension target.',
  type: 'AddressAutocompleteFormatSuggestionOutput',
};

const CART_LINE_ITEM_API_DEFINITION = {
  title: 'CartLineItemApi',
  description:
    'The API object provided to this and other `cart-line-item` extension targets.',
  type: 'CartLineItemApi',
};

const ORDER_CONFIRMATION_API_DEFINITION = {
  title: 'OrderConfirmationApi',
  description:
    'The API object provided to this and other `purchase.thank-you` extension targets.',
  type: 'OrderConfirmationApi',
};

const PICKUP_LOCATION_LIST_API_DEFINITION = {
  title: 'PickupLocationListApi',
  description:
    'The API object provided to this and other `pickup-location-list` extension targets.',
  type: 'PickupLocationListApi',
};

const PICKUP_LOCATION_ITEM_API_DEFINITION = {
  title: 'PickupLocationItemApi',
  description:
    'The API object provided to this and other `pickup-location-option-item` extension targets.',
  type: 'PickupLocationItemApi',
};

const PICKUP_POINT_LIST_API_DEFINITION = {
  title: 'PickupPointListApi',
  description:
    'The API object provided to this and other `pickup-point-list` extension targets.',
  type: 'PickupPointListApi',
};

const SHIPPING_OPTION_ITEM_API_DEFINITION = {
  title: 'ShippingOptionItemApi',
  description:
    'The API object provided to this and other `shipping-option-item` extension targets.',
  type: 'ShippingOptionItemApi',
};

const SHIPPING_OPTION_LIST_API_DEFINITION = {
  title: 'ShippingOptionListApi',
  description:
    'The API object provided to this and other `shipping-option-list` extension targets.',
  type: 'ShippingOptionListApi',
};

const COMMON_API = {
  category: 'Targets',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  type: 'Target',
};

export const STANDARD_API = {
  definitions: [STANDARD_API_DEFINITION],
  ...COMMON_API,
};

export const CHECKOUT_API = {
  definitions: [CHECKOUT_API_DEFINITION, STANDARD_API_DEFINITION],
  ...COMMON_API,
};

export const ADDRESS_AUTOCOMPLETE_SUGGEST_API = {
  definitions: [
    ADDRESS_AUTOCOMPLETE_SUGGEST_API_DEFINITION,
    ADDRESS_AUTOCOMPLETE_SUGGEST_OUTPUT_DEFINITION,
    ADDRESS_AUTOCOMPLETE_STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_API = {
  definitions: [
    ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_API_DEFINITION,
    ADDRESS_AUTOCOMPLETE_FORMAT_SUGGESTION_OUTPUT_DEFINITION,
    ADDRESS_AUTOCOMPLETE_STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const CART_LINE_ITEM_API = {
  subCategory: 'Order Summary',
  definitions: [CART_LINE_ITEM_API_DEFINITION, STANDARD_API_DEFINITION],
  ...COMMON_API,
};

export const CHECKOUT_CART_LINE_ITEM_API = {
  subCategory: CART_LINE_ITEM_API.subCategory,
  definitions: [
    CART_LINE_ITEM_API_DEFINITION,
    CHECKOUT_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const THANK_YOU_API = {
  definitions: [ORDER_CONFIRMATION_API_DEFINITION, STANDARD_API_DEFINITION],
  ...COMMON_API,
};

export const THANK_YOU_CART_LINE_ITEM_API = {
  subCategory: 'Order Summary',
  definitions: [
    ORDER_CONFIRMATION_API_DEFINITION,
    CART_LINE_ITEM_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const PICKUP_LOCATION_LIST_API = {
  subCategory: 'Local Pickup',
  definitions: [
    PICKUP_LOCATION_LIST_API_DEFINITION,
    CHECKOUT_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const PICKUP_LOCATION_ITEM_API = {
  subCategory: 'Local Pickup',
  definitions: [
    PICKUP_LOCATION_ITEM_API_DEFINITION,
    CHECKOUT_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const PICKUP_POINT_LIST_API = {
  subCategory: 'Pickup Points',
  definitions: [
    PICKUP_POINT_LIST_API_DEFINITION,
    CHECKOUT_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const SHIPPING_OPTION_ITEM_API = {
  subCategory: 'Shipping',
  definitions: [
    SHIPPING_OPTION_ITEM_API_DEFINITION,
    CHECKOUT_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const SHIPPING_OPTION_LIST_API = {
  subCategory: 'Shipping',
  definitions: [
    SHIPPING_OPTION_LIST_API_DEFINITION,
    CHECKOUT_API_DEFINITION,
    STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const STANDARD_API_PROPERTIES_DESCRIPTION =
  'The base API object provided to `purchase` extension targets.';

export const CHECKOUT_API_PROPERTIES_DESCRIPTION =
  'The API object provided to `purchase.checkout` extension targets.';

export const ORDER_CONFIRMATION_API_PROPERTIES_DESCRIPTION =
  'The API object provided to `purchase.thank-you` extension targets.';

export const ORDER_STATUS_API_PROPERTIES_DESCRIPTION =
  '> Note: This documentation has moved to customer accounts. Refer to [Order API](/docs/api/customer-account-ui-extensions/apis/order)';
