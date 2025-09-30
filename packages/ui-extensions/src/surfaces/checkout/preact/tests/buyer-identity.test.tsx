import {faker} from '@faker-js/faker';

import type {SubscribableSignalLike} from '../../shared';
import {useCustomer, useEmail, usePhone} from '../buyer-identity';

import {
  mount,
  setupGlobalShopifyMock,
  tearDownGlobalShopifyMock,
} from './mount';

// See __mocks__/preact/hooks
jest.mock('preact/hooks');

function createMockCustomer(customer = {}): any {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: `gid://shopify/Customer/${faker.number.int({min: 1})}`,
    fullName: `${firstName} ${lastName}`,
    firstName,
    lastName,
    email: faker.internet.email(),
    phone: faker.phone.number(),
    ...customer,
  };
}

function createEmptyContext() {
  // Set up a global shopify object without buyerIdentity to trigger ScopeNotGrantedError
  setupGlobalShopifyMock({
    buyerIdentity: undefined,
  });
  return {};
}

function createUseEmailContext(email?: string) {
  setupGlobalShopify(email, undefined, undefined);
  return {};
}

function createUseCustomerContext(customer = {}) {
  setupGlobalShopify(undefined, undefined, customer);
  return {};
}

function createUsePhoneContext(phone?: string) {
  setupGlobalShopify(undefined, phone, undefined);
  return {};
}

function createMockSubscribable<T>(data: T): SubscribableSignalLike<T> {
  return {
    current: data,
    value: data,
    subscribe: () => () => {},
    destroy: async () => {},
  };
}

function setupGlobalShopify(
  email?: string,
  phone?: string,
  customer: any = {},
) {
  const customerData =
    email || Object.keys(customer).length > 0
      ? createMockCustomer(customer)
      : undefined;
  setupGlobalShopifyMock({
    buyerIdentity: {
      customer: createMockSubscribable(customerData),
      email: createMockSubscribable(email),
      phone: createMockSubscribable(phone),
      purchasingCompany: createMockSubscribable(undefined),
    },
  });
}

describe('buyerIdentity Hooks', () => {
  afterEach(tearDownGlobalShopifyMock);

  describe('useCustomer()', () => {
    it('raises an exception without CustomerPersonalData ApprovalScope', () => {
      expect(() => {
        mount.hook(() => useCustomer(), createEmptyContext());
      }).toThrow(
        expect.objectContaining({
          name: 'ScopeNotGrantedError',
        }),
      );
    });

    it('returns undefined fields with CustomerPersonalData ApprovalScopes only', () => {
      const hook = mount.hook(
        () => useCustomer(),
        createUseCustomerContext({
          email: undefined,
          phone: undefined,
          firstName: undefined,
          lastName: undefined,
          fullName: undefined,
        }),
      );

      expect(hook.current).toBeDefined();
      expect(hook.current?.email).toBeUndefined();
      expect(hook.current?.phone).toBeUndefined();
      expect(hook.current?.fullName).toBeUndefined();
      expect(hook.current?.firstName).toBeUndefined();
      expect(hook.current?.lastName).toBeUndefined();
    });

    it('returns email, phone and name fields with all ApprovalScopes', () => {
      const customer = createMockCustomer();
      const hook = mount.hook(
        () => useCustomer(),
        createUseCustomerContext(customer),
      );
      expect(customer).toBeDefined();
      expect(customer.email).toBeDefined();
      expect(hook.current?.email).toBe(customer.email);
      expect(customer.phone).toBeDefined();
      expect(hook.current?.phone).toBe(customer.phone);
      expect(customer.firstName).toBeDefined();
      expect(hook.current?.firstName).toBe(customer.firstName);
      expect(customer.lastName).toBeDefined();
      expect(hook.current?.lastName).toBe(customer.lastName);
      expect(customer.fullName).toBeDefined();
      expect(hook.current?.fullName).toBe(customer.fullName);
    });
  });

  describe('useEmail()', () => {
    it('raises an exception without CustomerPersonalData ApprovalScope', () => {
      expect(() => {
        mount.hook(() => useEmail(), createEmptyContext());
      }).toThrow(
        expect.objectContaining({
          name: 'ScopeNotGrantedError',
        }),
      );
    });

    it('returns undefined with CustomerPersonalData ApprovalScope only', () => {
      const hook = mount.hook(
        () => useEmail(),
        createUseEmailContext(undefined),
      );
      expect(hook?.current).toBeUndefined();
    });

    it('returns email with CustomerPersonalData and CustomerEmail ApprovalScopes', () => {
      const email = faker.internet.email();
      const hook = mount.hook(() => useEmail(), createUseEmailContext(email));
      expect(hook?.current).toBe(email);
    });
  });

  describe('usePhone()', () => {
    it('raises an exception without CustomerPersonalData ApprovalScope', () => {
      expect(() => {
        mount.hook(() => usePhone(), createEmptyContext());
      }).toThrow(
        expect.objectContaining({
          name: 'ScopeNotGrantedError',
        }),
      );
    });

    it('returns undefined with CustomerPersonalData ApprovalScope only', () => {
      const hook = mount.hook(
        () => usePhone(),
        createUsePhoneContext(undefined),
      );
      expect(hook?.current).toBeUndefined();
    });

    it('returns phone with CustomerPersonalData and CustomerEmail ApprovalScopes', () => {
      const phone = faker.phone.number();
      const hook = mount.hook(() => usePhone(), createUsePhoneContext(phone));
      expect(hook?.current).toBe(phone);
    });
  });
});
