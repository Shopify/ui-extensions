import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'MapPopover',
  description:
    '`MapPopover` provides additional information or context about a specific location or point of interest on a map. Map popovers often contain relevant details such as the name, address, description, or other pertinent information related to the location.\n\n**They must be specified inside the `overlay` prop of its activator component (`MapMarker`).**\n\n Currently, the `MapPopover` only supports text content as its children.',
  requires: '',
  thumbnail: 'mappopover-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'MapPopoverProps',
      description: '',
      type: 'MapPopoverProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'mappopover-default.png',
    codeblock: {
      title: 'Basic MapPopover',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/MapPopover/examples/basic-mappopover.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-mappopover.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      name: 'Map',
      subtitle: 'Component',
      url: 'map',
      type: 'Component',
    },
    {
      name: 'MapMarker',
      subtitle: 'Component',
      url: 'mapmarker',
      type: 'Component',
    },
  ],
};

export default data;
