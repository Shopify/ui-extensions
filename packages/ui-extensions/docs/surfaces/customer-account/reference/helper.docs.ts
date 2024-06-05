export const CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION = {
  title: 'StandardApi',
  description:
    'The base API object provided to this and other `customer-account` extension targets.',
  type: 'Docs_StandardApi',
  filePath: 'api/docs.ts',
};

export const CUSTOMER_ACCOUNT_FULL_PAGE_API_DEFINITION = {
  title: 'FullPageApi',
  description: 'The api for full-page extension targets',
  type: 'Docs_FullPageApi',
  filePath: 'api/docs.ts',
};

export const COMPANY_LOCATION_API = {
  title: 'CompanyLocationApi',
  description:
    'The API object provided to this and other `customer-account.profile.company-location` extension targets.',
  type: 'CompanyLocationApi',
};

export const ORDER_ACTION_API = {
  title: 'ActionExtensionApi',
  description:
    'The API object provided to this and other `customer-account.order.action.render` extension target.',
  type: 'ActionExtensionApi',
};

export const ORDER_API = {
  title: 'OrderApi',
  description:
    'The API object provided to this and other `customer-account.order` extension targets.',
  type: 'OrderApi',
};

export const ORDER_STATUS_SURFACE_NOTE = `
> Caution: Use the \`@shopify/ui-extensions/customer-account\` or \`@shopify/ui-extensions-react/customer-account\` surfaces when targeting order status targets. Importing from the \`checkout\` surface is deprecated as of version \`2023-10\`.
`;

export const CART_LINE_ITEM_API_DEFINITION = {
  title: 'CartLineItemApi',
  description:
    'The API object provided to this and other `cart-line-item` extension targets.',
  type: 'CartLineItemApi',
};

export const ORDER_STATUS_API_DEFINITION = {
  title: 'OrderStatusApi',
  description:
    'The API object provided to this and other `customer-account.order-status` extension targets.',
  type: 'OrderStatusApi',
};

const FULFILLMENT_API_DEFINITION = {
  title: 'FulfillmentApi',
  description:
    'The API object provided to customer-account.order-status.fulfillment-details extension targets.',
  type: 'FulfillmentApi',
};

export const REQUIRES_PROTECTED_CUSTOMER_DATA =
  'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) for some properties.';

export const REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2 =
  'level 2 access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data).';

const COMMON_API = {
  category: 'Targets',
  isVisualComponent: false,
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA,
  type: 'Target',
};

export const CART_LINE_ITEM_API = {
  definitions: [
    CART_LINE_ITEM_API_DEFINITION,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const ORDER_STATUS_CART_LINE_ITEM_API = {
  definitions: [
    CART_LINE_ITEM_API_DEFINITION,
    ORDER_STATUS_API_DEFINITION,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const ORDER_STATUS_API = {
  definitions: [
    ORDER_STATUS_API_DEFINITION,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
  ],
  ...COMMON_API,
};

export const FULFILLMENT_DETAILS_APIS = {
  definitions: [
    ORDER_STATUS_API_DEFINITION,
    CUSTOMER_ACCOUNT_STANDARD_API_DEFINITION,
    FULFILLMENT_API_DEFINITION,
  ],
  ...COMMON_API,
};
