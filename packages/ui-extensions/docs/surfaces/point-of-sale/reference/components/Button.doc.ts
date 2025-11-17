import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForButton = (title: string, fileName: string) =>
  generateCodeBlock(title, 'button', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'The `Button` component triggers actions or events, such as opening dialogs or navigating to other pages. Use `Button` to let merchants perform specific tasks or initiate interactions throughout the POS interface.\n\nButtons provide clear calls-to-action that guide merchants through workflows, enable form submissions, and trigger important operations. They support various visual styles, tones, and interaction patterns to communicate intent and hierarchy within the interface.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Button` component.',
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
