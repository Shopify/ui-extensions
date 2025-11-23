import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'The `TextArea` component captures longer text content with a multi-line, resizable text input area. Use it to collect descriptions, notes, comments, or other extended text input in forms and data entry workflows.\n\nThe component provides a multi-line text input area that accommodates longer content. It supports validation and multi-line formatting, making it ideal for capturing detailed information such as order notes, product descriptions, or customer feedback that requires more than single-line input.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `TextArea` component.',
      type: 'TextAreaProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'text-area-thumbnail.png',
  defaultExample: {
    image: 'text-area-default.png',
    codeblock: generateCodeBlock(
      'Capture multi-line text input',
      'text-area',
      'default.example',
    ),
    description:
      'Collect longer text content with a multi-line input area. This example shows how to implement a TextArea for capturing descriptions, notes, comments, or extended text that requires more than single-line input, supporting validation and multi-line formatting.',
  },
};

export default data;
