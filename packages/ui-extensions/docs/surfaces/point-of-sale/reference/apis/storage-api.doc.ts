import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';

const generateJsxCodeBlockForStorageApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'storage-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage API',
  description: `The Storage API allows fetching, setting, updating, and clearing an extension's data from the POS local storage.
  - An extension can store up to 100 entries.
  - The maximum size for a key is ~1 KB, and for a value is ~1 MB.
  - If a target (such as \`pos.home.tile.render\`) is disabled or removed, the extension data remains.
  - All stored extension data that has not been updated for a month is cleared automatically after that period.

  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  isVisualComponent: false,
  type: 'APIs',
  category: 'APIs',
  related: [],
  definitions: [
    {
      title: 'StorageApi',
      description: '',
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
