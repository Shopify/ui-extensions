import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AppCard',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Introduce and promote relevant apps to merchants within your app experience.',
  description: `App cards provide a consistent layout for presenting another app to merchants. They are used to highlight apps that can extend functionality or help merchants accomplish related tasks. App cards should educate merchants about the value of the suggested app and provide a clear, actionable way to learn more or install it.

  | Used to | Examples |
  | --- | --- |
  | Suggest complementary apps | Recommend an email marketing app to subscription service users |
  | Promote integrations | Highlight a social media scheduler that connects with your app |
  | Guide merchants to explore new solutions | Introduce a reporting tool for advanced analytics |

  ---
  

  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/appCard.png',
  defaultExample: {
    codeblock: {
      title: 'AppCard',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/appCard.html',
          language: 'preview',
        },
      ],
    },
  },

  related: [
    {
      name: 'Built for Shopify',
      subtitle: 'Requirements',
      url: '/docs/apps/launch/built-for-shopify/requirements',
      type: 'component',
    },
  ],
};

export default data;
