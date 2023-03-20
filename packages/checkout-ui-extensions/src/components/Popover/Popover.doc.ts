import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Popover',
  description:
    'Popovers are similar to tooltips. They are small overlays that open on demand after a user interaction. The difference is that the popover can contain more content, without cluttering the page. They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).\n\nThe library takes care of applying the WAI-ARIA Popover Widget pattern automatically for the activator and the popover content.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'popover-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'PopoverProps',
      description: '',
      type: 'PopoverProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'popover-default.png',
    codeblock: {
      title: 'Basic Popover',
      tabs: [
        {
          title: 'React',
          code: '../../../../checkout-ui-extensions-react/src/components/Popover/examples/basic-popover.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-popover.example.ts',
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
        'Use popovers if:\n\n- The intent is to ask the customer for information.\n\n- It’s possible to use at most two rows of input fields to get the information.',
    },
  ],
  related: [],
};

export default data;
