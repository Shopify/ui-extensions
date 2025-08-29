import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CustomerAccountAction',
  description:
    'A modal to complete an order action flow. This component can only be used to populate the [customer-account.order.action.render](/docs/api/customer-account-ui-extensions/unstable/targets/order-action-menu/customer-account-order-action-render) extension target, which renders as a result of the customer clicking the order action button rendered via the [customer-account.order.action.menu-item.render](/docs/api/customer-account-ui-extensions/unstable/targets/order-action-menu/customer-account-order-action-menu-item-render) extension target.',
  thumbnail: 'customeraccountaction-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'CustomerAccountActionPropsDocs',
    },
    {
      title: 'Slots',
      description: '',
      type: 'CustomerAccountActionElementSlotsDocs',
    },
    {
      title: 'Slot button properties',
      description:
        'Supported props for Buttons used inside CustomerAccountAction slots.<br><br>`children` only support text.',
      type: 'Docs_CustomerAccountAction_SlotButton',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'customeraccountaction-preview.png',
    altText:
      'An example of the CustomerAccountAction component shows a dismissible modal with a header that says "Edit order", a field for adjusting quantities, and a Save button.',
    codeblock: {
      title: 'Basic CustomerAccountAction',
      tabs: [
        {
          title: 'Preact',
          code: './examples/basic-CustomerAccountAction-preact.example.tsx',
          language: 'tsx',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Use CustomerAccountAction to shift focus toward information and functionality needed to confirm or complete an order action.
- If the order action experience you’re building requires complex forms or large amounts of information, consider building a full-page extension instead.
- See Polaris for more best practices and content guidelines for designing [Modals](https://polaris.shopify.com/components/overlays/modal#best-practices).
`,
    },
  ],
  related: [],
};

export default data;
