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
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'page-default.png',
    altText:
      'An example of the Page component shows the page title, description, and order action buttons on the Order status page.',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-Page.example.html',
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

### Write clear, focused headings

State the main purpose of the page in a few words and use sentence case for readability.

### Use subheadings only when they add value

Add a subheading when it provides helpful context that’s different from the heading. Keep it brief and use sparingly to avoid clutter.

### Add page‑level actions thoughtfully

Include buttons in the header only for actions that affect the entire page or flow. Make the main action a primary button, keep lesser actions secondary, limit the total number, and follow established UX patterns—especially for order actions.
`,
    },
  ],
  related: [],
};

export default data;
