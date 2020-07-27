import React from 'react';
import {ResizeObserverEntry} from '@juggle/resize-observer';
import {mountWithAppProvider as mount} from 'test-utils/mount';

import {useLayoutApi} from '../useLayoutApi';

function mockResizeObserverEntry({contentRect}: any): ResizeObserverEntry {
  return {
    contentRect,
    target: {},
  } as any;
}

let onResize: (args: any[]) => void;

const resizeObserveSpy = jest.fn();
const resizeDisconnectSpy = jest.fn();

class MockResizeObserver {
  constructor(fn: (args: any[]) => void) {
    onResize = fn;
  }

  observe = resizeObserveSpy;
  disconnect = resizeDisconnectSpy;
}

function MockComponent({children}: any) {
  const [ref, layoutApi] = useLayoutApi();
  children(layoutApi);
  return <div ref={ref}>Hello</div>;
}

describe('useLayoutApi()', () => {
  let ResizeObserver = (window as any).ResizeObserver;

  beforeEach(() => {
    (window as any).ResizeObserver = MockResizeObserver;
  });

  afterEach(() => {
    (window as any).ResizeObserver = ResizeObserver;
  });

  it('listens to resize observer', async () => {
    resizeObserveSpy.mockReset();

    const container = await mount(<MockComponent>{() => {}}</MockComponent>);

    const entry = mockResizeObserverEntry({contentRect: {width: 100}});
    container.act(() => {
      onResize([entry]);
    });

    const div = await container.find('div');

    expect(resizeObserveSpy).toHaveBeenCalledWith(div.domNode);
  });

  it('disconnects to resize observer', async () => {
    resizeDisconnectSpy.mockReset();

    const container = await mount(<MockComponent>{() => {}}</MockComponent>);

    const entry = mockResizeObserverEntry({contentRect: {width: 100}});
    container.act(() => {
      onResize([entry]);
    });

    container.unmount();

    expect(resizeDisconnectSpy).toHaveBeenCalled();
  });

  it('returns layout api with compact initial data for smaller screens', async () => {
    const hookSpy = jest.fn();

    const container = await mount(<MockComponent>{hookSpy}</MockComponent>);

    const entry = mockResizeObserverEntry({contentRect: {width: 100}});
    container.act(() => {
      onResize([entry]);
    });

    expect(hookSpy).toHaveBeenCalledWith({
      layout: {
        initialValue: {horizontal: 'compact'},
        setOnChange: expect.any(Function),
      },
    });
  });

  it('returns layout api with regular initial data for larger screens', async () => {
    const hookSpy = jest.fn();

    const container = await mount(<MockComponent>{hookSpy}</MockComponent>);

    const entry = mockResizeObserverEntry({contentRect: {width: 1000}});
    container.act(() => {
      onResize([entry]);
    });

    expect(hookSpy).toHaveBeenCalledWith({
      layout: {
        initialValue: {horizontal: 'regular'},
        setOnChange: expect.any(Function),
      },
    });
  });

  it('calls handler when layout changes', async () => {
    let isHandlerSet = false;

    const layoutChangeSpy = jest.fn();

    const container = await mount(
      <MockComponent>
        {(api?: any) => {
          if (api && !isHandlerSet) {
            isHandlerSet = true;
            api.layout.setOnChange(layoutChangeSpy);
          }
        }}
      </MockComponent>,
    );

    const entry = mockResizeObserverEntry({contentRect: {width: 100}});
    container.act(() => {
      onResize([entry]);
    });

    const newEntry = mockResizeObserverEntry({contentRect: {width: 1000}});
    container.act(() => {
      onResize([newEntry]);
    });

    container.forceUpdate();

    expect(layoutChangeSpy).toHaveBeenCalledWith({horizontal: 'regular'});
  });
});
