import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForStorageApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'storage-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage API',
  description:
    'The Storage API provides persistent local storage for POS UI extensions, allowing you to store, retrieve, and manage extension data that persists across user sessions, device restarts, and extension target state changes. Data is stored locally on the POS device in an isolated namespace specific to your extension.' +
    '\n\nThe API supports key-value storage with automatic JSON serialization, type safety through TypeScript interfaces, and built-in error handling for storage constraint violations.',
  isVisualComponent: false,
  type: 'APIs',
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  related: [],
  definitions: [
    {
      title: 'Properties',
      description:
        'The `StorageApi` object provides access to persistent local storage for your POS UI extension. Access these properties through `api.storage` to store, retrieve, and manage data that persists across sessions.',
      type: 'Storage',
    },
  ],
  examples: {
    description:
      'Learn how to store, retrieve, and manage persistent data that survives across sessions and device restarts.',
    examples: [
      {
        codeblock: generateCodeBlockForStorageApi(
          'Clear all stored data',
          'clear',
        ),
        description:
          'Remove all stored key-value pairs for your extension in a single operation. This example demonstrates using `storage.clear()` to reset all extension data, useful for clearing user preferences, resetting state, or implementing logout functionality.',
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Delete a specific value',
          'delete',
        ),
        description:
          'Remove a single stored value by its key. This example shows how to use `storage.delete()` to remove specific data entries while preserving other stored values, ideal for selective data cleanup or removing outdated information.',
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Get all stored entries',
          'entries',
        ),
        description:
          'Retrieve all key-value pairs stored by your extension. This example demonstrates using `storage.entries()` to access all stored data at once, useful for data migration, debugging, or displaying all saved preferences.',
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Retrieve a stored value',
          'get',
        ),
        description:
          'Get a specific value from storage using its key. This example shows how to use `storage.get()` to retrieve previously saved data with automatic JSON deserialization and type safety, ideal for loading user preferences or cached information.',
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Save a value to storage',
          'set',
        ),
        description:
          'Store a value persistently using a key. This example demonstrates using `storage.set()` to save data with automatic JSON serialization, enabling you to persist user preferences, cache data, or maintain state across sessions.',
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Validate retrieved data:** Check data structure and types after calling \`get()\` since stored data may be outdated or corrupted. Provide sensible defaults and handle missing properties.\n- **Plan for data evolution:** Design your stored data structures to handle future changes. Include version fields in complex objects and implement migration logic to handle schema updates between extension versions.\n- **Keep sensitive data out of local storage:** Never store passwords, API keys, or other sensitive information. Use the Session API for secure backend communication and limit stored data to user preferences and non-sensitive workflow state.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- POS UI extensions can store up to a maximum of 100 entries.\n- The maximum key size is ~1 KB and the maximum value size is ~1 MB.\n- Data persists even when extension targets are disabled or removed.\n- Stored extension data is automatically cleared after 30 days of inactivity. The inactivity timer is reset only by write operations (\`set\`); read operations (\`get\`) do not affect the timer.\n`,
    },
  ],
};

export default data;
