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
    description:
      'Learn how to present full-screen modals from tiles and menu items using the Action API.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Open a modal from a post-purchase action',
          'present-modal',
        ),
        description:
          "Create an action menu item that appears after a purchase is completed. When pressed, it launches a full-screen modal view using the Action API's `presentModal()` method, allowing you to display custom workflows or additional functionality in the post-purchase flow.",
      },
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Open a modal from a smart grid tile',
          'present-modal-tile',
        ),
        description:
          "Create a smart grid tile on the POS home screen that launches a full-screen modal when tapped. This example shows how to use the Action API to present detailed views or workflows from your app's home tile, providing quick access to extended functionality.",
      },
    ],
  },
};

export default data;
