import React from 'react';
import {
  reactExtension,
  CustomerSegmentTemplate,
} from '@shopify/ui-extensions-react/admin';

function App({i18n}) {
    const query = 'products_purchased(id: (product_id)) = true';
    const queryToInsert = 'products_purchased(id:';

    return (
      <>
        <CustomerSegmentTemplate
          title={i18n.translate('product.title')}
          description={i18n.translate('product.description')}
          query={query}
          queryToInsert={queryToInsert}
          dateAdded={new Date('2023-01-15').toISOString()}
        />
         <CustomerSegmentTemplate
          title={i18n.translate('location.title')}
          description={[i18n.translate('location.firstParagraph'), i18n.translate('location.secondParagraph')]}
          query="customer_cities CONTAINS 'US-NY-NewYorkCity'"
        />
      </>
    );
}

reactExtension('admin.customers.segmentation-templates.render', ({i18n}) => <App i18n={i18n} />);
