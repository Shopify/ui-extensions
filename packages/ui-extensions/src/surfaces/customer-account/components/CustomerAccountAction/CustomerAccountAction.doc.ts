import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Customer account action',
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
    image: 'customeraccountaction-default.png',
    altText:
      'An example of the CustomerAccountAction component shows a dismissible modal with a header that says "Edit order", a field for adjusting quantities, and a Close button.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-CustomerAccountAction.example.html',
          language: 'jsx',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
Use these best practices to deliver a clear and accessible experience in your extensions.

### Highlight the key decision

Use the component to present the essential details and actions needed to confirm or complete an order task.

### Collect only what’s necessary

Request the minimum information required to finish the customer’s job so the flow stays quick and friction‑free.

### Keep forms simple and predictable

Use clear labels, intuitive actions, and concise copy so customers know what’s required and what happens next.

### Choose a full‑page extension for complex flows

If the task spans multiple steps or needs a lot of input, switch to a full‑page extension instead of a modal.

### Refer to Polaris guidance

Refer to Polaris for additional best practices and content guidelines when designing [modals](https://polaris-react.shopify.com/components/deprecated/modal#best-practices).
`,
    },
  ],
  related: [],
};

export default data;
