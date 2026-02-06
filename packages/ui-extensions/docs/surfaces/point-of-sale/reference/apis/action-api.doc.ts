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
      title: 'Methods',
      description:
        'The `ActionApi` object provides methods for presenting modal interfaces. Access these methods through `shopify.action` to launch full-screen modal experiences.',
      type: 'ActionApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        "- **Use modals for complex workflows:** Reserve modals for operations that genuinely require more screen space, multiple steps, or complex interactions that can't be handled by simple button actions.\n" +
        '- **Provide clear entry points:** Use descriptive button labels and titles that clearly indicate what the modal will contain or what action it will perform, helping users understand what to expect.\n' +
        '- **Handle modal dismissal gracefully:** Ensure your modal-based workflows handle user dismissal, saving progress when possible and providing clear feedback about incomplete operations.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The \`presentModal()\` method must be called from a user interaction (such as a button click or tile tap) and can't be invoked programmatically during extension initialization or from background operations.
`,
    },
  ],
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
          'Present a full-screen modal from menu item actions in detail screens. This example shows how to use `shopify.action.presentModal()` to launch a modal workflow from post-purchase, order details, or other action menu item contexts. With this pattern, you can implement complex, multi-step operations.',
      },
      {
        codeblock: generateJsxCodeBlockForActionApi(
          'Open a modal from a smart grid tile',
          'present-modal-tile',
        ),
        description:
          'Present a full-screen modal from smart grid tiles on the POS home screen. This example demonstrates using `shopify.action.presentModal()` to launch modal workflows from tile interactions. This pattern is well-suited for high-frequency tasks that require additional UI beyond the tile itself.',
      },
    ],
  },
};

export default data;
