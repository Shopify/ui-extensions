import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SegmentedControl',
  description:
    'Display a horizontal row of segments that allow users to switch between different views or filter content.',
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
