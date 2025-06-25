import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Settings',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Organize settings into categories for easy navigation.',
  description: `This layout groups settings into categories with a heading and description, to make it easier for merchants to scan the page and quickly find what they are looking for.
  | Used to    | Examples |
| -------- | ------- |
| Find and change app settings  | Membership settings, app appearance, set up theme blocks     |

  ![Preview of the settings pattern](/assets/templated-apis-screenshots/admin/patterns/settings-example.png)

  This pattern uses \`Section\`, \`Stack\`, \`Heading\`, \`Button\`, \`Table\`, \`Paragraph\`, \`Box\` and \`Grid\` components.

  ---

  ## Design guidelines
  Design scannable settings pages with groups of related information placed in logical order.

  ### Navigation

  * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
  * Offer users clear and predictable action labels.

  ---

  ### Visual design

  Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.

  * Use looser spacing for low-density layouts. Use tighter spacing for high-density layouts.
  * Use high-resolution photos and images to ensure a professional, high-quality experience.

  ---

  <style>
    div[class*="CodeBlock-module-CodeBlock_"] {
      max-height: calc(100vh - 80px) !important;
    }
    div[class*="Tabs-module-TabsContent_"] {
      overflow: auto !important;
    }
    div[class*="Screenshot-module-Screenshot_"] {
      display: none !important;
    }
  </style>`,
  isVisualComponent: true,
  category: 'Patterns',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/settings.png',
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/patterns/settings-example.png',
    codeblock: {
      title: 'Settings',
      tabs: [
        {
          title: 'JSX',
          code: './examples/settings.jsx',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/settings.html',
          language: 'html',
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
