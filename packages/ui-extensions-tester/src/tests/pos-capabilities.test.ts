import {createMockPosTargetApi} from '../point-of-sale/factories';

const targets = [
  'pos.home.tile.render',
  'pos.home.modal.render',
  'pos.app.ready.data',
  'pos.receipt-header.block.render',
  'pos.receipt-footer.block.render',
] as const;

describe('POS Capabilities API', () => {
  it.each(targets)('%s starts with an unknown merchant grant', (target) => {
    const api = createMockPosTargetApi(target);

    expect(api.capabilities.value).toBeUndefined();
  });

  it.each(targets)('%s notifies subscribers as settings change', (target) => {
    const {capabilities} = createMockPosTargetApi(target);
    const listener = jest.fn();
    const unsubscribe = capabilities.subscribe(listener);

    Object.assign(capabilities, {value: []});
    Object.assign(capabilities, {value: ['block_progress']});
    Object.assign(capabilities, {value: []});
    Object.assign(capabilities, {value: ['block_progress']});
    Object.assign(capabilities, {value: undefined});

    expect(listener).toHaveBeenNthCalledWith(1, []);
    expect(listener).toHaveBeenNthCalledWith(2, ['block_progress']);
    expect(listener).toHaveBeenNthCalledWith(3, []);
    expect(listener).toHaveBeenNthCalledWith(4, ['block_progress']);
    expect(listener).toHaveBeenNthCalledWith(5, undefined);
    expect(capabilities.value).toBeUndefined();

    unsubscribe();
    Object.assign(capabilities, {value: []});
    expect(listener).toHaveBeenCalledTimes(5);
  });

  it('keeps separately created extension mocks isolated', () => {
    const first = createMockPosTargetApi('pos.home.tile.render');
    const second = createMockPosTargetApi('pos.home.tile.render');
    const listener = jest.fn();
    second.capabilities.subscribe(listener);

    Object.assign(first.capabilities, {value: ['block_progress']});

    expect(first.capabilities.value).toStrictEqual(['block_progress']);
    expect(second.capabilities.value).toBeUndefined();
    expect(listener).not.toHaveBeenCalled();
  });
});
