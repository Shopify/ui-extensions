import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextArea',
  description:
    'Use a text input to allow merchants to input or modify multiline text.',
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
  thumbnail: 'textarea-thumbnail.png',
  related: [],
  examples: {
    description: 'Examples using the TextArea component',
    examples: [
      {
        codeblock: generateCodeBlock('Comment Input', 'text-area', 'comment'),
      },
    ],
  },
};

export default data;
