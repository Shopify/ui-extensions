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
      type: 'MapElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'MapElementEvents',
    },
    {
      title: mapMarkerSharedContent.name,
      description: mapMarkerSharedContent.description,
      type: 'MapMarkerElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'MapMarkerElementEvents',
    },
    {
      title: 'Slots',
      description:
        'Learn more about [component slots](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).',
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
  examples: {
    description:
      'Examples of how to show a custom map marker graphic or a Popover when a map marker is clicked.',
    examples: [
      {
        description: `Use the \`Popover\` component to display content when a map marker is clicked.`,
        codeblock: {
          title: 'Popover with map marker',
          tabs: [
            {
              code: './examples/map-marker-popover.example.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description: `Use the \`graphic\` slot to display a graphic as a map marker. Find more about slots [here](/docs/api/checkout-ui-extensions/latest/using-polaris-components#slots).`,
        codeblock: {
          title: 'Map with graphic as map marker',
          tabs: [
            {
              code: './examples/map-marker-graphic.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
