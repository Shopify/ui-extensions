import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Homepage',
  overviewPreviewDescription:
    'Design your app homepage for daily merchant value.',
  description: `The app URL specified in the Partner Dashboard should point to your app homepage. The home page of your app is the first thing merchants will see, and it should provide daily value to them. Design the page to provide status updates and show merchants what actions they can take.

  | Used to    | Examples |
| -------- | ------- |
| Teach merchants how to use the app  | Onboarding, how-to guides    |
| Display app functionalities | Call-to-actions to app features, resource tables     |
| Show updates     | Status banners, company news    |

  ![Preview of the homepage pattern](/assets/templated-apis-screenshots/admin/patterns/homepage-example.png)

  This pattern uses \`Badge\`, \`Banner\`, \`Box\`, \`Button\`, \`Checkbox\`, \`Clickable\`, \`Divider\`, \`Grid\`, \`Heading\`, \`Image\`, \`Link\`, \`Paragraph\`, \`Section\`, \`Stack\`, and \`Text\` components.

  ---

  ## Design guidelines
  Your app home page should be designed to provide users with relevant, timely information like quick statistics, status updates, or information that’s immediately actionable.

  ### Onboarding

  The onboarding experience quickly introduces users to your app's essential features. A good onboarding should be self-guided, easy to follow and make users feel they understand how the app works after finishing it. If the onboarding is long or complex, give users the option to complete it at a later time to avoid stopping their workflow.

  * Onboarding must be brief and direct. Provide clear instructions and guide users to completion
  * Only request information from users if it's necessary
  * If your onboarding isn't essential, then make it dismissible
  * Don't have more than five steps in your onboarding process. This can lead users to drop off and not use your app

  ---

  ### Visual design

  * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
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
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/homepage.png',
  defaultExample: {
    codeblock: {
      title: 'Homepage',
      tabs: [
        {
          title: 'JSX',
          code: './examples/homepage.jsx',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/homepage.html',
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
