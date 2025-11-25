import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForStorageApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'storage-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage API',
  description:
    'The Storage API provides persistent local storage for POS UI extensions, allowing you to store, retrieve, and manage extension data that persists across user sessions, device restarts, and extension target state changes. Data is stored locally on the POS device in an isolated namespace specific to your extension.' +
    '\n\nThe API supports key-value storage with automatic JSON serialization, type safety through TypeScript interfaces, and built-in error handling for storage constraint violations.',
  isVisualComponent: false,
  type: 'APIs',
  category: 'APIs',
  definitions: [
    {
      title: 'StorageApi',
      description:
        'The `StorageApi` object provides access to persistent local storage methods for your POS UI extension. Access these methods through `shopify.storage` to store, retrieve, and manage data that persists across sessions.',
      type: 'Storage',
    },
  ],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Design consistent key naming:** Use hierarchical names like \`settings.user.theme\` or \`cache.products.$\{id\}\` to organize data.
- **Validate retrieved data:** Check structure and types after \`get()\` since data may be outdated. Provide defaults and handle missing properties.
- **Plan for data evolution:** Include version fields and implement migration logic to handle schema updates between versions.
- **Keep sensitive data out:** Never store passwords, API keys, or sensitive information. Use Session API for secure backend communication.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- POS UI extensions can store up to a maximum of 100 entries.
- The maximum key size is ~1 KB and the maximum value size is ~1 MB.
- Data persists even when extension targets are disabled or removed.
- Stored extension data is automatically cleared after 30 days of inactivity.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to store and retrieve persistent data that persists across sessions.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Clear all stored values',
          'clear',
        ),
        description:
          'Remove all stored data for your extension from persistent storage. This example demonstrates using `shopify.storage.clear()` to delete all key-value pairs stored by your extension, useful for reset functionality or clearing user preferences.',
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Remove a value from storage',
          'delete',
        ),
        description:
          'Delete a specific value from storage using its key. This example shows how to use `shopify.storage.delete()` to remove a stored item, permanently clearing the data associated with that key while leaving other stored values intact.',
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Retrieve all stored entries',
          'entries',
        ),
        description:
          'Fetch all key-value pairs stored by your extension. This example shows how to use `shopify.storage.entries()` to retrieve an array of all stored items, useful for displaying saved data, performing bulk operations, or exporting stored information.',
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Retrieve a value from storage',
          'get',
        ),
        description:
          'Read a stored value using its key from persistent storage. This example shows how to use `shopify.storage.get()` to retrieve a previously saved value, which returns the stored data with automatic JSON deserialization or undefined if the key does not exist.',
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Save a value to storage',
          'set',
        ),
        description:
          'Store a value in persistent storage using a key-value pair. This example demonstrates using `shopify.storage.set()` to save data that will persist across user sessions, device restarts, and extension reloads, with automatic JSON serialization of the value.',
      },
    ],
  },
};

export default data;
