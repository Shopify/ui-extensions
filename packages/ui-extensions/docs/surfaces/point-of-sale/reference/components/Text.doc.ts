import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description: 'Display text with specific visual styles or tones.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Text',
      description: '',
      type: 'TextProps',
    },
    {
      title: 'TextVariant',
      description: '',
      type: 'TextVariant',
    },
    {
      title: 'ColorType',
      description: '',
      type: 'ColorType',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'text-thumbnail.png',
  defaultExample: {
    image: 'text-default.png',
    codeblock: generateCodeBlock('Text', 'text', 'default.example'),
  },
};

export default data;
