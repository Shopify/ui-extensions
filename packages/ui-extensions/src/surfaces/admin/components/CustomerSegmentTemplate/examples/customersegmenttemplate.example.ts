import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n}) => {
    const template = document.createElement(
      'shopify-customer-segment-template',
    );
    template.title = i18n.translate('template.title');
    template.description = i18n.translate('template.description');
    template.query = 'number_of_orders > 0';
    template.createdOn = new Date('2023-01-15').toISOString();

    root.appendChild(template);
  },
);
