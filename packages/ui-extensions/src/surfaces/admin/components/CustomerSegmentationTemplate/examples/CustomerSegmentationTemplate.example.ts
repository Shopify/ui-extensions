import {
  extension,
  CustomerSegmentationTemplate,
} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n, shop, __category, __enabledFeatures}) => {
    const {name, latitude, longitude} = shop.defaultLocation;

    if (__category === 'reEngageCustomers') {
      const productsPurchasedOnTagsEnabled = __enabledFeatures.includes(
        'productsPurchasedByTags',
      );
      const productTemplate = root.createComponent(
        CustomerSegmentationTemplate,
        {
          title: i18n.translate('product.title'),
          description: i18n.translate('product.description'),
          icon: 'productsMajor',
          templateQuery: productsPurchasedOnTagsEnabled
            ? 'products_purchased(tag: (product_tag)) = true'
            : 'products_purchased(id: (product_id)) = true',
          templateQueryToInsert: productsPurchasedOnTagsEnabled
            ? 'products_purchased(tag:'
            : 'products_purchased(id:',
          dateAdded: new Date('2023-01-15'),
        },
      );

      root.appendChild(productTemplate);
    }

    if (__category === 'location') {
      const locationTemplate = root.createComponent(
        CustomerSegmentationTemplate,
        {
          title: i18n.translate('location.title'),
          description: [
            i18n.translate('location.firstParagraph'),
            i18n.translate('location.secondParagraph'),
          ],
          icon: 'locationMajor',
          templateQuery: "customer_cities CONTAINS 'US-NY-NewYorkCity'",
        },
      );

      root.appendChild(locationTemplate);

      if (latitude && longitude) {
        const distanceLabel =
          shop.unitSystem === 'METRIC_SYSTEM' ? '10 kilometers' : '6.2 miles';

        root.createComponent(CustomerSegmentationTemplate, {
          title: i18n.translate('location.title'),
          description: i18n.translate('distance.description', {
            name,
            distance: distanceLabel,
          }),
          icon: 'locationMajor',
          templateQuery: `customer_within_distance(coordinates: (${latitude}, ${longitude}), distance_mi: 6.2) = true`,
        });

        root.appendChild(locationTemplate);
      }
    }

    if (shop.b2bEnabled && __category === 'highValueCustomers') {
      const b2bTemplate = root.createComponent(CustomerSegmentationTemplate, {
        title: i18n.translate('b2b.title'),
        description: i18n.translate('b2b.description'),
        icon: 'ordersMajor',
        templateQuery: 'companies IS NOT NULL',
      });

      root.appendChild(b2bTemplate);
    }

    root.mount();
  },
);
