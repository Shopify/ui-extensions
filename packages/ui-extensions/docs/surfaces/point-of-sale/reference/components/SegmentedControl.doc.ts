import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'SegmentedControl',
  description:
    'The `SegmentedControl` component displays a horizontal row of segments that allow users to switch between different views or filter content. Use it to provide mutually exclusive options with clear visual selection states.\n\nThe component provides mutually exclusive selection within a compact horizontal layout, with visual highlighting of the active segment and smooth transition animations, making it ideal for view switching, filter controls, or any interface requiring clear, space-efficient option selection.\n\n`SegmentedControl` components provide animated transitions between segments that clearly indicate state changes without being distracting, helping merchants confirm their selection while maintaining focus on content.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `SegmentedControl` component.',
      type: 'SegmentedControlProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'segmented-control-thumbnail.png',
  defaultExample: {
    image: 'segmented-control-default.png',
    codeblock: generateCodeBlock(
      'Switch between views or filters',
      'segmented-control',
      'default.example',
    ),
    description:
      'Display mutually exclusive options in a compact horizontal control. This example demonstrates a SegmentedControl that allows users to switch between different views, filters, or content modes with clear visual selection states and smooth transitions.',
  },
};

export default data;
