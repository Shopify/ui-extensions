import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.data',
  () => {
    return {
      templates: [
        {
          title: 'Birthday this month',
          description: 'Customers with birthdays in the current month',
          query: `{
  metafields: {
    key: "birth_date"
    namespace: "customer"
    value: {
      month: ${new Date().getMonth() + 1}
    }
  }
}`,
          queryToInsert: `{
  metafields: {
    key: "birth_date"
    namespace: "customer"
    value: {
      month: ${new Date().getMonth() + 1}
    }
  }
}`,
          dependencies: {
            standardMetafields: ['facts.birth_date'],
          },
          createdOn: '2025-01-15T00:00:00Z',
        },
      ],
    };
  },
);
