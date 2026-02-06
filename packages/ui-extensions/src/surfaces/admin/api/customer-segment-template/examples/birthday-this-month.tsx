import {reactExtension} from '@shopify/ui-extensions-react/admin';

const BirthdayThisMonth = () => {
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
};

export default reactExtension(
  'admin.customers.segmentation-templates.data',
  () => BirthdayThisMonth(),
);
