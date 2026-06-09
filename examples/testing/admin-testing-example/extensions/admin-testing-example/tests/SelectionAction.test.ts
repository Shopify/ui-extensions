/// <reference types="@shopify/ui-extensions/admin.product-index.selection-action.render" />
// ^ This defines types for custom Shopify elements supported by the target.

import {expect, test, beforeEach, afterEach} from 'vitest';
import {getExtension} from '@shopify/ui-extensions-tester';

const extension = getExtension(
  'admin.product-index.selection-action.render',
);

beforeEach(() => {
  extension.setUp();
});

afterEach(() => {
  extension.tearDown();
});

test('shows the single_product key when one product is selected', async () => {
  extension.shopify.data.selected = [
    {id: 'gid://shopify/Product/1'},
  ];

  await extension.render();

  const text = document.body.querySelector('s-text')!;
  expect(text.textContent).toEqual('single_product');
});

test('shows the multiple_products key when multiple products are selected', async () => {
  extension.shopify.data.selected = [
    {id: 'gid://shopify/Product/1'},
    {id: 'gid://shopify/Product/2'},
  ];

  await extension.render();

  const text = document.body.querySelector('s-text')!;
  expect(text.textContent).toEqual('multiple_products');
});

test('uses the heading key for the action heading', async () => {
  extension.shopify.data.selected = [
    {id: 'gid://shopify/Product/1'},
  ];

  await extension.render();

  const action = document.body.querySelector('s-admin-action')!;
  expect(action.getAttribute('heading')).toEqual('heading');
});
