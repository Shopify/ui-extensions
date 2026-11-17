const guardLocation =
  'assertAuthenticatedAccountPublicNames (assert-authenticated-account-public-names.mjs)';

// These names appear in the public type tables. Keep this scoped to the
// authenticated-account reference chain; other docs-only types are intentional.
export function assertAuthenticatedAccountPublicNames(docsData) {
  function getDeclaration(typeName) {
    const declarations = Object.values(docsData[typeName] ?? {});
    if (declarations.length !== 1) {
      throw new Error(
        `${guardLocation}: Authenticated Account docs expected one ${typeName} declaration, found ${declarations.length}.`,
      );
    }
    return declarations[0];
  }

  function getMember(declaration, memberName) {
    const members = Array.isArray(declaration.members)
      ? declaration.members.filter((member) => member.name === memberName)
      : [];
    if (members.length !== 1) {
      throw new Error(
        `${guardLocation}: Authenticated Account docs expected one ${declaration.name}.${memberName} member, found ${members.length}.`,
      );
    }
    return members[0];
  }

  function getPublicDeclaration(referenceName, expectedName) {
    if (referenceName !== expectedName) {
      throw new Error(
        `${guardLocation}: Authenticated Account docs expected public type ${expectedName}, found ${referenceName}.`,
      );
    }
    const declaration = getDeclaration(referenceName);
    if (declaration.name !== expectedName) {
      throw new Error(
        `${guardLocation}: Authenticated Account docs expected table name ${expectedName}, found ${declaration.name}.`,
      );
    }
    return declaration;
  }

  const facade = getDeclaration('Docs_Standard_AuthenticatedAccountApi');
  const accountReference = getMember(facade, 'authenticatedAccount').value;
  const account = getPublicDeclaration(
    accountReference,
    'AuthenticatedAccount',
  );
  const customerReference = getMember(account, 'customer').value;
  const customerMatch =
    typeof customerReference === 'string'
      ? customerReference
          .replace(/\s+/g, '')
          .match(/^SubscribableSignalLike<(\w+)\|undefined>$/)
      : null;

  if (!customerMatch) {
    throw new Error(
      `${guardLocation}: Authenticated Account docs expected an optional customer signal, found ${customerReference}.`,
    );
  }
  getPublicDeclaration(customerMatch[1], 'AuthenticatedAccountCustomer');
}
