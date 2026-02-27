import {AdminReferenceEntityTemplateSchema} from '../../docs-types';

const data: AdminReferenceEntityTemplateSchema = {
  name: 'Resource list',
  isOneColumnLayout: false,
  overviewPreviewDescription:
    'A resource list displays a collection of objects of the same type, like products or customers. The main job of a resource list is to help merchants find an object and navigate to a full-page representation of it.',

  description: `When merchants need to browse and select from a collection of similar items, a resource list provides a compact, scannable format. It helps merchants find an object and navigate to its full-page representation.

  Use resource lists for smaller collections, or when you need a simpler selection interface within a card or modal. This composition follows proven design guidelines that help your app feel native to the Shopify admin. See [Built for Shopify requirements](/docs/apps/launch/built-for-shopify/requirements) for more details on these guidelines for apps.
`,
  isVisualComponent: true,
  category: 'Patterns',
  subCategory: 'Compositions',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/patterns/resourceList.png',
  usedComponents: [
    'Avatar',
    'Button',
    'Checkbox',
    'Clickable',
    'ClickableChip',
    'Grid',
    'Heading',
    'Link',
    'Option',
    'Popover',
    'Section',
    'Select',
    'Stack',
    'Text',
    'TextField',
  ],
  recommendedApis: [
    'Modal API',
    'Navigation API',
    'Resource Picker API',
    'Toast API',
  ],
  recommendedTemplates: ['Details'],
  defaultExample: {
    description:
      'Merchants need to browse and select from a collection of items and navigate to details. This pattern provides search, filtering, and row selection for a resource list. The [text field](/docs/api/app-home/polaris-web-components/forms/text-field) uses `icon="search"` for filtering, the [popover](/docs/api/app-home/polaris-web-components/overlays/popover) holds filter options, and the [checkbox](/docs/api/app-home/polaris-web-components/forms/checkbox) enables row selection.',
    codeblock: {
      title: 'Provide search, filtering, and row selection for a resource list',
      tabs: [
        {
          title: 'html',
          code: 'examples/resourceList.html',
          language: 'html',
        },
        {
          title: 'jsx',
          code: 'examples/resourceList.jsx',
          language: 'preview-jsx',
          layout: 'compositionPattern',
        },
      ],
    },
  },
  examples: {
    description: `The examples below show how you can extend the resource list with additional functionality:

- [Modal API](#example-confirm-delete-with-modal-api): Confirm deletion before removing a list item.
- [Navigation API](#example-navigate-to-item-detail): Navigate to detail pages when clicking list items.
- [Resource Picker API](#example-add-items-with-resource-picker-api): Add products from the catalog to the list.
- [Toast API](#example-show-action-feedback-with-toast-api): Show feedback when actions are performed.`,
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use the [Resource Picker API](/docs/api/app-home/apis/resource-picker) to let merchants add products from their catalog to the list.',
            codeblock: {
              title: 'Add items with Resource Picker API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/resourceList-picker.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/resourceList-picker.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Modal API](/docs/api/app-home/apis/modal-api) to confirm deletion before removing a resource list item.',
            codeblock: {
              title: 'Confirm delete with Modal API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/resourceList-modal.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/resourceList-modal.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use `href` attributes on clickable items to navigate merchants to detail pages.',
            codeblock: {
              title: 'Navigate to item detail',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/resourceList-nav.jsx',
                  language: 'preview-jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/resourceList-nav.html',
                  language: 'html',
                },
              ],
            },
          },
          {
            description:
              'Use the [Toast API](/docs/api/app-home/apis/toast) to show feedback when actions are performed on resource list items.',
            codeblock: {
              title: 'Show action feedback with Toast API',
              tabs: [
                {
                  title: 'jsx',
                  code: 'examples/resourceList-toast.jsx',
                  language: 'jsx',
                  layout: 'compositionPattern',
                },
                {
                  title: 'html',
                  code: 'examples/resourceList-toast.html',
                  language: 'html',
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

export default data;
