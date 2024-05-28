import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Selectable',
  description:
    'The selectable component allows you to wrap any non-interactive UI component to make it selectable.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Selectable',
      description: '',
      type: 'SelectableProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'selectable-thumbnail.png',
  defaultExample: {
    image: 'selectable-default.png',
    codeblock: generateCodeBlock('Selectable', 'selectable', 'default.example'),
  },
};

export default data;
