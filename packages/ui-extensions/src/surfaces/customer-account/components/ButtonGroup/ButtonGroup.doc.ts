import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ButtonGroup',
  description: `ButtonGroup is used to display multiple buttons in a layout that is contextual based on the screen width or parent component. When there is more than one secondary action, they get collapsed.
    
When used within a [Section](/docs/api/customer-account-ui-extensions/polaris-web-components/structure/section) component, the buttons will fill the width of the section.
`,
  thumbnail: 'buttongroup-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'ButtonGroupPropsDocs',
    },
    {
      title: 'Slots',
      description: '',
      type: 'ButtonGroupElementSlotsDocs',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'buttongroup-default.png',
    altText:
      'An example of the ButtonGroup component shows a primary action and multiple collapsed secondary actions.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-ButtonGroup.example.html',
          language: 'jsx',
        },
      ],
    },
  },
  related: [],
};

export default data;
