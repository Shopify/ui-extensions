import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'formatted-text-field', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'FormattedTextField',
  description:
    'Use a formatted text field when you require additional functionality such as the text field input type or a custom validator.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'FormattedTextField',
      description: '',
      type: 'FormattedTextFieldProps',
    },
    {
      title: 'InputType',
      description: '',
      type: 'InputType',
    },
    {
      title: 'AutoCapitalizationType',
      description: '',
      type: 'AutoCapitalizationType',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'formatted-text-field-thumbnail.png',
  defaultExample: {
    image: 'formatted-text-field-default.png',
    codeblock: generateCodeBlockForComponent(
      'Render a FormattedTextField that validates email addresses',
      'default.example',
    ),
  },
};

export default data;
