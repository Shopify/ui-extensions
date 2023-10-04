import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'MapMarker',
  description:
    'MapMarker represents a specific location or point of interest on a map. When a cluster of multiple markers are in close proximity to each other, instead of displaying individual markers for each point of interest, use a cluster marker to indicate the presence of multiple markers within a specific area.',
  requires: '',
  thumbnail: 'mapmarker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'MapMarkerProps',
      description: '',
      type: 'MapMarkerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'mapmarker-default.png',
    codeblock: {
      title: 'Basic MapMarker',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/MapMarker/examples/basic-mapmarker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-mapmarker.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '<h3>Markers</h3>\n\n- If your markers are interactive, make sure that the selected marker’s icon is different from the rest of the non-selected markers.\n\n- If there are too many markers concentrated, utilize cluster markers.',
    },
  ],
  related: [
    {
      name: 'Map',
      subtitle: 'Component',
      url: 'map',
      type: 'Component',
    },
    {
      name: 'MapPopover',
      subtitle: 'Component',
      url: 'mappopover',
      type: 'Component',
    },
  ],
};

export default data;
