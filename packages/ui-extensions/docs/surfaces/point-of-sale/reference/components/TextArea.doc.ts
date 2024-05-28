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
  related: [],
  thumbnail: 'text-area-thumbnail.png',
  defaultExample: {
    image: 'text-area-default.png',
    codeblock: generateCodeBlock('Thumbnail', 'text-area', 'default.example'),
  },
};

export default data;
