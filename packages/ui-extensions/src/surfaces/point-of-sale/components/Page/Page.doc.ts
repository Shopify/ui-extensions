import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Page',
  description:
    'The page component serves as the main container for app content with preset layouts and heading controls. Use it to structure full-screen views with consistent navigation and content organization.' +
    "\n\nPage is designed for full-screen modal interfaces and isn't suitable for inline content or partial page layouts within existing POS screens.",
  thumbnail: 'page-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the page component.',
      type: 'Page',
    },
    {
      title: 'Slots',
      description:
        'The page component supports slots for additional content placement within the page. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'PageSlots',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'page-default.png',
    description:
      'Structure full-screen views using a page component with built-in header and content layouts. This example shows a basic page with title and main content area.',
    codeblock: {
      title: 'Structure a page layout',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
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
- **Write descriptive headings:** Use heading and subheading to describe the page's purpose and provide context about the current workflow step.
- **Place one primary action in action bar:** Use the secondary-actions slot for the page's most important action.
- **Use aside for supplementary content:** Reserve the aside slot for navigation, contextual help, or supporting information.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
The \`secondary-actions\` slot supports only a single button element. Multiple actions in the action bar aren't supported and should be handled within the main content area.
`,
    },
  ],
  related: [],
};

export default data;
