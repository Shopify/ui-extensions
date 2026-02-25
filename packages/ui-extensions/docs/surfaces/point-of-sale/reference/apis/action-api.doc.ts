import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForActionApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'action-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Action API',
  description:
    'The Action API provides modal presentation functionality for POS UI extensions, allowing you to launch full-screen modal interfaces from menu items, tiles, and block targets. The API enables navigation between different targets within your extension.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ActionApi` object provides properties for presenting modal interfaces. Access these properties through `api.action` to launch full-screen modal experiences.',
      type: 'ActionApiContent',
    },
  ],
  category: 'Target APIs',
  subCategory: 'Standard APIs',
  related: [],
  examples: {
    description:
      'Learn how to present full-screen modals from tiles and menu items using the Action API.',
    examples: [
      {
        codeblock: generateCodeBlockForActionApi(
          'Open a modal from a post-purchase action',
          'present-modal',
        ),
        description:
          "Create an action menu item that appears after a purchase is completed. When pressed, it launches a full-screen modal view using the Action API's `presentModal()` method, allowing you to display custom workflows or additional functionality in the post-purchase flow.",
      },
      {
        codeblock: generateCodeBlockForActionApi(
          'Open a modal from a smart grid tile',
          'present-modal-tile',
        ),
        description:
          "Create a smart grid tile on the POS home screen that launches a full-screen modal when tapped. This example shows how to use the Action API to present detailed views or workflows from your app's home tile, providing quick access to extended functionality.",
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Provide clear entry points:** Use descriptive button labels and titles that clearly indicate what the modal will contain or what action it will perform, helping users understand what to expect.\n- **Handle modal dismissal gracefully:** Ensure your modal-based workflows handle user dismissal, saving progress when possible and providing clear feedback about incomplete operations.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\nEach extension can only present one modal at a time. Subsequent calls to \`presentModal()\` while a modal is already open may be ignored or replace the current modal.\n`,
    },
  ],
};

export default data;
