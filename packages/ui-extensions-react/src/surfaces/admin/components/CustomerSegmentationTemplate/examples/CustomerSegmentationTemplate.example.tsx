import React from 'react';
import {
  reactExtension,
  CustomerSegmentationTemplate,
} from '@shopify/ui-extensions-react/admin';

function App({i18n, enabledFeatures, category}) {
  if (category == 'reEngageCustomers') {
    const productsPurchasedOnTagsEnabled = enabledFeatures.includes('productsPurchasedByTags');
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
        icon='productsMajor'
        templateQuery={templateQuery}
        templateQueryToInsert={templateQueryToInsert}
      />
    );
  }
  
  if (category == 'location') {
    return (
      <CustomerSegmentationTemplate
        title={i18n.translate('location.title')}
        description={i18n.translate('location.description')}
        icon='locationMajor'
        templateQuery="customer_cities CONTAINS 'US-NY-NewYorkCity'"
      />
    );
  }

  return null;
}

reactExtension('admin.customers.segmentation-templates.render', ({i18n, __category, __enabledFeatures}) => <App i18n={i18n} enabledFeatures={__enabledFeatures} category={__category} />);
