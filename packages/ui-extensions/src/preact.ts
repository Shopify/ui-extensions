import {Signal} from '@preact/signals';

const shopify = (globalThis as any).shopify;
if (shopify && typeof shopify._useSignal === 'function') {
  shopify._useSignal(Signal);
}
