import type {
  AppEventAttributeValue,
  AppEventAttributes,
  AppEventEmitResult,
  AppEvents,
  ExtensionTarget,
  ExtensionTargets,
  StandardApi,
} from '@shopify/ui-extensions/admin';
import type {
  AppEventAttributeValue as CheckoutAppEventAttributeValue,
  AppEventAttributes as CheckoutAppEventAttributes,
  AppEventEmitResult as CheckoutAppEventEmitResult,
  AppEvents as CheckoutAppEvents,
} from '@shopify/ui-extensions/checkout';
import type {AppEvents as CustomerAccountAppEvents} from '@shopify/ui-extensions/customer-account';

import {adminMockFactories, createMockAdminTargetApi} from '../admin/factories';
import {assertType, type Equals} from './type-assertions';

// ---------------------------------------------------------------------------
// Compile-time assertions
// ---------------------------------------------------------------------------

type AdminAppEvents = StandardApi<ExtensionTarget>['appEvents'];

// Admin uses the AppEvents type of checkout and customer accounts.
assertType<Equals<AdminAppEvents, CheckoutAppEvents>>();
assertType<Equals<AdminAppEvents, CustomerAccountAppEvents>>();

// Every admin extension target has appEvents.
assertType<
  Equals<ExtensionTargets[ExtensionTarget]['api']['appEvents'], AppEvents>
>();

// emit takes a handle and optional attributes, and resolves with a result.
assertType<
  Equals<
    Parameters<AdminAppEvents['emit']>,
    [eventHandle: string, attributes?: AppEventAttributes]
  >
>();
assertType<
  Equals<ReturnType<AdminAppEvents['emit']>, Promise<AppEventEmitResult>>
>();

// The admin entry exports the app event types of checkout.
assertType<Equals<AppEvents, CheckoutAppEvents>>();
assertType<Equals<AppEventEmitResult, CheckoutAppEventEmitResult>>();
assertType<Equals<AppEventAttributes, CheckoutAppEventAttributes>>();
assertType<Equals<AppEventAttributeValue, CheckoutAppEventAttributeValue>>();

// ---------------------------------------------------------------------------
// Runtime tests
// ---------------------------------------------------------------------------

describe('the admin appEvents mock', () => {
  type AdminTarget = Parameters<typeof createMockAdminTargetApi>[0];

  function emitOn(target: AdminTarget) {
    return createMockAdminTargetApi(target).appEvents.emit(
      'description_generated',
      {word_count: 120},
    );
  }

  const emitUnavailable = {success: false, error: 'Emit is unavailable.'};

  const targets = Object.keys(adminMockFactories) as AdminTarget[];
  const cannotSend = (target: AdminTarget) =>
    target.endsWith('.should-render') || target.endsWith('.data');
  const sendingTargets = targets.filter((target) => !cannotSend(target));
  const unavailableTargets = targets.filter(cannotSend);

  it('sorts each admin target by whether it can send', () => {
    expect(sendingTargets).toStrictEqual(
      expect.arrayContaining([
        'admin.product-details.block.render',
        'admin.order-details.action.render',
        'admin.order-details.print-action.render',
        'admin.app.home.render',
      ]),
    );
    expect(unavailableTargets).toStrictEqual(
      expect.arrayContaining([
        'admin.product-details.action.should-render',
        'admin.app.tools.data',
        'admin.customers.segmentation-templates.data',
      ]),
    );
  });

  it.each(sendingTargets)(
    'resolves emit with success on %s',
    async (target) => {
      expect(await emitOn(target)).toStrictEqual({success: true});
    },
  );

  it.each(unavailableTargets)(
    'resolves emit with the unavailable result on %s',
    async (target) => {
      expect(await emitOn(target)).toStrictEqual(emitUnavailable);
    },
  );
});
