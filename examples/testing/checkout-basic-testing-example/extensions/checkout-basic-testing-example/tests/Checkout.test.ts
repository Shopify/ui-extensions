/// <reference types="@shopify/ui-extensions/purchase.checkout.block.render" />
// ^ This defines types for custom Shopify elements supported by the target.

import {expect, test, vi, beforeEach, afterEach} from 'vitest';
import {fireEvent, waitFor} from '@testing-library/preact';
import {getExtension} from '@shopify/ui-extensions-tester';
import {createResult} from '@shopify/ui-extensions-tester/checkout';

const extension = getExtension('purchase.checkout.block.render');

beforeEach(() => {
  extension.setUp();
});

afterEach(() => {
  extension.tearDown();
});

test('shows the existing birth date from appMetafields', async () => {
  extension.shopify.appMetafields.value = [
    {
      target: {type: 'cart', id: '1'},
      metafield: {
        key: 'user-birth-date',
        namespace: '$app',
        value: '2000-01-15',
        valueType: 'string',
        type: 'date',
      },
    },
  ];

  await extension.render();

  const dateField = document.body.querySelector('s-date-field')!;
  expect(dateField.getAttribute('value')).toEqual('2000-01-15');
});

test('calls applyMetafieldChange with the entered date when clicking Enter', async () => {
  const applyMetafieldChange = vi
    .fn()
    .mockResolvedValue(createResult('applyMetafieldChange', {type: 'success'}));
  extension.shopify.applyMetafieldChange = applyMetafieldChange;

  await extension.render();

  const dateField = document.body.querySelector('s-date-field')!;
  dateField.value = '1990-05-20';
  dateField.dispatchEvent(new Event('change'));

  const button = document.body.querySelector('s-button')!;
  fireEvent.click(button);

  await waitFor(() => {
    expect(applyMetafieldChange).toHaveBeenCalledWith({
      type: 'updateCartMetafield',
      metafield: {
        key: 'user-birth-date',
        value: '1990-05-20',
        type: 'date',
      },
    });
  });

  await waitFor(() => {
    const banner = document.body.querySelector('s-banner')!;
    expect(banner.textContent).toEqual('Saved successfully');
  });
});

test('fetches a greeting and displays it', async () => {
  extension.fetch = vi
    .fn()
    .mockResolvedValue(
      new Response(JSON.stringify({args: {message: 'Hello!'}})),
    );

  await extension.render();

  const buttons = Array.from(document.body.querySelectorAll('s-button'));
  const fetchButton = buttons.find(
    (btn) => btn.textContent === 'Fetch greeting',
  )!;
  fireEvent.click(fetchButton);

  await waitFor(() => {
    expect(extension.fetch).toHaveBeenCalledWith(
      'https://httpbin.org/get?message=Hello!',
    );
  });

  await waitFor(() => {
    const greeting = document.body.querySelector('#greeting')!;
    expect(greeting.textContent).toEqual('Hello!');
  });
});
