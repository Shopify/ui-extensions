/** @jest-environment node */

import {assertAuthenticatedAccountPublicNames} from './assert-authenticated-account-public-names.mjs';

function createDocsData({
  accountReference = 'AuthenticatedAccount',
  accountName = 'AuthenticatedAccount',
  customerReference = 'SubscribableSignalLike<AuthenticatedAccountCustomer | undefined>',
  customerName = 'AuthenticatedAccountCustomer',
} = {}) {
  return {
    Docs_Standard_AuthenticatedAccountApi: {
      'api/docs.ts': {
        name: 'Docs_Standard_AuthenticatedAccountApi',
        members: [{name: 'authenticatedAccount', value: accountReference}],
      },
    },
    AuthenticatedAccount: {
      'api/shared.ts': {
        name: accountName,
        members: [{name: 'customer', value: customerReference}],
      },
    },
    AuthenticatedAccountCustomer: {
      'api/shared.ts': {
        name: customerName,
        members: [{name: 'id', value: 'string'}],
      },
    },
  };
}

function withoutDeclaration(typeName) {
  return Object.fromEntries(
    Object.entries(createDocsData()).filter(([name]) => name !== typeName),
  );
}

function withAmbiguousDeclaration(typeName) {
  const docsData = createDocsData();
  return {
    ...docsData,
    [typeName]: {
      ...docsData[typeName],
      'another-source.ts': Object.values(docsData[typeName])[0],
    },
  };
}

function withMembers(typeName, members) {
  const docsData = createDocsData();
  const [source, declaration] = Object.entries(docsData[typeName])[0];
  return {
    ...docsData,
    [typeName]: {[source]: {...declaration, members}},
  };
}

