import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const generateCodeBlockForActionApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'action-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Action API',
  description:
    'The Action API allows an action extension to modally present its corresponding modal target.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Action',
      description: '',
      type: 'ActionApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  requires:
    ExtensionTargetType.PosHomeTileRender ||
    ExtensionTargetType.PosPurchasePostActionMenuItemRender,
  examples: {
    description: 'Examples of using the Action API.',
    examples: [
      {
        codeblock: generateCodeBlockForActionApi(
          'Present a modal from post purchase.',
          'present-modal',
        ),
      },
      {
        codeblock: generateCodeBlockForActionApi(
          'Present a modal from smart grid.',
          'present-modal-tile',
        ),
      },
    ],
  },
};

export default data;
