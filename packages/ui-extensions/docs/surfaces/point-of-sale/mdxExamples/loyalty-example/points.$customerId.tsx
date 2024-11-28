import type {LoaderFunctionArgs} from '@remix-run/node';
import {authenticate} from '../shopify.server';
import {json} from '@remix-run/node';
import {fetchCustomerTotal} from './fetchCustomer';
import {getRedeemedPoints} from '../services/redeemedPoints.server';
// [START points.loader]
export const loader = async ({request, params}: LoaderFunctionArgs) => {
  // 1. Authenticate the request
  await authenticate.admin(request);

  // 2. Get the customer ID from the params
  const {customerId} = params;

  if (!customerId) {
    throw new Response('Customer ID is required', {status: 400});
  }
  // 3. Fetch the customer total
  const data = await fetchCustomerTotal(request, customerId);

  if (data === null) {
    throw new Response('Order not found', {status: 404});
  }

  const totalRedeemedPoints = await getRedeemedPoints(customerId);

  const totalPoints = data * 10 - totalRedeemedPoints;

  return json(
    {totalPoints},
    {
      headers: {
        // Allow requests from all origins (or specify your client origin)
        'Access-Control-Allow-Origin': '*',
        // Allow specific headers if necessary
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      },
    },
  );
};
// [END points.loader]
export default null;
