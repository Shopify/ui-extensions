import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForButton = (title: string, fileName: string) =>
  generateCodeBlock(title, 'button', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description: `Buttons enable the merchant to initiate actions, like "add", "save", or "next".
  > Note:
  > The \`plain\` \`ButtonType\` is no longer supported as of POS 10.0.0 and defaults to \`basic\`.`,
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Button',
      description: '',
      type: 'ButtonProps',
    },
    {
      title: 'ButtonType',
      description: 'Determines the appearance of the button.',
      type: 'ButtonType',
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
