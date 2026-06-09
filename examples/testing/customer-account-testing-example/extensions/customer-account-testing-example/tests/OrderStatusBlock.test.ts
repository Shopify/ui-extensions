/// <reference types="@shopify/ui-extensions/customer-account.order-status.block.render" />
// ^ This defines types for custom Shopify elements supported by the target.

import {expect, test, beforeEach, afterEach} from 'vitest';
import {getExtension} from '@shopify/ui-extensions-tester';

const extension = getExtension(
  'customer-account.order-status.block.render',
);

beforeEach(() => {
  extension.setUp();
});

afterEach(() => {
  extension.tearDown();
});

test('shows a generic heading when there is no order', async () => {
  extension.shopify.order.value = undefined;

  await extension.render();

  const heading = document.body.querySelector('s-heading')!;
  expect(heading.textContent).toEqual('Order Summary');
});

test('shows the order name in the heading', async () => {
  extension.shopify.order.value!.name = '#1042';

  await extension.render();

  const heading = document.body.querySelector('s-heading')!;
  expect(heading.textContent).toEqual('Order #1042');
});

test('shows the total amount with currency', async () => {
  await extension.render();

  const texts = Array.from(document.body.querySelectorAll('s-text'));
  const content = texts.map((el) => el.textContent).join('');
  expect(content).toContain('0');
  expect(content).toContain('USD');
});
