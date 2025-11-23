import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'formatted-text-field', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'FormattedTextField',
  description:
    'This component is deprecated. Use the [`TextField`](/docs/api/pos-ui-extensions/components/textfield) component instead. Use a formatted text field when you require additional functionality such as the text field input type or a custom validator.',
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
      'Capture formatted text input',
      'default.example',
    ),
    description:
      'Collect text input with specific formatting patterns and validation rules. This example demonstrates a FormattedTextField that applies real-time formatting as users type, supports custom input masks, and optimizes keyboard types for different data formats like phone numbers or postal codes.',
  },
};

export default data;
