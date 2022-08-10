import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
import {act, renderHook} from '@testing-library/react-hooks';
import {useSubscription} from '../subscription';

describe('useSubscription()', () => {
  it('updates the value when it changes', () => {
    const statefulRemoteSubscribable = createMockStatefulRemoteSubscribable(
      'hello',
    );

    const {result, rerender} = renderHook(() => {
      return useSubscription(statefulRemoteSubscribable);
    });
    expect(result.current).toBe('hello');

    act(() => {
      statefulRemoteSubscribable.subscribe.mock.calls.forEach(
        ([subscribeCallback]) => {
          subscribeCallback('world');
        },
      );
    });

    rerender();
    expect(result.current).toBe('world');
  });

  it('stops subscribing from future updates when unsubscribed is called', () => {
    const statefulRemoteSubscribable = createMockStatefulRemoteSubscribable(
      'hello',
    );
    const unsubscribe = jest.fn();
    statefulRemoteSubscribable.subscribe.mockReturnValue(unsubscribe);

    const {result, rerender, unmount} = renderHook(() => {
      return useSubscription(statefulRemoteSubscribable);
    });
    expect(result.current).toBe('hello');
    expect(unsubscribe).not.toHaveBeenCalled();

    unmount();
    expect(unsubscribe).toHaveBeenCalled();

    act(() => {
      statefulRemoteSubscribable.subscribe.mock.calls.forEach(
        ([subscribeCallback]) => {
          subscribeCallback('world');
        },
      );
    });

    rerender();
    expect(result.current).toBe('hello');
  });
});

export function createMockStatefulRemoteSubscribable<T>(value: T) {
  const subscribable = {
    get current() {
      return value;
    },
    subscribe: jest.fn<
      ReturnType<StatefulRemoteSubscribable<T>['subscribe']>,
      Parameters<StatefulRemoteSubscribable<T>['subscribe']>
    >(),
    destroy: jest.fn<
      ReturnType<StatefulRemoteSubscribable<T>['destroy']>,
      Parameters<StatefulRemoteSubscribable<T>['destroy']>
    >(),
  };

  return subscribable;
}
