/// <reference types="@shopify/ui-extensions/pos.home.modal.render" />
// ^ This defines types for custom Shopify elements supported by the target.

import {expect, test, beforeEach, afterEach} from 'vitest';
import {getExtension} from '@shopify/ui-extensions-tester';
import {createCartLineItem} from '@shopify/ui-extensions-tester/point-of-sale';

const extension = getExtension('pos.home.modal.render');

beforeEach(() => {
  extension.setUp();
});

afterEach(() => {
  extension.tearDown();
});

test('shows "No items in cart" when the cart is empty', async () => {
  await extension.render();

  const firstText = document.body.querySelector('s-text')!;
  expect(firstText.textContent).toEqual('No items in cart');
});

test('shows each line item with its title and quantity', async () => {
  extension.shopify.cart.current.value.lineItems = [
    createCartLineItem({title: 'Widget', quantity: 3}),
    createCartLineItem({title: 'Gadget', quantity: 1}),
  ];

  await extension.render();

  const textNodes = Array.from(
    document.body.querySelectorAll('s-text'),
  );
  const textContents = textNodes.map((t) => t.textContent);
  expect(textContents).toContain('Widget');
  expect(textContents).toContain('Qty: 3');
  expect(textContents).toContain('Gadget');
  expect(textContents).toContain('Qty: 1');
});
