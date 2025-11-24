import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForActionItem = (title: string, fileName: string) =>
  generateCodeBlock(title, 'action-item', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'ActionItem',
  description:
    'The `ActionItem` provides a tappable surface on the specified extension target as an entry point to an extension. Note that the text displayed on this `ActionItem` is dependent on the description of the extension.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'ActionItem',
      description: '',
      type: 'ActionItemProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  related: [],
  thumbnail: 'action-item-thumbnail.png',
  defaultExample: {
    image: 'action-item-default.png',
    codeblock: generateCodeBlockForActionItem(
      'Show a post-purchase action menu item',
      'default.example',
    ),
    description:
      'Display an action menu item in the post-purchase flow. This example shows how to render an ActionItem that appears in action menus, providing merchants with a tappable entry point to launch your extension after a transaction is completed.',
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Control availability with enabled state:** Use the \`enabled\` property to control when a component can be tapped based on context. Set a component's \`enabled\` property to \`false\` when the extension's functionality isn't applicable to the current state. For example, if your extension applies a discount for new customers, set \`enable\` to \`false\` when processing a purchase for an existing customer.
- **Maintain consistent interaction patterns:** Follow established POS interaction patterns by using \`ActionItem\` components primarily with the \`api.action.presentModal()\` method as entry points to modal workflows. This creates predictable user experiences that align with merchant expectations and standard POS behaviors.
- **Handle errors and edge cases:** Implement proper error handling in \`onPress\` callbacks to manage network failures, invalid data states, or other exceptional conditions. Provide meaningful feedback to merchants when operations cannot be completed.
      `,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`ActionItem\` components can only be used within supported action menu-item targets. They can't be rendered in action (modal) or block targets.
- Multiple \`ActionItem\` components from the same app can't be rendered simultaneously on the same target. Each extension can only contribute one \`ActionItem\` for each supported target.
      `,
    },
  ],
};

export default data;
