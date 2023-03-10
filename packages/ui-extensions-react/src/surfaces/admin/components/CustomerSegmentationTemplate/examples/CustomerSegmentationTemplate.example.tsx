import React from 'react';
import {
  reactExtension,
  CustomerSegmentationTemplate,
} from '@shopify/ui-extensions-react/admin';

function App({i18n, shop, enabledFeatures, category}) {
  const {name, latitude, longitude} = shop.defaultLocation;

  if (category == 'reEngageCustomers') {
    const productsPurchasedOnTagsEnabled = enabledFeatures.includes(
      'productsPurchasedByTags',
    );
    const templateQuery = productsPurchasedOnTagsEnabled
      ? 'products_purchased(tag: (product_tag)) = true'
      : 'products_purchased(id: (product_id)) = true';
    const templateQueryToInsert = productsPurchasedOnTagsEnabled
      ? 'products_purchased(tag:'
      : 'products_purchased(id:';

    return (
      <CustomerSegmentationTemplate
        title={i18n.translate('product.title')}
        description={i18n.translate('product.description')}
        icon="productsMajor"
        templateQuery={templateQuery}
        templateQueryToInsert={templateQueryToInsert}
        dateAdded={new Date('2023-01-15')}
      />
    );
  }

  if (category == 'location') {
    const locationTemplates = [
      <CustomerSegmentationTemplate
        title={i18n.translate('location.title')}
        description={[
          i18n.translate('location.firstParagraph'),
          i18n.translate('location.secondParagraph'),
        ]}
        icon="locationMajor"
        templateQuery="customer_cities CONTAINS 'US-NY-NewYorkCity'"
      />,
    ];

    if (latitude && longitude) {
      const distanceLabel =
        shop.unitSystem === 'METRIC_SYSTEM' ? '10 kilometers' : '6.2 miles';

      locationTemplates.push(
        <CustomerSegmentationTemplate
          title={i18n.translate('distance.title')}
          description={i18n.translate('distance.description', {
            name,
            distance: distanceLabel,
          })}
          icon="locationMajor"
          templateQuery={`customer_within_distance(coordinates: (${latitude}, ${longitude}), distance_mi: 6.2) = true`}
        />,
      );
    }

    return <>{...locationTemplates}</>;
  }

  if (shop.b2bEnabled && category == 'highValueCustomers') {
    return (
      <CustomerSegmentationTemplate
        title={i18n.translate('b2b.title')}
        description={i18n.translate('b2b.description')}
        icon="ordersMajor"
        templateQuery={'companies IS NOT NULL'}
      />
    );
  }

  return null;
}

reactExtension(
  'admin.customers.segmentation-templates.render',
  ({i18n, shop, __category, __enabledFeatures}) => (
    <App
      i18n={i18n}
      shop={shop}
      enabledFeatures={__enabledFeatures}
      category={__category}
    />
  ),
);
