import type {CodeTabType, ExampleType, LinkType} from '@shopify/generate-docs';

const examplePath = '../examples';

export const REQUIRES_PROTECTED_CUSTOMER_DATA =
  'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) for some properties.';

export const REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2 =
  'level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).';

type NonEmptyArray<T> = [T, ...T[]];
type ExtensionExampleLanguage = 'js' | 'jsx' | 'toml';
type ExtensionCodeTabConfig = Record<
  ExtensionExampleLanguage,
  {
    title: string;
    fileExtension: 'ts' | 'tsx' | 'toml';
  }
>;
const codeExampleTabConfig: ExtensionCodeTabConfig = {
  js: {
    title: 'JavaScript',
    fileExtension: 'ts',
  },
  jsx: {
    title: 'Preact',
    fileExtension: 'tsx',
  },
  toml: {
    title: 'TOML',
    fileExtension: 'toml',
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
        title: '',
        // Use `generateCodeTabs(name)` to ensure you have both "JavaScript" and "React" examples available.
        tabs: getExtensionCodeTabs('default'),
      },
    },
    generic: {
      description: '',
      codeblock: {
        title: '',
        tabs: getExtensionCodeTabs('default'),
      },
    },
    ...createExample('purchase.address-autocomplete.suggest/default'),
    ...createExample('purchase.address-autocomplete.format-suggestion/default'),
    ...createExample(
      'purchase.checkout.pickup-location-option-item.render-after/default',
    ),
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
    ...createExample('purchase.checkout.chat.render/default'),
    ...createExample('purchase.thank-you.chat.render/default'),
    ...createExample('purchase.thank-you.announcement.render/default'),
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
        title: 'Read the selected shipping option',
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
        title: 'Read the selected pickup location option',
        tabs: getExtensionCodeTabs(
          'purchase.checkout.pickup-location-option-item.render-after/default',
        ),
      },
    },
    'order-confirmation/default': {
      description: '',
      codeblock: {
        title: 'Display order confirmation details',
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
Some API properties may change after the extension is rendered.
With Preact, any time you access \`.value\`, your extension components will re-render automatically when values change.
Without Preact, you'll need to call \`.subscribe()\` and render a new UI as values change.
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
        title: 'Read available payment options',
        tabs: getExtensionCodeTabs('payments/use-available-payment-options'),
      },
    },
    'payments/use-selected-payment-options': {
      description: '',
      codeblock: {
        title: 'Read selected payment options',
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

> Note: Requires the [\`customer_privacy\` capability](https://shopify.dev/docs/api/checkout-ui-extensions/latest/configuration#collect-buyer-consent) to be set to \`true\`.`,
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
        title: 'Read delivery groups',
        tabs: getExtensionCodeTabs('delivery-groups'),
      },
    },
    'delivery-group': {
      description: '',
      codeblock: {
        title: 'Read a delivery group',
        tabs: getExtensionCodeTabs('delivery-group'),
      },
    },
    'attribute-values': {
      description: '',
      codeblock: {
        title: 'Read attribute values',
        tabs: getExtensionCodeTabs('attribute-values'),
      },
    },
    'attributes/attribute-change': {
      description:
        'You can add or remove cart and checkout attributes by using the `applyAttributeChange` API.',
      codeblock: {
        title: 'Apply changes to attributes',
        tabs: getExtensionCodeTabs('attributes/attribute-change'),
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
    ...createExample('metafields/default', {
      title: 'Use app owned metafields',
      description:
        'Use the `$app` format to request metafields that are owned by your app in your extension configuration file. Your app exclusively controls structure, data, permissions and optional features for this type of metafield. See [app owned metafields](/docs/apps/build/custom-data/ownership#reserved-prefixes) for more information.',
    }),
    ...createExample('address/shipping-address', {
      title: 'Read the shipping address',
      description:
        "Use the `useShippingAddress` hook to access the buyer's shipping destination. The city, province, and country code are displayed, with a fallback banner when no address has been entered yet.",
    }),
    ...createExample('address/billing-address', {
      title: 'Read the billing address',
      description:
        'Use the `useBillingAddress` hook to access the billing address. Optional fields like address line, city, province, and country are filtered and joined into a single formatted string.',
    }),
    ...createExample('buyer-identity/customer-info', {
      title: 'Display customer information',
      description:
        "Use the `useCustomer` hook to greet returning buyers by name. The customer's order count is included in a welcome banner, with a safe fallback when `fullName` is unavailable.",
    }),
    ...createExample('buyer-identity/purchasing-company', {
      title: 'Display B2B purchasing company details',
      description:
        'Use the `usePurchasingCompany` hook to identify business buyers during checkout. The company name and location are displayed in a banner, and the extension renders nothing for non-B2B sessions.',
    }),
    ...createExample('checkout-token/default', {
      title: 'Access the checkout token',
      description:
        'Use the `useCheckoutToken` hook to retrieve the stable identifier for the current checkout session. The token renders as inline text and can be sent to backend systems for event correlation.',
    }),
    ...createExample('checkout-token/support-message', {
      title: 'Display a checkout reference for support',
      description:
        'Use the `useCheckoutToken` hook to present a reference ID in a help banner. Buyers can share this token with customer support to speed up issue resolution.',
    }),
    ...createExample('cost/order-summary', {
      title: 'Display an order cost summary',
      description:
        'Use `useSubtotalAmount`, `useTotalShippingAmount`, `useTotalTaxAmount`, and `useTotalAmount` to render a full cost breakdown. Shipping and tax are conditionally rendered since they may be unavailable on earlier checkout steps.',
    }),
    ...createExample('cost/free-shipping-goal', {
      title: 'Show progress toward free shipping',
      description:
        'Use the `useSubtotalAmount` hook to compare the cart total against a threshold. The remaining amount is calculated and displayed, switching to a success banner once the buyer qualifies.',
    }),
    ...createExample('discounts/discount-codes', {
      title: 'Display applied discount codes',
      description:
        'Use the `useDiscountCodes` hook to list all active codes on the checkout. Each code is rendered in a stack, and the extension returns nothing when no codes are applied.',
    }),
    ...createExample('discounts/apply-discount', {
      title: 'Apply and remove discount codes',
      description:
        'Use the `applyDiscountCodeChange` API to submit a discount code entered by the buyer. The extension checks [`instructions.discounts.canUpdateDiscountCodes`](/docs/api/checkout-ui-extensions/apis/cart-instructions) before rendering, and clears the input on success.',
    }),
    ...createExample('gift-cards/applied-gift-cards', {
      title: 'Display applied gift cards',
      description:
        'Use the `useAppliedGiftCards` hook to list each gift card on the checkout. The last four characters and amount deducted are displayed side by side for each card.',
    }),
    ...createExample('gift-cards/apply-gift-card', {
      title: 'Apply a gift card',
      description:
        'Use the `applyGiftCardChange` API to submit a gift card code entered by the buyer. The input is cleared on success, and errors are logged when the code is invalid.',
    }),
    ...createExample('note/display-note', {
      title: 'Display the order note',
      description:
        'Use the `useNote` hook to read the note attached to the checkout. The note is displayed in a banner only when one exists, and the extension renders nothing otherwise.',
    }),
    ...createExample('note/update-note', {
      title: 'Add or update an order note',
      description:
        'Use the `applyNoteChange` API to let buyers write delivery or gift instructions. The extension checks [`instructions.notes.canUpdateNote`](/docs/api/checkout-ui-extensions/apis/cart-instructions) before rendering, and supports both updating and removing the note.',
    }),
    ...createExample('cart-lines/summary', {
      title: 'Display cart line item details',
      description:
        'Use the `useCartLines` hook to render a breakdown of all items in the cart. Each line shows its merchandise title, quantity, and total price, with a summary count at the top.',
    }),
    ...createExample('customer-privacy/consent-banner', {
      title: 'Display a consent banner',
      description:
        'Use the `useCustomerPrivacy` hook to check whether the buyer has responded to analytics and marketing consent. A banner is shown when either preference is still undefined. See the [`customer_privacy` capability](/docs/api/checkout-ui-extensions/configuration#collect-buyer-consent) for configuration.',
    }),
    ...createExample('order-confirmation/first-order', {
      title: 'Display a first-time buyer offer',
      description:
        "Use `shopify.orderConfirmation` to check whether this is the buyer's first order. A success banner with a discount code is shown for new customers, and a standard confirmation message is shown for returning buyers.",
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
