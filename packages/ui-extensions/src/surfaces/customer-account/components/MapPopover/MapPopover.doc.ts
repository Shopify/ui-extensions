import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'MapPopover',
  description:
    'MapPopover provides additional information or context about a specific location or point of interest on a map.',
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
  category: 'UI components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'mappopover-default.png',
    codeblock: {
      title: 'Basic MapPopover',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/MapPopover/examples/basic-mappopover.example.tsx',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `- Use to display relevant details such as the name, address, description, or other pertinent information related to the location.\n\n- Ensure that the content displayed in the map popover is brief, relevant, and easy to understand.\n\n- Maintain visual consistency with the overall design of the checkout. `,
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
      name: 'MapMarker',
      subtitle: 'Component',
      url: 'mapmarker',
      type: 'Component',
    },
  ],
};

export default data;
