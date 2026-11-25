import {POS_INTERCEPT_NAMES} from '@shopify/ui-extensions/point-of-sale';
import type {
  ExtensionTargets,
  InterceptResult,
  InterceptedPaymentMethod,
  InterceptedPaymentMethodType,
  PaymentValidationTarget,
  PaymentValidationsEvent,
  PaymentValidationsEventData,
  ShopifyInterceptMap,
  ShopifyInterceptor,
} from '@shopify/ui-extensions/point-of-sale';

import {assertType, type Equals} from './type-assertions';

type PaymentValidationsResolutionApi =
  ExtensionTargets['pos.payment.validations.resolution.render'] extends {
    api: infer Api;
  }
    ? Api
    : never;

const amount = {amount: '25.00', currencyCode: 'USD'} as const;

const cashEvent: PaymentValidationsEvent = {
  type: POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS,
  paymentMethod: {type: 'cash'},
  amount,
};

const vaultedCardEvent: PaymentValidationsEvent = {
  type: POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS,
  paymentMethod: {type: 'vaultedCard'},
  amount,
};

const interceptor: ShopifyInterceptor<'paymentvalidations'> = (event) => {
  if (event.paymentMethod.type !== 'vaultedCard') {
    return {operations: []};
  }

  return {
    operations: [
      {
        validationAdd: {
          level: 'ERROR',
          handle: 'vaulted-card-limit',
          target: '$.payment',
        },
      },
    ],
  };
};

assertType<
  Equals<ShopifyInterceptMap['paymentvalidations'], PaymentValidationsEvent>
>();
assertType<Equals<PaymentValidationsEvent['type'], 'paymentvalidations'>>();
assertType<Equals<InterceptedPaymentMethodType, 'cash' | 'vaultedCard'>>();
assertType<{type: 'cash'} extends InterceptedPaymentMethod ? true : false>();
assertType<
  {type: 'vaultedCard'} extends InterceptedPaymentMethod ? true : false
>();
assertType<{type: 'card'} extends InterceptedPaymentMethod ? false : true>();
assertType<
  Equals<InterceptedPaymentMethod['identifier'], string | undefined>
>();
assertType<
  {
    paymentMethod: {type: 'cash'};
    amount: typeof amount;
  } extends PaymentValidationsEventData
    ? true
    : false
>();
assertType<
  Equals<
    PaymentValidationsEventData['amount'],
    {amount: string; currencyCode: string}
  >
>();
assertType<
  Equals<
    ReturnType<typeof interceptor>,
    InterceptResult<PaymentValidationTarget>
  >
>();
assertType<
  Equals<
    PaymentValidationsResolutionApi['resolution']['event']['value'],
    PaymentValidationsEventData
  >
>();
assertType<
  PaymentValidationsEvent extends PaymentValidationsEventData ? true : false
>();

describe('PaymentValidationsEvent', () => {
  it('keeps the paymentvalidations event name', () => {
    expect(POS_INTERCEPT_NAMES.PAYMENT_VALIDATIONS).toBe('paymentvalidations');
  });

  it('keeps identifier optional, so a cash event needs no new field', () => {
    expect(cashEvent.paymentMethod).not.toHaveProperty('identifier');
  });

  it('lets an interceptor tell vaultedCard attempts from cash attempts', () => {
    expect(interceptor(cashEvent)).toStrictEqual({operations: []});
    expect(interceptor(vaultedCardEvent)).toStrictEqual({
      operations: [
        {
          validationAdd: {
            level: 'ERROR',
            handle: 'vaulted-card-limit',
            target: '$.payment',
          },
        },
      ],
    });
  });
});
