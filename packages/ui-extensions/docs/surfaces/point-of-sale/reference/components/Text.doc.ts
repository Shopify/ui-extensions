import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'Text can be rendered in different sizes and colors in order to structure content. By default, `Text` will always stretch to fill the width of the container, but it can be wrapped in a `Box` to limit its width to what it needs. When the width of `Text` reaches its limit, the `string` will automatically wrap to the next line.',
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
