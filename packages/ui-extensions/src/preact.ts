import {Signal} from '@preact/signals';

const shopify = (globalThis as any).shopify as any;
if (shopify) {
  shopify._Signal = Signal;
}
