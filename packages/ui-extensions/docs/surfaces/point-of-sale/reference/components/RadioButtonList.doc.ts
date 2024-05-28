import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'RadioButtonList',
  description:
    'A radio button list lets merchants select from a given set of options.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'RadioButtonList',
      description: '',
      type: 'RadioButtonListProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'radioButtonList-thumbnail.png',
  defaultExample: {
    image: 'radioButtonList-default.png',
    codeblock: generateCodeBlock(
      'RadioButtonList',
      'radiobuttonlist',
      'default.example',
    ),
  },
};

export default data;
