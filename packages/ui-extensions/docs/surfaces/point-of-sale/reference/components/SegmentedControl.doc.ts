import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SegmentedControl',
  description:
    'The segmented control lets the merchant easily switch between different lists or views on the same page.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'SegmentedControl',
      description: '',
      type: 'SegmentedControlProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'segmented-control-thumbnail.png',
  defaultExample: {
    image: 'segmented-control-default.png',
    codeblock: generateCodeBlock(
      'SegmentedControl',
      'segmented-control',
      'default.example',
    ),
  },
};

export default data;
