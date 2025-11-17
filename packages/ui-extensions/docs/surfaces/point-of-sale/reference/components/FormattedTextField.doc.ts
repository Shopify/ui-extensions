import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'formatted-text-field', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'FormattedTextField',
  description:
    'The `FormattedTextField` component captures text input with specific formatting, validation, and keyboard optimization. Use it to collect formatted text with appropriate input types and auto-capitalization rules.\n\nThe component applies real-time formatting as users type, supporting patterns like phone numbers, credit cards, postal codes, and custom formats through configurable masks. It maintains separate formatted display and raw value states, ensuring that validation and data submission use clean unformatted values while providing user-friendly formatted display during input.\n\n`FormattedTextField` components prevents invalid character entry at the input level rather than validation after entry, providing immediate feedback and reducing the frustration of correcting masked input patterns.',
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
