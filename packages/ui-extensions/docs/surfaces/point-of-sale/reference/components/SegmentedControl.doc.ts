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
  defaultExample: {
    codeblock: generateCodeBlock(
      'SegmentedControl',
      'segmentedcontrol',
      'default.example',
    ),
  },
};

export default data;
