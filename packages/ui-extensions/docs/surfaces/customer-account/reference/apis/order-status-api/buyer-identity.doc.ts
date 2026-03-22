import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {ORDER_STATUS_API_DEFINITION} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Buyer Identity API',
  description:
    'The Buyer Identity API provides information about the buyer who placed the order, including their customer account, email, phone, and B2B company details. Use this API to display buyer information or personalize the order status experience.',
  requires:
    'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). The `customer` and `purchasingCompany` properties require level 1 access. The `email` and `phone` properties require level 2 access.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  defaultExample: {
    description:
      "Read the buyer's customer information and display their name and email. This example uses the `useCustomer` hook and handles the case where the customer isn't logged in.",
    codeblock: {
      title: 'Display customer info',
      tabs: [
        {
          code: '../../examples/apis/buyer-identity-display-customer-info.example.tsx',
          language: 'jsx',
          title: 'React',
        },
        {
          code: '../../examples/apis/buyer-identity-display-customer-info.example.ts',
          language: 'js',
          title: 'TS',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides buyer identity information from the order. Access the following properties on the `OrderStatusApi` object to read buyer data.',
      type: 'Docs_OrderStatus_BuyerIdentityApi',
    },
    {
      title: 'useCustomer',
      description:
        "Returns the buyer's customer account. The value is `undefined` if the buyer hasn't logged in yet.",
      type: 'UseCustomerGeneratedType',
    },
    {
      title: 'usePurchasingCompany',
      description:
        "Returns the B2B company and location that the buyer is purchasing on behalf of. The value is `undefined` if the buyer isn't a B2B customer.",
      type: 'UsePurchasingCompanyGeneratedType',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Check for undefined customer**: The `customer` property is `undefined` when the buyer isn't logged in. Always verify the customer exists before accessing their details.\n- **Handle B2B customers separately**: Use `usePurchasingCompany` to detect B2B orders and display company-specific information like the company name and location.",
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The `customer` property represents the customer account at the time the order was placed. If the buyer's account details (such as email or name) have changed since then, the data returned may not reflect those updates.",
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          "Read the buyer's first name and display a personalized greeting. This example uses `useCustomer` and falls back to a generic message when the name isn't available.",
        codeblock: {
          title: 'Greet returning customer',
          tabs: [
            {
              code: '../../examples/apis/buyer-identity-greet-returning-customer.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/buyer-identity-greet-returning-customer.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
      {
        description:
          'Read the purchasing company and display B2B company details. This example uses `usePurchasingCompany` and only renders company information when the buyer is a B2B customer.',
        codeblock: {
          title: 'Show B2B company',
          tabs: [
            {
              code: '../../examples/apis/buyer-identity-show-b2b-company.example.tsx',
              language: 'jsx',
              title: 'React',
            },
            {
              code: '../../examples/apis/buyer-identity-show-b2b-company.example.ts',
              language: 'js',
              title: 'TS',
            },
          ],
        },
      },
    ],
  },
  related: [],
};

export default data;
