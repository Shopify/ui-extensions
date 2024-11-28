import {authenticate} from 'app/shopify.server';

export async function fetchCustomerTotal(request: Request, customerId: string) {
  try {
    // [START fetch-customer.authenticate]
    // 1. Authenticate the request
    const {admin} = await authenticate.admin(request);
    // [END fetch-customer.authenticate]
    // [START fetch-customer.format]
    // 2. Format the customer ID
    const formattedCustomerId = `gid://shopify/Customer/${customerId}`;
    // [END fetch-customer.format]

    // [START fetch-customer.orders]
    // 3. Fetch the customer's orders
    const response = await admin.graphql(
      `#graphql
       query GetCustomerOrders($customerId: ID!) {
         customer(id: $customerId) {
           orders(first: 100) {
            edges {
              node {
                id
                currentSubtotalPriceSet {
                  shopMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
           }
         }
       }`,
      {variables: {customerId: formattedCustomerId}},
    );
    // [END fetch-customer.orders]
    // [START fetch-customer.parse]
    // 4. Parse the response and handle erorrs
    const data = (await response.json()) as {data?: any; errors?: any[]};
    let grandTotal = 0;

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      data.errors.forEach((error: any) => {
        console.error('GraphQL Error Details:', error);
      });
      return null;
    }

    if (!response.ok) {
      console.error('Network Error:', response.statusText);
      return null;
    }

    const orders = data.data.customer.orders;
    if (!orders) {
      console.error('No orders found for customer');
      return null;
    }
    // [END fetch-customer.parse]
    // [START fetch-customer.return]
    // 5. Calculate the grand total and return
    for (const edge of orders.edges) {
      const amountString = edge.node.currentSubtotalPriceSet.shopMoney.amount;
      if (amountString) {
        grandTotal += parseFloat(amountString);
      }
    }

    return grandTotal;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
// [END fetch-customer.return]
