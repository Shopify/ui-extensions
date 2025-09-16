import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Callout card',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'Encourage merchants to take action on new features or opportunities.',
  description: `Callout cards are used to encourage merchants to take an action related to a new feature or opportunity. They are most commonly displayed in the sales channels section of Shopify.
 
  | Used to | Examples |
  | --- | --- |
  | Promote new features or integrations | Dismissible feature announcement |
  | Drive adoption of app functionality | Common first actions |
  ---
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/calloutCard.png',
  defaultExample: {
    codeblock: {
      title: 'Callout card',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/calloutCard.html',
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
