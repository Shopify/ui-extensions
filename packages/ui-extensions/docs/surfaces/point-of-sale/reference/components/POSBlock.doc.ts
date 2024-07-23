import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlock = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlock',
  description:
    'The `POSBlock` provides a surface on the specified extension target as an entry point to an extension. Note that the title displayed on this `POSBlock` is dependent on the description of the extension.',
  isVisualComponent: true,
  type: 'component',
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
    codeblock: generateCodeBlockForPOSBlock(
      'Render a POSBlock in post purchase',
      'default.example',
    ),
  },
};

export default data;
