import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Map';
import mapMarkerSharedContent from '../../../../docs/shared/components/MapMarker';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: 'map-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MapBaseProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'MapElementEvents',
    },
    {
      title: mapMarkerSharedContent.name,
      description: mapMarkerSharedContent.description,
      type: 'MapMarkerProps',
    },
    {
      title: 'Events',
      description: '',
      type: 'MapMarkerElementEvents',
    },
    {
      title: 'Slots',
      description: '',
      type: 'MapMarkerElementSlots',
    },
  ],
  defaultExample: {
    image: 'map-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-map.example.html',
          language: 'html',
        },
      ],
    },
  },
};

export default data;
