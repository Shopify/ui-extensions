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
      'Render an ActionItem in post purchase',
      'default.example',
    ),
  },
};

export default data;
