import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlock',
  description: 'Create a container to place content with an action button.',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-block-thumbnail.png',
  definitions: [
    {
      title: 'POSBlock',
      description: '',
      type: 'POSBlockProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'pos-block-default.png',
    codeblock: generateCodeBlockForPOSBlock(
      'Render a POSBlock in post purchase',
      'default.example',
    ),
  },
};

export default data;
