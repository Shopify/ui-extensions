import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForButton = (title: string, fileName: string) =>
  generateCodeBlock(title, 'button', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Buttons enable the merchant to initiate actions, like "add", "save", or "next".',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Button',
      description: '',
      type: 'ButtonProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    codeblock: generateCodeBlockForButton(
      'Render a button that presents a toast',
      'default.example',
    ),
  },
};

export default data;
