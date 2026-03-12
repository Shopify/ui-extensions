/// <reference types="@shopify/ui-extensions/pos.home.tile.render" />
// ^ This defines types for custom Shopify elements supported by the target.

import {expect, test, vi, beforeEach, afterEach} from 'vitest';
import {fireEvent, waitFor} from '@testing-library/preact';
import {getExtension} from '@shopify/ui-extensions-tester';
import {createCartLineItem} from '@shopify/ui-extensions-tester/point-of-sale';

const extension = getExtension('pos.home.tile.render');

beforeEach(() => {
  extension.setUp();
});

afterEach(() => {
  extension.tearDown();
});

test('shows "0 item(s)" when the cart is empty', async () => {
  await extension.render();

  const tile = document.body.querySelector('s-tile')!;
  expect(tile.getAttribute('subheading')).toEqual('0 item(s)');
});

test('shows the line item count when the cart has items', async () => {
  extension.shopify.cart.current.value.lineItems = [
    createCartLineItem(),
    createCartLineItem(),
  ];

  await extension.render();

  const tile = document.body.querySelector('s-tile')!;
  expect(tile.getAttribute('subheading')).toEqual('2 item(s)');
});

test('calls action.presentModal when the tile is clicked', async () => {
  const presentModal = vi.fn();
  extension.shopify.action.presentModal = presentModal;

  await extension.render();

  const tile = document.body.querySelector('s-tile')!;
  fireEvent.click(tile);

  await waitFor(() => {
    expect(presentModal).toHaveBeenCalled();
  });
});

test('increments all line item quantities via bulkCartUpdate on button click', async () => {
  const widget = createCartLineItem({uuid: 'widget', quantity: 2});
  const gadget = createCartLineItem({uuid: 'gadget', quantity: 5});
  extension.shopify.cart.current.value.lineItems = [widget, gadget];
  const bulkCartUpdate = vi.spyOn(extension.shopify.cart, 'bulkCartUpdate');

  await extension.render();

  const button = document.body.querySelector('s-button')!;
  fireEvent.click(button);

  await waitFor(() => {
    expect(bulkCartUpdate).toHaveBeenCalledWith(
      expect.objectContaining({
        lineItems: [
          expect.objectContaining({uuid: 'widget', quantity: 3}),
          expect.objectContaining({uuid: 'gadget', quantity: 6}),
        ],
      }),
    );
  });
});
