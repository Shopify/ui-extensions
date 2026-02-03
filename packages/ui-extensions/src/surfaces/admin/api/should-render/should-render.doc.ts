import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Should Render API',
  description:
    'The Should Render API lets you [conditionally show or hide admin action extensions](/docs/apps/build/admin/actions-blocks/hide-extensions) dynamically. Use this API to control action visibility based on resource state, user permissions, or business logic.',
  isVisualComponent: false,
  type: 'API',
  definitions: [
    {
      title: 'ShouldRenderApi',
      description:
        'The `ShouldRenderApi` object provides methods for controlling action extension visibility. Access the following properties on the `ShouldRenderApi` object to determine whether an associated action should appear based on the current context.',
      type: 'ShouldRenderApi',
    },
  ],
  defaultExample: {
    description:
      'Checks `data.selected.length` and returns true only when items are selected. Prevents actions from appearing on empty pages.',
    codeblock: {
      title: 'Check when items selected',
      tabs: [
        {code: './examples/check-product-tag.ts', language: 'ts'},
        {code: './examples/check-product-tag.tsx', language: 'tsx'},
      ],
    },
  },
  examples: {
    description: 'Conditionally show or hide action extensions',
    examples: [
      {
        description:
          'Returns true only when exactly one item is selected. For actions designed for individual resources.',
        codeblock: {
          title: 'Require one item selected',
          tabs: [
            {code: './examples/check-order-status.ts', language: 'ts'},
            {code: './examples/check-order-status.tsx', language: 'tsx'},
          ],
        },
      },
      {
        description:
          'Returns true when selection count is between 1 and 50. Protects against performance issues with very large bulk operations.',
        codeblock: {
          title: 'Validate selection count',
          tabs: [
            {code: './examples/bulk-selection-check.ts', language: 'ts'},
            {code: './examples/bulk-selection-check.tsx', language: 'tsx'},
          ],
        },
      },
    ],
  },
  category: 'Target APIs',
  subCategory: 'Utility APIs',
  related: [],
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent:
        '- **Keep evaluation under ~50ms:** Slow `shouldRender` functions delay page rendering for all merchants. Profile your logic and optimize for speed.',
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent:
        '- The function must return an object with a `display` property. Returning a plain boolean like `true` instead of `{ display: true }` fails.\n' +
        "- No asynchronous operations are supported. Async functions, promises, fetch calls, and timers won't work.\n" +
        "- Your extension can't access external data sources. Evaluation is limited to data available in `api.data.selected` and in-memory state.\n" +
        '- The function runs only once when the page loads. Action visibility stays fixed after that, even if resource data, selections, or other conditions change later.',
    },
  ],
};

export default data;
