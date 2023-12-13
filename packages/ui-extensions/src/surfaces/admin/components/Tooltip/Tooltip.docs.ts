import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tooltip',
  description:
    'Tooltips are floating labels that briefly explain the function of a user interface element. They must be specified inside the `interestTarget` prop of an activator component. Currently, activator components are `Button` and `Text`.',
  requires: '',
  thumbnail: 'tooltip-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TooltipProps',
      description: '',
      type: 'TooltipProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'tooltip-default.png',
    codeblock: {
      title: 'Basic Tooltip',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Tooltip/examples/basic-tooltip.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-tooltip.example.ts',
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
        'Use tooltips if:\n\n- It’s used for showing information only.\n\n- The information contained in it should be helpful but not vital to the user experience.\n\n- The information can be written in a sentence.',
    },
  ],
  related: [
    {
      name: 'Button',
      subtitle: 'Component',
      url: 'button',
      type: 'component',
    },
  ],
};

export default data;
