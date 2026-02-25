import {extension, CustomerSegmentTemplate} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n}) => {
    const template = root.createComponent(CustomerSegmentTemplate, {
      title: 'Loyalty tier members',
      description: 'Customers assigned to a specific loyalty tier through your app. This template uses a custom metafield to filter customers by their current membership level.',
      query: 'customer.metafields.loyalty.tier = "gold"',
      dependencies: {
        customMetafields: ['loyalty.tier'],
      },
      createdOn: new Date('2024-10-01').toISOString(),
    });

    root.appendChild(template);
  },
);
