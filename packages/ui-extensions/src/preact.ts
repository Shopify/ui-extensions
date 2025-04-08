import {Signal} from '@preact/signals';

const shopify = (globalThis as any).shopify;
if (shopify && typeof shopify.setSignals === 'function') {
  shopify.setSignals(Signal);
}
