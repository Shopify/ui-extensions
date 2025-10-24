import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Action menu',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Present complex or cross‑app actions in a menu with rich items and contextual details.',

  description: `Use a rich action menu when actions need more context than a standard menu. Menu items can include an app avatar, app name, and account to make it clear where an action runs and which identity it uses. This pattern is suited to cross‑app actions (for example, Send with an email provider, Schedule in a social app), advanced operations, and account‑scoped choices without crowding the interface.

  | Used to | Examples |
  | --- | --- |
  | Offer cross‑app actions |  Send with an email provider; Schedule in a social media app; Manage in a subscription app |
  | Provide identity and context in actions  | Show the app’s avatar and name next to “Send with EmailCo” |

  ---
  

  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/actionMenu.png',
  defaultExample: {
    codeblock: {
      title: 'Account connection',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/actionMenu.html',
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
