import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Spacing',
  description:
    'Apply consistent spacing to maintain visual balance and touch-friendly layouts.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'VerticalSpacing',
      description: '',
      type: 'VerticalSpacing',
    },
    {
      title: 'HorizontalSpacing',
      description: '',
      type: 'HorizontalSpacing',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'spacing-thumbnail.png',
  defaultExample: {
    image: 'spacing-default.png',
    codeblock: generateCodeBlock('Spacing', 'spacing', 'default.example'),
  },
};

export default data;
