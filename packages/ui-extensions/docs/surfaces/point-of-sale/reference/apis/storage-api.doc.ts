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
  category: 'APIs',
  related: [],
  definitions: [
    {
      title: 'StorageApi',
      description:
        'The `StorageApi` object provides access to persistent local storage methods for your POS UI extension. Access these methods through `api.storage` to store, retrieve, and manage data that persists across sessions.',
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
};

export default data;
