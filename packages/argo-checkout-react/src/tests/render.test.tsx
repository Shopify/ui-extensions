import React from 'react';

import {render} from '../render';

const {extend} = jest.requireMock('@shopify/argo-checkout') as {
  extend: jest.Mock;
};

jest.mock('@shopify/argo-checkout', () => ({
  extend: jest.fn(),
}));

describe('render()', () => {
  it('calls extend() with the extension point', () => {
    render('Checkout::KitchenSink', () => <></>);
    expect(extend).toHaveBeenCalledWith(
      'Checkout::KitchenSink',
      expect.any(Function),
    );
  });
});
