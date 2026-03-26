import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Banner';

const data: ReferenceEntityTemplateSchema = {
  ...sharedContent,
  isVisualComponent: true,
  thumbnail: 'banner-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'BannerElementProps',
    },
    {
      title: 'Events',
      description:
        'Learn more about [registering events](/docs/api/checkout-ui-extensions/latest/using-polaris-components#event-handling).',
      type: 'BannerElementEvents',
    },
  ],
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Code',
      tabs: [
        {
          code: './examples/basic-banner.example.html',
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
          'Show a warning banner that buyers can dismiss or expand. This example uses the `warning` tone with `dismissible` and `collapsible` properties to display an address verification message with expandable details.',
        codeblock: {
          title: 'Show a dismissible warning with collapsible details',
          tabs: [
            {
              code: './examples/banner-warning-dismissible.example.html',
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
      sectionContent:
        '- Use banners thoughtfully and sparingly, and only for the most important information. Too many banners distract customers from completing checkout.\n\n- Banners are typically displayed at the top of a page or a section, if they relate to specific content. Place banners below the relevant page or section header.\n\n- Include a Button component with next steps when possible.\n\n- Make banners dismissible, unless they contain critical information or an important step that customers need to take.\n\n- Use the `info` banner to update customers about a change or to give them advice.\n\n- Use the `warning` banner to display information that needs attention or that customers need to take action on. Warning banners can be stressful for customers, so be cautious about using them.\n\n- Use the `critical` banner to communicate problems that customers need to resolve immediately to complete checkout.',
    },
  ],
};

export default data;
