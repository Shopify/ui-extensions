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
      type: 'ButtonJSXProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'button-thumbnail.png',
  defaultExample: {
    image: 'button-default.png',
    codeblock: generateCodeBlockForButton(
      'Render a button that presents a toast',
      'default.example',
    ),
  },
};

export default data;
