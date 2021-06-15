import {render} from '../render';

const {extend} = jest.requireMock('@shopify/post-purchase-ui-extensions') as {
  extend: jest.Mock;
};

jest.mock('@shopify/post-purchase-ui-extensions', () => ({
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
