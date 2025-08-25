import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Page',
  description:
    'The outer wrapper of the page—including the page title, subtitle, and page-level actions—displayed in a familiar and consistent style that sets expectations about the purpose of the page.',
  thumbnail: 'page-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'PagePropsDocs',
    },
    {
      title: 'Slots',
      description: '',
      type: 'PageElementSlotsDocs',
    },
    {
      title: 'Breadcrumb-actions slot button properties',
      description:
        'Supported props for Button used inside Page `breadcrumb-actions` slot.<br><br>`children` are not supported.<br>Use `accessibilityLabel` instead.',
      type: 'Docs_Page_Button_BreadcrumbAction',
    },
    {
      title: 'Primary-action slot button properties',
      description:
        'Supported props for Buttons used inside Page `primary-action` slot.<br><br>`children` only support text.',
      type: 'Docs_Page_Button_PrimaryAction',
    },
    {
      title: 'Secondary-actions slot button properties',
      description:
        'Supported props for Button used inside Page `secondary-actions` slot.<br><br>`children` only support text.',
      type: 'Docs_Page_Button_SecondaryAction',
    },
  ],
  category: 'Polaris web components',
  defaultExample: {
    image: 'page-preview.png',
    altText:
      'An example of how the Page component is used to structure the page title, description, order action buttons on the Order status page.',
    codeblock: {
      title: 'Basic Page',
      tabs: [
        {
          title: 'Preact',
          code: './examples/basic-Page-preact.example.tsx',
          language: 'tsx',
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
**Heading**
- Set clear expectations about the purpose and main topic of the page.
- Aim for 1-3 words.
- Use sentence case.

**Subheading**
- Use to provide additional context or information that enhances the customer’s understanding of the page.
- Use subheadings sparingly and only when they add useful information that is distinct from the heading.

**Buttons**
- Use for page-level actions only.
- If there is a single primary action for the page, display it as a primary button. Display all other page-level actions as secondary buttons.
- See [UX guidelines](/docs/apps/customer-accounts/order-action-menu-extensions/ux-guidelines) to learn more about the button logic for order actions.
`,
    },
  ],
  related: [],
};

export default data;
