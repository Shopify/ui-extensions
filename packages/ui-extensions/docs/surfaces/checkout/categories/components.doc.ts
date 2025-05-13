import type {CategoryTemplateSchema} from '@shopify/generate-docs';

const data: CategoryTemplateSchema = {
  category: 'polaris-web-components',
  sections: [
    {
      type: 'Generic',
      anchorLink: 'notification-banner',
      title: '',
      sectionContent: '',
      sectionNotice: [
        {
          type: 'info',
          title: 'Early access',
          sectionContent:
            'This is an early access preview of Polaris built with Web components. If you’re looking for a stable React implementation, see the [Checkout React documentation](/docs/api/checkout-ui-extensions/2025-04/components).',
        },
      ],
    },
  ],
};

export default data;
