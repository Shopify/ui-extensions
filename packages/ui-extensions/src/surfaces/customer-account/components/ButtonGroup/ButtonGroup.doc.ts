import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button group',
  description: `The button group component is used to display multiple buttons in a layout that is contextual based on the screen width or parent component. When there is more than one secondary action, they get collapsed.
    
When used within a [Section](/docs/api/customer-account-ui-extensions/{API_VERSION}/web-components/structure/section) component, the buttons will fill the width of the section.
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
  category: 'Web components',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
Use these best practices to deliver a clear and accessible experience in your extensions.

### Prioritize and group related actions

Cluster actions by purpose and place the most important or common action first to set a clear default.

### Use a single primary action

Reserve the primary style for one action only. Keep all other actions secondary to reinforce hierarchy.

### Reduce clutter in secondary options

Limit the number of secondary actions and collapse extras into menus or overflow to keep the interface clean.

### Write short, scannable labels

Use verbs and nouns in sentence cases. For example, “Edit address”. Keep styling consistent across actions.

### Support accessibility and responsiveness

Provide an accessible label for the group and ensure the layout adapts well across screen sizes.
`,
    },
  ],
  related: [],
};

export default data;
