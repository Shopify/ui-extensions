import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Details',
  overviewPreviewDescription:
    'Edit and view objects with efficient dual-column layout.',
  description: `The details page allows merchants to view, create and edit objects. Use the right column to provide editable fields, and the right column for supporting information such as status, metadata, and summaries.
 
  | Used to | Examples |
  | --- | --- |
  | View, edit and create objects  | Discounts, shipping labels, newsletters, templates. |

  ![Preview of the details page pattern](/assets/templated-apis-screenshots/admin/patterns/details-example.png)

  This pattern uses \`Badge\`, \`Box\`, \`Button\`, \`Grid\`, \`Heading\`, \`Image\`, \`Link\`, \`MoneyField\`, \`NumberField\`, \`SearchField\`, \`Section\`, \`Select\`, \`Stack\`, \`Switch\`, \`Table\`, \`TextArea\`, \`TextField\`, \`UnorderedList\`, and \`URLField\` components.

  ---

  ## Design guidelines
  Design details pages that enable users to create, view, and edit resource objects.

  ### Navigation

  * Users must be able to return to the previous page without using the browser button. To achieve this, your app can provide breadcrumbs or a Back button on the page.
  * Use tabs sparingly for secondary navigation purposes when the nav menu isn't sufficient.
    * Clicking a tab should only change the content below it, not above.
    * Tabs should never wrap onto multiple lines.
    * Navigating between tabs shouldn't cause the tabs to change position or move.
    * Offer users clear and predictable action labels.

  ---

  ### Layout

  * Design your app to be responsive and adapt to different screen sizes and devices. This ensures a seamless user experience across various platforms.
  * Use looser spacing for low-density layouts. Use tighter spacing for high-density layouts.
  * Always use the default width. Full width tends to waste space and make the page harder to parse
  * In the primary column: Put information that defines the resource object
  * In the secondary column: Put supporting information such as status, metadata, and summaries
  * Arrange content in order of importance
  * Group similar content in the same card
  * Place unique page actions at the top of the actions list and typical object actions at the bottom

  ---

  ### Forms

  * For more than five inputs, use sections with titles in one card or use multiple cards with headers.
  * Form inputs should be saved using the App Bridge Contextual Save Bar API. This also applies to forms within max modals. Continuous data validation or auto-save for forms is consistent with the standard Shopify admin save UX.

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
  subCategory: 'Templates',
  thumbnail: '/assets/templated-apis-screenshots/admin/patterns/details.png',
  defaultExample: {
    codeblock: {
      title: 'Details',
      tabs: [
        {
          title: 'JSX',
          code: './examples/details.jsx',
          language: 'jsx',
        },
        {
          title: 'HTML',
          code: './examples/details.html',
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
