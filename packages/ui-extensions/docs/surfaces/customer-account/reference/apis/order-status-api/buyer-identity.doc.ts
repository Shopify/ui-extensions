import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Buyer Identity API',
  description:
    'The Buyer Identity API provides read-only access to the buyer who placed the order on the order status page, including their customer account, email, phone, and B2B purchasing company. Use this API to display buyer details, differentiate between B2B and direct-to-consumer orders, or detect guest buyers.',
  requires:
    'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data). The `customer` and `purchasingCompany` properties require level 1 access. The `email` and `phone` properties require level 2 access.',
  isVisualComponent: false,
  category: 'Target APIs',
  subCategory: 'Account APIs',
  type: 'API',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `OrderStatusApi` object provides the buyer identity. Access the following property on the `OrderStatusApi` object to read information about the buyer who placed the order.',
      type: 'Docs_OrderStatus_BuyerIdentityApi',
    },
  ],
  defaultExample: {
    description:
      "Show the buyer's email and phone number alongside their order information. This example reads `shopify.buyerIdentity` and renders the `email` and `phone` fields.",
    codeblock: {
      title: "Display the buyer's email",
      tabs: [
        {
          code: '../../examples/apis/buyer-identity-email.example.jsx',
          language: 'jsx',
          title: 'jsx',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Identify B2B orders and display company-specific information. This example checks whether `shopify.buyerIdentity.purchasingCompany` is defined and shows the company name and location.',
        codeblock: {
          title: 'Detect a B2B order',
          tabs: [
            {
              code: '../../examples/apis/buyer-identity-b2b.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
      {
        description:
          'Determine if the buyer has a customer account or checked out as a guest. This example checks whether the `customer` property is defined on `shopify.buyerIdentity` and displays the appropriate message.',
        codeblock: {
          title: 'Detect guest vs. logged-in buyers',
          tabs: [
            {
              code: '../../examples/apis/buyer-identity-guest.example.jsx',
              language: 'jsx',
              title: 'jsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        "- The `customer` property represents the customer account at the time the order was placed. If the buyer's account details (such as email or name) have changed since then, the data returned may not reflect those updates.",
    },
  ],
  related: [],
};

export default data;
