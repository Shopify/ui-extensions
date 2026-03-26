import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Announcement';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  isVisualComponent: true,
  thumbnail: 'announcement-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'AnnouncementElementEvents',
    },
    {
      title: 'Methods',
      description:
        'Learn more about [component methods](/docs/api/checkout-ui-extensions/latest/using-polaris-components#methods).',
      type: 'AnnouncementElementMethods',
    },
  ],
  defaultExample: {
    image: 'announcement-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-announcement.example.html',
          language: 'html',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          'Display a short promotional message without a modal. This example uses inline text to announce a discount code that fits in the default collapsed state.',
        codeblock: {
          title: 'Display a promotional discount announcement',
          tabs: [
            {
              code: './examples/announcement-discount.example.html',
              language: 'html',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `- Prioritize the default state: The most effective use of the announcement bar is when content is short enough to display entirely in its default state, with no need for expansion. This provides the best user experience.
- Handle content truncation: The component has a strict maximum height. Content that exceeds the expanded state's height will be cut off with no scrolling capability. Ensure your application's logic handles excessively long content gracefully to prevent truncation.
- Provide a modal alternative: If your application needs to display more than a few lines of content, avoid cramming it into the announcement bar. Instead, use the bar as a teaser that links to a modal. This is the recommended pattern for displaying surveys, detailed offers, or other longer-form content.`,
    },
  ],
};

export default data;
