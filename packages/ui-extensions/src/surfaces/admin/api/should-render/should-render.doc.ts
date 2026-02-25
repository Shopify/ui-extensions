import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Should Render API',
  description:
    'The Should Render API lets you [conditionally show or hide admin action extensions](/docs/apps/build/admin/actions-blocks/hide-extensions) dynamically. Use this API to control action visibility based on resource state, user permissions, or business logic.',
  isVisualComponent: false,
  type: 'API',
  defaultExample: {
    description:
      'Return `true` to show the action extension only when items are selected. This simple check prevents the action extension from appearing on empty pages or when no resources are chosen.',
    codeblock: {
      title: 'Check when items are selected',
      tabs: [
        {
          title: 'React',
          code: './examples/check-product-tag.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/check-product-tag.ts',
          language: 'ts',
        },
      ],
    },
  },
  definitions: [
    {
      title: 'Properties',
      description:
        'The `ShouldRenderApi` object provides properties for controlling action extension visibility. Access the following properties on the `ShouldRenderApi` object to determine whether an associated action should appear based on the current context.',
      type: 'ShouldRenderApi',
    },
  ],
  examples: {
    description: 'Conditionally show or hide action extensions',
    examples: [
      {
        description:
          'Check if exactly one item is selected before showing the action extension. This pattern ensures action extensions that operate on individual resources only appear when appropriate.',
        codeblock: {
          title: 'Require one item to be selected',
          tabs: [
            {
              title: 'React',
              code: './examples/check-order-status.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/check-order-status.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Validate selection count is between 1 and 50 before showing bulk actions. This example prevents the action extension from appearing when nothing is selected or when too many items would overload the operation.',
        codeblock: {
          title: 'Validate selection count',
          tabs: [
            {
              title: 'React',
              code: './examples/bulk-selection-check.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/bulk-selection-check.ts',
              language: 'ts',
            },
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
