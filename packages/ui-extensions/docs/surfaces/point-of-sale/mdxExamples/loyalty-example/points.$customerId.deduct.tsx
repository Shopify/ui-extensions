import type {ActionFunction} from '@remix-run/node';
import {json} from '@remix-run/node';
import {addRedeemedPoints} from '../services/redeemedPoints.server';
import {authenticate} from 'app/shopify.server';
// [START points.deduct.action]
export const action: ActionFunction = async ({request, params}) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    });
  }

  // 1. Authenticate the request
  try {
    await authenticate.admin(request);
  } catch (error) {
    console.error('Authentication failed:', error);
    return new Response('Unauthorized', {status: 401});
  }

  // 2. Get the customer ID from the params
  const {customerId} = params;

  const {pointsToDeduct} = await request.json();
  if (!customerId) {
    throw new Error('Customer ID is required');
  }

  await addRedeemedPoints(customerId, pointsToDeduct);

  return json({message: 'Points deducted successfully'});
};
// [END points.deduct.action]
