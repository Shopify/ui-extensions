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
  related: [],
  definitions: [
    {
      title: 'StorageApi',
      description:
        'The `StorageApi` object provides access to persistent local storage methods for your POS UI extension. Access these methods through `shopify.storage` to store, retrieve, and manage data that persists across sessions.',
      type: 'Storage',
    },
  ],
  examples: {
    description: 'Examples of using the Storage API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Getting a single value from storage',
          'get',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Setting a single value in storage',
          'set',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Deleting a single value from storage',
          'delete',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Clear all entries for an extension from storage',
          'clear',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForStorageApi(
          'Retrieve all entries for an extension from storage',
          'entries',
        ),
      },
    ],
  },
};

export default data;
