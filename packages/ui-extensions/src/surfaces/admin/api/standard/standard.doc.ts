import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Standard API',
  description:
    'The Standard API provides core functionality available to all Admin UI extension types. Use this API to authenticate with your app backend, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle navigation [intents](/docs/api/admin-extensions/{API_VERSION}/target-apis/utility-apis/intents-api), and persist data in browser storage.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'StandardApi',
      description:
        'The `StandardApi` object provides core methods available to all extension targets. Access these properties through the API to authenticate users, query the [GraphQL Admin API](/docs/api/admin-graphql), translate content, handle intents, and persist data.',
      type: 'StandardApi',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Core APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Authenticate backend requests:** Always use `api.auth.idToken()` to obtain ID tokens for secure authentication with your app backend.\n' +
        '- **Handle GraphQL errors:** Check both `errors` and `data` in query responses, as partial data may be returned even when errors occur.\n' +
        '- **Translate user-facing content:** Use `api.i18n` methods to translate all text displayed to merchants, ensuring your extension works for a global audience.\n' +
        '- **Persist important state:** Use `api.storage` to save user preferences, form state, or cached data that should persist across sessions.\n' +
        '- **Specify API versions:** Include the `version` parameter in GraphQL queries to ensure predictable behavior and avoid breaking changes.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- GraphQL queries are limited by the GraphQL Admin API [rate limits](/docs/api/usage/limits) and [access scopes permissions](/docs/api/usage/access-scopes).\n' +
        '- Storage is scoped per extension with a 10KB limit per key and a 100KB total capacity limit.',
    },
  ],
};

export default data;
