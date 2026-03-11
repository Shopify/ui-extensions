import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Menu',
  description:
    'Use a menu to display a list of actions in a popover. Actions can open a modal, trigger an event, or link to an external page.',
  thumbnail: 'menu-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'MenuPropsDocs',
    },
    {
      title: 'Children button properties',
      description:
        'The Menu component exclusively accepts Button elements with restricted props as its children. The `tone` prop will always be set to monochrome by default.',
      type: 'Docs_Menu_Button_Action',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'menu-default.png',
    altText:
      'An example of a Menu component shows three actions: Submit problem, Request return, and Cancel order.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-Menu.example.html',
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

### Place menus consistently

Position menus in the upper‑right of full‑page extensions to match account pages like order status.

### Group page‑level actions

Keep related actions in a single menu rather than scattering buttons across the page.

### Limit items to what’s relevant

Include only actions that matter for the current page to reduce decision fatigue.

### Order by frequency and risk

List the most common or least risky actions at the top so they’re easy to reach.

### Write concise, action‑first labels

Use short labels (ideally two words) that start with a verb, use sentence case, avoid filler articles, and clearly state the outcome.
`,
    },
  ],
  related: [
    {
      name: 'Popover',
      subtitle: 'Component',
      url: '/docs/api/customer-account-ui-extensions/polaris-web-components/overlays/popover',
      type: 'Component',
    },
  ],
};

export default data;
