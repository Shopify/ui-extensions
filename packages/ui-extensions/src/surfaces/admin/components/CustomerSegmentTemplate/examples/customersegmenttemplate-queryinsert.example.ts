import {extension, CustomerSegmentTemplate} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n}) => {
    const template = root.createComponent(CustomerSegmentTemplate, {
      title: 'Lapsed customers by region',
      description: [
        'Customers who have not placed an order in the last 90 days, filtered by geographic region.',
        'The displayed query shows an example for US customers. When inserted into the editor, the region filter is left as a placeholder for merchants to customize.',
      ],
      query: 'days_since_last_order > 90 AND customer_country = "US"',
      queryToInsert: 'days_since_last_order > 90 AND customer_country = ""',
      createdOn: new Date('2024-08-15').toISOString(),
    });

    root.appendChild(template);
  },
);
