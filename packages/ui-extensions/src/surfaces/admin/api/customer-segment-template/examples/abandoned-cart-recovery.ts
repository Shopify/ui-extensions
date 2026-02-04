import {extension} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.data',
  () => {
    return {
      templates: [
        {
          title: 'Cart abandoners',
          description: [
            'Customers who abandoned carts in the last 7 days',
            'Use this segment for email recovery campaigns',
          ],
          query: `{
  abandoned_checkouts_count: {
    min: 1
  }
  last_abandoned_order_date: {
    min: "${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()}"
  }
}`,
          queryToInsert: `{
  abandoned_checkouts_count: {
    min: 1
  }
  last_abandoned_order_date: {
    min: "LAST_7_DAYS"
  }
}`,
          createdOn: '2025-01-15T00:00:00Z',
        },
      ],
    };
  },
);
