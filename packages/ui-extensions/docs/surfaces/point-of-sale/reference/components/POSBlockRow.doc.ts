import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlockRow = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block-row', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlockRow',
  description: 'Renders a `POSBlockRow` in a `POSBlock`.',
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-block-row-thumbnail.png',
  definitions: [
    {
      title: 'POSBlockRow',
      description: '',
      type: 'POSBlockRowProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'pos-block-row-default.png',
    codeblock: generateCodeBlockForPOSBlockRow(
      'Render a POSBlockRow in a POSBlock',
      'default.example',
    ),
  },
};

export default data;
