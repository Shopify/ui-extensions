import React from 'react';
import {
  reactExtension,
  CustomerSegmentTemplate,
} from '@shopify/ui-extensions-react/admin';

function App({i18n}) {
    const templateQuery = 'products_purchased(id: (product_id)) = true';
    const templateQueryToInsert = 'products_purchased(id:';

    return (
      <>
        <CustomerSegmentTemplate
          title={i18n.translate('product.title')}
          description={i18n.translate('product.description')}
          templateQuery={templateQuery}
          templateQueryToInsert={templateQueryToInsert}
          dateAdded={new Date('2023-01-15').toISOString()}
        />
         <CustomerSegmentTemplate
          title={i18n.translate('location.title')}
          description={[i18n.translate('location.firstParagraph'), i18n.translate('location.secondParagraph')]}
          templateQuery="customer_cities CONTAINS 'US-NY-NewYorkCity'"
        />
      </>
    );
}

reactExtension('admin.customers.segmentation-templates.render', ({i18n}) => <App i18n={i18n} />);
