import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForActionApi = (title: string, fileName: string) =>
  generateJsxCodeBlock(title, 'action-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Action API',
  description:
    'The Action API provides modal presentation functionality for POS UI extensions, allowing you to launch full-screen modal interfaces from menu items, tiles, and block targets. The API enables navigation between different targets within your extension.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'ActionApi',
      description:
        'The `ActionApi` object provides methods for presenting modal interfaces. Access these methods through `shopify.action` to launch full-screen modal experiences.',
      type: 'ActionApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Action API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Present a modal from post purchase.',
          'present-modal',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Present a modal from smart grid.',
          'present-modal-tile',
        ),
      },
    ],
  },
};

export default data;