describe('assertAuthenticatedAccountPublicNames', () => {
  it('accepts the public account and customer reference chain', () => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(createDocsData()),
    ).not.toThrow();
  });

  it('rejects the historical docs-only wrapper reference chain', () => {
    const docsData = createDocsData({
      accountReference: 'AuthenticatedAccountDocs',
      accountName: 'AuthenticatedAccountDocs',
      customerReference:
        'SubscribableSignalLike<AuthenticatedAccountCustomerDocs | undefined>',
      customerName: 'AuthenticatedAccountCustomerDocs',
    });
    const historicalDocs = {
      Docs_Standard_AuthenticatedAccountApi:
        docsData.Docs_Standard_AuthenticatedAccountApi,
      AuthenticatedAccountDocs: docsData.AuthenticatedAccount,
      AuthenticatedAccountCustomerDocs: docsData.AuthenticatedAccountCustomer,
    };
    expect(() => assertAuthenticatedAccountPublicNames(historicalDocs)).toThrow(
      'expected public type AuthenticatedAccount, found AuthenticatedAccountDocs',
    );
  });

  it.each([
    [
      'an internal account reference with valid public tables',
      {accountReference: 'AuthenticatedAccountDocs'},
      'expected public type AuthenticatedAccount, found AuthenticatedAccountDocs',
    ],
    [
      'an internal customer reference with valid public tables',
      {
        customerReference:
          'SubscribableSignalLike<AuthenticatedAccountCustomerDocs | undefined>',
      },
      'expected public type AuthenticatedAccountCustomer, found AuthenticatedAccountCustomerDocs',
    ],
    [
      'account table-name drift with a valid public key',
      {accountName: 'AuthenticatedAccountDocs'},
      'expected table name AuthenticatedAccount, found AuthenticatedAccountDocs',
    ],
    [
      'customer table-name drift with a valid public key',
      {customerName: 'AuthenticatedAccountCustomerDocs'},
      'expected table name AuthenticatedAccountCustomer, found AuthenticatedAccountCustomerDocs',
    ],
  ])('rejects %s', (_description, options, message) => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(createDocsData(options)),
    ).toThrow(message);
  });

  it.each([
    'Docs_Standard_AuthenticatedAccountApi',
    'AuthenticatedAccount',
    'AuthenticatedAccountCustomer',
  ])('rejects a missing %s declaration', (typeName) => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(withoutDeclaration(typeName)),
    ).toThrow(`expected one ${typeName} declaration, found 0`);
  });

  it.each([
    'Docs_Standard_AuthenticatedAccountApi',
    'AuthenticatedAccount',
    'AuthenticatedAccountCustomer',
  ])('rejects ambiguous %s declarations', (typeName) => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(withAmbiguousDeclaration(typeName)),
    ).toThrow(`expected one ${typeName} declaration, found 2`);
  });

  it.each([
    ['Docs_Standard_AuthenticatedAccountApi', 'authenticatedAccount'],
    ['AuthenticatedAccount', 'customer'],
  ])('rejects a missing %s.%s member', (typeName, memberName) => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(withMembers(typeName, [])),
    ).toThrow(`expected one ${typeName}.${memberName} member, found 0`);
  });

  it.each([undefined, {}])('rejects malformed member lists: %s', (members) => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(
        withMembers('AuthenticatedAccount', members),
      ),
    ).toThrow('expected one AuthenticatedAccount.customer member, found 0');
  });

  it.each([
    [
      'Docs_Standard_AuthenticatedAccountApi',
      'authenticatedAccount',
      'AuthenticatedAccount',
    ],
    [
      'AuthenticatedAccount',
      'customer',
      'SubscribableSignalLike<AuthenticatedAccountCustomer | undefined>',
    ],
  ])('rejects ambiguous %s.%s members', (typeName, memberName, value) => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(
        withMembers(typeName, [
          {name: memberName, value},
          {name: memberName, value},
        ]),
      ),
    ).toThrow(`expected one ${typeName}.${memberName} member, found 2`);
  });

  it.each([
    undefined,
    null,
    1,
    'AuthenticatedAccountCustomer',
    'SubscribableSignalLike<AuthenticatedAccountCustomer>',
    'Signal<AuthenticatedAccountCustomer | undefined>',
  ])('rejects a malformed customer reference: %s', (customerReference) => {
    const docsData = withMembers('AuthenticatedAccount', [
      {name: 'customer', value: customerReference},
    ]);
    expect(() => assertAuthenticatedAccountPublicNames(docsData)).toThrow(
      'expected an optional customer signal',
    );
  });

  it('accepts whitespace in the customer signal type', () => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(
        createDocsData({
          customerReference:
            ' SubscribableSignalLike < AuthenticatedAccountCustomer |\n undefined > ',
        }),
      ),
    ).not.toThrow();
  });

  it('allows unrelated internal names, company types and prose', () => {
    const docsData = createDocsData();
    const account = docsData.AuthenticatedAccount['api/shared.ts'];
    const customer = docsData.AuthenticatedAccountCustomer['api/shared.ts'];
    const publicDocsWithUnrelatedChanges = {
      ...docsData,
      AuthenticatedAccount: {
        'api/shared.ts': {
          ...account,
          description: 'AuthenticatedAccountDocs can appear in prose.',
          members: [
            ...account.members,
            {name: 'company', value: 'SubscribableSignalLike<CompanyDocs>'},
          ],
        },
      },
      AuthenticatedAccountCustomer: {
        'api/shared.ts': {
          ...customer,
          description: 'Updated privacy guidance.',
        },
      },
      CompanyDocs: {'unrelated.ts': {name: 'CompanyDocs'}},
      AuthenticatedAccountDocs: {
        'unrelated.ts': {name: 'AuthenticatedAccountDocs'},
      },
    };
    expect(() =>
      assertAuthenticatedAccountPublicNames(publicDocsWithUnrelatedChanges),
    ).not.toThrow();
  });

  it('points check failures to the guard module', () => {
    expect(() =>
      assertAuthenticatedAccountPublicNames(
        withoutDeclaration('AuthenticatedAccount'),
      ),
    ).toThrow(
      'assertAuthenticatedAccountPublicNames (assert-authenticated-account-public-names.mjs):',
    );
  });
});
