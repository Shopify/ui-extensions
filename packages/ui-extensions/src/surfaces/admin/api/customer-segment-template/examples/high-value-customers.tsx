import {reactExtension, useApi} from '@shopify/ui-extensions-react/admin';

const HighValueCustomers = () => {
  const api = useApi<'admin.customers.segmentation-templates.data'>();

  return {
    templates: [
      {
        title: api.i18n.translate('templates.highValue.title'),
        description: api.i18n.translate('templates.highValue.description'),
        query: `{
  total_spent: {
    min: 500
  }
  orders_count: {
    min: 5
  }
}`,
        queryToInsert: `{
  total_spent: {
    min: 500
  }
  orders_count: {
    min: 5
  }
}`,
        createdOn: '2025-01-15T00:00:00Z',
      },
    ],
  };
};

export default reactExtension(
  'admin.customers.segmentation-templates.data',
  () => HighValueCustomers(),
);
