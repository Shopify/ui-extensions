import {
  useBuyerJourney,
  useBuyerJourneyActiveStep,
  useBuyerJourneyCompleted,
  useBuyerJourneyIntercept,
  useBuyerJourneySteps,
} from '../buyer-journey';

import {
  createMockSubscribableSignalLike,
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
  createMockExtension,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

describe('buyerJourney Hooks', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    tearDownGlobalShopifyMock();
    // eslint-disable-next-line no-console
    jest.mocked(console.error).mockRestore();
  });

  describe('useBuyerJourneySteps()', () => {
    it('raises an exception when buyerJourney api is not available', () => {
      const target = 'purchase.checkout.header.render-after' as const;
      setupGlobalShopifyMock<typeof target>({
        buyerJourney: undefined,
        extension: createMockExtension(target),
      });

      expect(() => {
        mount.hook(() => useBuyerJourneySteps());
      }).toThrow(
        expect.objectContaining({
          name: 'ExtensionHasNoMethodError',
        }),
      );
    });

    it('returns the list of steps from the buyerJourney.steps subscribable', () => {
      const steps = [
        {
          handle: 'information' as const,
          label: 'Information',
          disabled: false,
          to: 'shopify:checkout/information',
        },
        {
          handle: 'shipping' as const,
          label: 'Shipping',
          disabled: false,
          to: 'shopify:checkout/shipping',
        },
        {
          handle: 'payment' as const,
          label: 'Payment',
          disabled: false,
          to: 'shopify:checkout/payment',
        },
      ];

      setupGlobalShopifyMock({
        buyerJourney: {
          steps: createMockSubscribableSignalLike(steps),
        },
      });

      const hook = mount.hook(() => useBuyerJourneySteps());

      expect(hook.current).toStrictEqual(steps);
    });
  });

  describe('useBuyerJourneyActiveStep()', () => {
    it('raises an exception when buyerJourney api is not available', () => {
      const target = 'purchase.checkout.header.render-after' as const;
      setupGlobalShopifyMock<typeof target>({
        buyerJourney: undefined,
        extension: createMockExtension(target),
      });

      expect(() => {
        mount.hook(() => useBuyerJourneyActiveStep());
      }).toThrow(
        expect.objectContaining({
          name: 'ExtensionHasNoMethodError',
        }),
      );
    });

    it('returns the step that matches the activeStep.handle', () => {
      const activeStepHandle = 'information' as const;
      const steps = [
        {
          handle: activeStepHandle,
          label: 'Information',
          disabled: false,
          to: 'shopify:checkout/information',
        },
        {
          handle: 'shipping' as const,
          label: 'Shipping',
          disabled: false,
          to: 'shopify:checkout/shipping',
        },
        {
          handle: 'payment' as const,
          label: 'Payment',
          disabled: false,
          to: 'shopify:checkout/payment',
        },
      ];

      setupGlobalShopifyMock({
        buyerJourney: {
          steps: createMockSubscribableSignalLike(steps),
          activeStep: createMockSubscribableSignalLike({
            handle: activeStepHandle,
          }),
        },
      });

      const hook = mount.hook(() => useBuyerJourneyActiveStep());

      expect(hook.current).toStrictEqual(steps[0]);
    });

    it('returns undefined if no step matches the active step handle', () => {
      const step = {
        handle: 'information' as const,
        label: 'Information',
        disabled: false,
        to: 'shopify:checkout/information',
      };

      setupGlobalShopifyMock({
        buyerJourney: {
          steps: createMockSubscribableSignalLike([step]),
          activeStep: createMockSubscribableSignalLike({
            handle: 'payment' as const,
          }),
        },
      });

      const hook = mount.hook(() => useBuyerJourneyActiveStep());

      expect(hook.current).toBeUndefined();
    });
  });

  describe('useBuyerJourney()', () => {
    it('returns the buyer journey when the api is available', () => {
      setupGlobalShopifyMock({
        buyerJourney: {},
      });

      const hook = mount.hook(() => useBuyerJourney());

      expect(hook.current).toStrictEqual({});
    });
  });

  describe('useBuyerJourneyCompleted()', () => {
    it.each([true, false])(
      'returns the buyer journey completed value: %s',
      (completed) => {
        setupGlobalShopifyMock({
          buyerJourney: {
            completed: createMockSubscribableSignalLike(completed),
          },
        });

        const hook = mount.hook(() => useBuyerJourneyCompleted());

        expect(hook.current).toStrictEqual(completed);
      },
    );
  });

  describe('useBuyerJourneyIntercept()', () => {
    it('calls the interceptor function', () => {
      const mockIntercept = jest.fn(() =>
        Promise.resolve({behavior: 'allow'} as const),
      );

      setupGlobalShopifyMock({
        buyerJourney: {
          intercept: (cb: () => void) => cb(),
        },
      });

      mount.hook(() => useBuyerJourneyIntercept(mockIntercept));

      expect(mockIntercept).toHaveBeenCalled();
    });
  });
});
