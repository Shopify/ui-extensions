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
          title: 'Release candidate',
          sectionContent:
            'This is a release candidate of [Polaris](/beta/next-gen-dev-platform/polaris) built with web components. If you’re looking for a stable React implementation, see the [Checkout React documentation](/docs/api/checkout-ui-extensions/2025-04/components).',
        },
      ],
    },
  ],
};

export default data;
