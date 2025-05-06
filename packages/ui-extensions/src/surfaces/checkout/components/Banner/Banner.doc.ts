import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Banner',
  description:
    'Use `s-banner` to communicate important status updates or indicate that there are important actions that users must take. \n\n You can use banners both as a standalone component on a page or inside of a `s-section`.',
  isVisualComponent: true,
  thumbnail: 'banner-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: '',
      type: 'BannerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'banner-default.png',
    codeblock: {
      title: 'Default example',
      tabs: [
        {
          code: './examples/basic-banner.example.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use banners thoughtfully and sparingly, and only for the most important information. Too many banners distract customers from completing checkout.\n\n- Banners are typically displayed at the top of a page or a section, if they relate to specific content. Place banners below the relevant page or section header.\n\n- Include a Button component with next steps when possible.\n\n- Make banners dismissible, unless they contain critical information or an important step that customers need to take.\n\n- Use the `info` banner to update customers about a change or to give them advice.\n\n- Use the `warning` banner to display information that needs attention or that customers need to take action on. Warning banners can be stressful for customers, so be cautious about using them.\n\n- Use the `critical` banner to communicate problems that customers need to resolve immediately to complete checkout.',
    },
    {
      type: 'Generic',
      anchorLink: 'tone',
      title: 'Tone',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"info"</code> | Convey general information or actions that aren’t critical or tied to a particular action. |\n| <code>"success"</code> | Use rarely, only if you need additional visual confirmation that a non-standard action has been completed successfully, for example adding an item to an order as an upsell. |\n| <code>"warning"</code> | Display information that needs attention or that customers should take action on. Seeing these banners can be stressful for customers so be cautious about using them. Should not block progress to next step. |\n| <code>"critical"</code> | Communicate problems that have to be resolved immediately for customers to complete a task. For example, using a different payment method if card details couldn’t be processed. Seeing these banners can be stressful for customers so be cautious about using them. |',
    },
  ],
  related: [],
};

export default data;
