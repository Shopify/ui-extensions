import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tabs',
  description:
    'The tabs component organizes content into separate views, allowing merchants to switch between related information without leaving the current page. Use tabs when you need to present multiple categories of content in a space-efficient manner.' +
    '\n\nTabs consist of a tab list containing clickable tab buttons and corresponding tab panels that display the content. Only one panel is visible at a time, reducing cognitive load and keeping the interface clean.',
  thumbnail: 'tab-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Tabs Properties',
      description: 'Configure the following properties on the tabs component.',
      type: 'Tabs',
    },
    {
      title: 'Tabs Events',
      description:
        'The tabs component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'TabsEvents',
    },
    {
      title: 'TabList',
      description:
        'The tab list component contains the tab buttons. It must be a direct child of the tabs component.',
      type: 'TabListJSXProps',
    },
    {
      title: 'Tab',
      description:
        'The tab component represents an individual tab button. It must be placed within a tab list and should use the `controls` property to associate it with a corresponding tab panel.',
      type: 'Tab',
    },
    {
      title: 'TabPanel',
      description:
        'The tab panel component contains the content for each tab. It must have an `id` that matches the `controls` property of the corresponding tab.',
      type: 'TabPanel',
    },
  ],
  category: 'Web components',
  subCategory: 'Layout and structure',
  defaultExample: {
    image: 'tab-default.png',
    description:
      'Organize content into tabs using the tabs component with tab list, tab, and tab panel components. This example shows a basic tabbed interface with two tabs.',
    codeblock: {
      title: 'Create a tabbed interface',
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
      anchorLink: 'accessibility',
      title: 'Accessibility',
      sectionContent: `
- **Provide accessibility labels:** Use the \`accessibilityLabel\` prop on the tabs component to describe the purpose of the tab group.
- **Ensure keyboard navigation:** The component supports arrow key navigation between tabs and Enter/Space to activate tabs.
- **Connect tabs and panels:** Always use matching \`controls\` (on tab) and \`id\` (on tab panel) properties to maintain proper semantic relationships.
`,
    },
  ],
  related: [],
  examples: {
    description: 'Learn how to handle tab change events.',
    examples: [
      {
        description:
          'Subscribe to the `onChange` event to respond when merchants select different tabs. This example shows how to handle tab changes and capture the selected tab value in real time, enabling dynamic behavior based on which tab is active.',
        codeblock: {
          title: 'Handle tab change events',
          tabs: [
            {
              code: './examples/event-handling.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
};

export default data;
