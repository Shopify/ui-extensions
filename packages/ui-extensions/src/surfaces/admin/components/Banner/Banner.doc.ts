import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/Banner';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  thumbnail: '/assets/templated-apis-screenshots/admin/components/banner.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Useful for',
      type: 'Generic' as const,
      anchorLink: 'useful-for',
      sectionContent: `- Showing important information or changes
- Prompting merchants to take a specific action
- Displaying warnings, errors, or critical information
- Communicating persistent conditions that need attention
`,
    },
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- Seeing these banners can be stressful, so use them sparingly to avoid overwhelming users.
- Focus on a single piece of information or required action to avoid overwhelming users.
- Make the message concise and scannable. Users shouldn’t need to spend a lot of time figuring out what they need to know and do.
- Info, Warning and Critical banners should contain a call to action and clear next steps. Users should know what to do after seeing the banner.
- Avoid banners that can't be dismissed unless the user is required to take action.`,
    },
    {
      title: 'Content guidelines',
      type: 'Generic' as const,
      anchorLink: 'content-guidelines',
      sectionContent: `- Keep titles concise and clear
- Limit body content to 1-2 sentences where possible
- Use action-led buttons with strong verbs (e.g., "Activate Apple Pay" not "Try Apple Pay")
- Avoid unnecessary words and articles in button text
- For warning and critical banners, explain how to resolve the issue`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'Banner',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/app-home/using-polaris-components#event-handling).',
      type: 'BannerEvents',
    },
    {
      title: 'Slots',
      description: '',
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
              'Illustrates a warning banner that highlights a potential issue and provides actionable buttons to help users resolve the problem quickly and effectively.',
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
              'Demonstrates an urgent banner design that signals a critical issue requiring immediate action, with clear and prominent secondary action buttons to guide users.',
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
