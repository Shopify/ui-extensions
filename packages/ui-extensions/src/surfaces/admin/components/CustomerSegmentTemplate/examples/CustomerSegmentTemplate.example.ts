import {
  extension,
  CustomerSegmentTemplate,
} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n}) => {
    const productTemplate = root.createComponent(CustomerSegmentTemplate, {
      title: i18n.translate('product.title'),
      description: i18n.translate('product.description'),
      templateQuery: 'products_purchased(id: (product_id)) = true',
      templateQueryToInsert: 'products_purchased(id:',
      dateAdded: new Date('2023-01-15').toISOString(),
    });

    const locationTemplate = root.createComponent(CustomerSegmentTemplate, {
      title: i18n.translate('location.title'),
      description: [i18n.translate('location.firstParagraph'), i18n.translate('location.secondParagraph')],
      templateQuery: "customer_cities CONTAINS 'US-NY-NewYorkCity'",
    });

    root.appendChild(productTemplate);
    root.appendChild(locationTemplate);

    root.mount();
  },
);
