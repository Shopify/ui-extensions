import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlockRow = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block-row', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlockRow',
  description: 'Renders a `POSBlockRow` in a `POSBlock`.',
  isVisualComponent: true,
  type: 'component',
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
    codeblock: generateCodeBlockForPOSBlockRow(
      'Render a POSBlockRow in a POSBlock',
      'default.example',
    ),
  },
};

export default data;
