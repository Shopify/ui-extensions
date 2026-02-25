import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.data',
  (api) => {
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
  },
);
