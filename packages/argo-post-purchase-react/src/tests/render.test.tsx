import {render} from '../render';

const {extend} = jest.requireMock('@shopify/argo-post-purchase') as {
  extend: jest.Mock;
};

jest.mock('@shopify/argo-post-purchase', () => ({
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
