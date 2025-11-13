import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Capture longer text content with a multi-line, resizable text input area.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'TextArea',
      description: 'A text field which supports multiple lines.',
      type: 'TextAreaProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'text-area-thumbnail.png',
  defaultExample: {
    image: 'text-area-default.png',
    codeblock: generateCodeBlock('Thumbnail', 'text-area', 'default.example'),
  },
};

export default data;
