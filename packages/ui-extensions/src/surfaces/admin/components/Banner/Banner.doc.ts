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
    description:
      'Create an informational banner with a heading and body text. This example shows a basic banner communicating a status update that merchants can dismiss.',
    codeblock: {
      title: 'Add a dismissible info banner',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
        },
      ],
    },
  },
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use a warning-toned banner with secondary action [buttons](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) to highlight a problem and give merchants clear next steps. This example shows a shipping weight issue with links to review products and access a setup guide.',
            codeblock: {
              title: 'Create a warning banner with buttons for next steps',
              tabs: [
                {
                  code: './examples/warning-banner-with-specific-actions.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use a critical-toned banner to signal an urgent issue that requires immediate merchant action. This example shows a fraud review alert with [buttons](/docs/api/{API_NAME}/{API_VERSION}/polaris-web-components/actions/button) to review order details and adjust settings.',
            codeblock: {
              title: 'Alert merchants to critical issues requiring action',
              tabs: [
                {
                  code: './examples/critical-banner-with-clear-next-steps.html',
                  language: 'preview',
                  title: '',
                },
              ],
            },
          },
          {
            description:
              'Use a success-toned banner with the `dismissible` property to confirm a completed operation. This example shows a product import confirmation that merchants can dismiss once acknowledged.',
            codeblock: {
              title: 'Confirm a completed action with a dismissible banner',
              tabs: [
                {
                  code: './examples/dismissible-success-banner.html',
                  language: 'preview',
                  title: '',
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
