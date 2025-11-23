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
  category: 'Components',
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
};

export default data;
