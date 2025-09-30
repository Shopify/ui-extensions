/* eslint-disable no-undef */
// These mocks are necessary because checkout/preact/tests still rely on @quilted/react-testing.
// See useSubscription() for the specific preact dependencies.
const actualHooks = jest.requireActual('preact/hooks');

module.exports = {
  ...actualHooks,
  useState: jest.fn((initialValue) => {
    // Return `value` directly and provide a no-op `setValue`
    return [initialValue, jest.fn()];
  }),
  useEffect: jest.fn((effect) => {
    // Run the effect immediately.
    const cleanup = effect();
    return cleanup;
  }),
  useRef: jest.fn((initialValue) => {
    return {current: initialValue};
  }),
  useMemo: jest.fn((fn) => fn()),
};
