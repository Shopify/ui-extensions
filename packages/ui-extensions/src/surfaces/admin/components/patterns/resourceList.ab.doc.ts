import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Resource list',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.',

  description: `A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.
.

  | Used to | Examples |
  | --- | --- |
  | Display collections of similar resources |  Campaigns, subscribers, social posts, templates|
  | Help merchants find and select items  | Search subscribers by email; Filter campaigns by status |
  | Perform bulk actions on selected items  | Tag subscribers; Archive campaigns; Publish selected posts |

  ---
  

  
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/resourceList.png',
  defaultExample: {
    codeblock: {
      title: 'Resource list',
      tabs: [
        {
          title: 'Preview',
          code: 'examples/resourceList.html',
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
