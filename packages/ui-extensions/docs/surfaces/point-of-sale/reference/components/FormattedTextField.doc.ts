import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'formatted-text-field', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'FormattedTextField',
  description:
    'Capture text input with specific formatting, validation, and keyboard optimization',
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
      'Render a FormattedTextField for an email addresses',
      'default.example',
    ),
  },
};

export default data;
