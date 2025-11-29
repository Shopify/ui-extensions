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
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use modals for complex workflows:** Reserve for operations requiring more space, multiple steps, or complex interactions.
- **Provide clear entry points:** Use descriptive button labels and titles that indicate what the modal will contain.
- **Handle dismissal gracefully:** Save progress when possible and provide feedback about incomplete operations.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
Each extension can only present one modal at a time. Subsequent calls to \`presentModal()\` while a modal is already open may be ignored or replace the current modal.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to launch modal workflows from menu items, tiles, and blocks.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Launch a modal from a menu item',
          'present-modal',
        ),
        description:
          'Present a full-screen modal from menu item actions in detail screens. This example shows how to use `shopify.action.presentModal()` to launch a modal workflow from post-purchase, order details, or other action menu item contexts. With this pattern, you can implement complex, multi-step operations.',
      },
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Launch a modal from a smart grid tile',
          'present-modal-tile',
        ),
        description:
          'Present a full-screen modal from smart grid tiles on the POS home screen. This example demonstrates using `shopify.action.presentModal()` to launch modal workflows from tile interactions. This pattern is perfect for high-frequency tasks that require additional UI beyond the tile itself.',
      },
    ],
  },
};

export default data;
