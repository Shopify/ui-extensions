import React from 'react';
import {mountWithAppProvider as mount} from '../../../../../test-utils/mount';
import {useRenderTimeout} from '../useRenderTimeout';

class MockReceiver {
  receive = jest.fn();
}

jest.useFakeTimers();

describe('useRenderTimeout()', () => {
  function MockComponent({children, receiver}: React.PropsWithChildren<{receiver: MockReceiver}>) {
    const [, isRenderTimedOut] = useRenderTimeout(receiver as any, 1);
    children(isRenderTimedOut);
    return null;
  }

  it('sets isRenderTimedOut to false if render completes before timeout', async () => {
    const receiver = new MockReceiver();
    const timeoutSpy = jest.fn();

    await mount(<MockComponent receiver={receiver}>{timeoutSpy}</MockComponent>);

    receiver.receive();

    expect(timeoutSpy).toHaveBeenCalledWith(false);
  });

  it("sets isRenderTimedOut to true if render doesn't complete before timeout", async () => {
    const receiver = new MockReceiver();
    const timeoutSpy = jest.fn();

    const container = await mount(<MockComponent receiver={receiver}>{timeoutSpy}</MockComponent>);

    container.act(() => {
      jest.runAllTimers();

      receiver.receive();
    });

    expect(timeoutSpy).toHaveBeenCalledWith(true);
  });

  it('does not set isRenderTimedOut to true if component is unmounted', async () => {
    const receiver = new MockReceiver();
    const timeoutSpy = jest.fn();

    const container = await mount(<MockComponent receiver={receiver}>{timeoutSpy}</MockComponent>);

    container.unmount();

    jest.runAllTimers();

    expect(timeoutSpy).toHaveBeenCalledWith(false);
  });
});
