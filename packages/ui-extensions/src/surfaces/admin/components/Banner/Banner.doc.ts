import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Banner';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/banner.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Focus on single actions:** Present one piece of information or required action per banner to maintain clarity and prevent confusion.
- **Keep messages concise:** Write scannable content that merchants can quickly understand without spending time deciphering meaning or next steps.
- **Provide clear actions:** Info, warning, and critical banners should include a call to action with specific next steps so merchants know how to proceed.
- **Make dismissible when appropriate:** Allow merchants to dismiss banners unless immediate action's required. Avoid persistent banners that can't be closed.
- **Position contextually:** Place banners outside sections for page-wide messages or inside sections for contextual messages relevant to specific content.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The dismissed state doesn't persist across page loads or sessions. You must implement your own persistence logic using local storage, cookies, or server-side state.
- Multiple banners stack vertically without built-in prioritization or queueing. If you show multiple banners at once, all appear simultaneously. You must implement banner queueing logic yourself to show one at a time.
- Banners can't be fixed or sticky at the top of the viewport. They scroll with page content.
- Banners don't have built-in truncation or "read more" functionality. Very long banner messages will wrap to multiple lines, creating tall banners that dominate the screen.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the banner component.',
      type: 'Banner',
    },
    {
      title: 'Events',
      description:
        'The banner component provides event callbacks for handling user interactions. Learn more about [handling events](/docs/api/polaris/using-polaris-web-components#handling-events).',
      type: 'BannerEvents',
    },
    {
      title: 'Slots',
      description:
        'The banner component supports slots for additional content placement within the banner. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'BannerSlots',
    },
  ],
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },

        {
          code: './examples/default.jsx',
          language: 'preview-jsx',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: 'Basic usage',
        examples: [
          {
            description:
              'Demonstrates a simple informational banner used to communicate status updates or completed actions, providing clear and concise feedback to the user.',
            codeblock: {
              title: 'Basic information banner',
              tabs: [
                {
                  code: './examples/basic-information-banner.html',
                  language: 'html',
                },

                {
                  code: './examples/basic-information-banner.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help merchants resolve the problem quickly and effectively.',
            codeblock: {
              title: 'Warning banner with specific actions',
              tabs: [
                {
                  code: './examples/warning-banner-with-specific-actions.html',
                  language: 'html',
                },

                {
                  code: './examples/warning-banner-with-specific-actions.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide merchants.',
            codeblock: {
              title: 'Critical banner with clear next steps',
              tabs: [
                {
                  code: './examples/critical-banner-with-clear-next-steps.html',
                  language: 'html',
                },

                {
                  code: './examples/critical-banner-with-clear-next-steps.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Success confirmation with dismiss option for completed operations.',
            codeblock: {
              title: 'Dismissible success banner',
              tabs: [
                {
                  code: './examples/dismissible-success-banner.html',
                  language: 'html',
                },

                {
                  code: './examples/dismissible-success-banner.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
          {
            description:
              'Informational banner highlighting app updates with clear benefits and actions.',
            codeblock: {
              title: 'Info banner with clear value proposition',
              tabs: [
                {
                  code: './examples/info-banner-with-clear-value-proposition.html',
                  language: 'html',
                },

                {
                  code: './examples/info-banner-with-clear-value-proposition.jsx',
                  language: 'preview-jsx',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
