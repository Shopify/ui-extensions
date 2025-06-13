import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {CUSTOM_DATA} from '../helpers/helper.docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForStorageApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'storage-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Storage API',
  description: `The Storage API allows fetching, setting, updating, and clearing an extension's data from the POS local storage.
  - If a target (such as \`pos.home.tile.render\`) is disabled or removed, the extension data remains.
  - All stored extension data that has not been updated for a month is cleared automatically after that period.

  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
  isVisualComponent: false,
  type: 'APIs',
  category: 'APIs',
  related: [],
  definitions: [CUSTOM_DATA('Storage', 'StorageApi')],
  examples: {
    description: 'Examples of using the Storage API',
    examples: [
      {
        codeblock: generateCodeBlockForStorageApi(
          'Getting a single value from storage',
          'get',
        ),
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Setting a single value in storage',
          'set',
        ),
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Deleting a single value from storage',
          'delete',
        ),
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Clear all entries for an extension from storage',
          'clear',
        ),
      },
      {
        codeblock: generateCodeBlockForStorageApi(
          'Retrieve all entries for an extension from storage',
          'entries',
        ),
      },
    ],
  },
};

export default data;
