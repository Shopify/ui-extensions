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
      query: 'products_purchased(id: (product_id)) = true',
      queryToInsert: 'products_purchased(id:',
      createdOn: new Date('2023-01-15').toISOString(),
    });

    const locationTemplate = root.createComponent(CustomerSegmentTemplate, {
      title: i18n.translate('location.title'),
      description: [i18n.translate('location.firstParagraph'), i18n.translate('location.secondParagraph')],
      query: "customer_cities CONTAINS 'US-NY-NewYorkCity'",
    });

    root.appendChild(productTemplate);
    root.appendChild(locationTemplate);

    root.mount();
  },
);
