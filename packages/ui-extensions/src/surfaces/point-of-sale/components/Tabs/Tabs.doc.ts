import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tabs',
  description:
    'The `Tabs` component organizes content into separate views, where only one view is visible at a time. Use tabs to let merchants switch between related sections without leaving the current page.' +
    '\n\nTabs work together with `TabList`, individual tab buttons (`s-tabs`), and `TabPanel` components to create a complete tabbed interface. Each tab panel is associated with a tab button through the `controls` and `id` attributes.',
  thumbnail: 'tabs-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Tabs` component.',
      type: 'Tabs',
    },
    {
      title: 'Events',
      description:
        'The `Tabs` component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TabsEvents',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'tabs-default.png',
    description:
      'Organize content into switchable views using the `Tabs` component with tab buttons and panels. This example shows a basic tabbed interface with three sections.',
    codeblock: {
      title: 'Organize content with tabs',
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
- **Use clear, concise labels:** Keep tab labels short and descriptive (1-2 words when possible).
- **Limit the number of tabs:** Use 3-7 tabs maximum. Consider alternative navigation for more sections.
- **Keep related content together:** Only use tabs for content that's closely related and at the same level of hierarchy.
- **Use controlled state when needed:** Set \`value\` and handle \`onChange\` events for controlled tab selection.
- **Provide accessibility labels:** Use \`accessibilityLabel\` to describe the purpose of the tab group for screen readers.
- **Associate tabs with panels:** Ensure each tab's \`controls\` attribute matches a corresponding \`TabPanel\` \`id\`.
`,
    },
  ],
  related: [],
};

export default data;

