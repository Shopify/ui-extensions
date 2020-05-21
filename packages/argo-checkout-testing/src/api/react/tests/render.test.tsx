import React from 'react';

import {renderReact} from '../render';

const {extend} = require.requireMock('../../extend') as {extend: jest.Mock};

jest.mock('../../extend', () => ({
  extend: jest.fn(),
}));

describe('render()', () => {
  it('calls extend() with the extension point', () => {
    renderReact('Checkout::KitchenSink', () => <></>);
    expect(extend).toHaveBeenCalledWith(
      'Checkout::KitchenSink',
      expect.any(Function),
    );
  });
});
