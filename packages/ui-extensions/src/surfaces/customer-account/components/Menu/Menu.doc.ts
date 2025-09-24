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
      title: 'Best Practices',
      sectionContent: `
### Consolidate actions into one menu

- Use the menu component in the upper-right corner of full-page extensions, to be consistent with the **Order status** page.
- Use menus to consolidate page-level actions, instead of adding multiple buttons around the page.

![The “Don’t do” example shows 3 separate action buttons on a subscription page. The “Do” example shows the same 3 actions consolidated into one menu.](/assets/templated-apis-screenshots/customer-account-ui-extensions/2025-10/menu-dont-do.png)

### Content guidelines

When writing button labels:
- Aim for 2 words (verb and noun).
- Lead with a strong verb that encourages action.
- Avoid unnecessary words and articles such as “the,” “an,” or “a.”
- Use sentence case.

![A button that follows the content guidelines says “Skip order”. A button that does not meet the content guidelines says “Skip this order”.](/assets/templated-apis-screenshots/customer-account-ui-extensions/2025-10/menu-labels.png)
`,
    },
  ],
  related: [
    {
      name: 'Popover',
      subtitle: 'Component',
      url: '/docs/api/checkout-ui-extensions/polaris-web-components/overlays/popover',
      type: 'Component',
    },
  ],
};

export default data;
