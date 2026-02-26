import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import sharedContent from '../../../../docs/shared/components/QueryContainer';

const data: AdminReferenceEntityTemplateSchema = {
  ...sharedContent,
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/querycontainer.png',
  isVisualComponent: true,
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use for component-level responsiveness:** Query containers allow components to adapt based on their container size rather than viewport size. This is valuable for components that appear in different contexts with varying widths, like a product card that might appear in a sidebar or main content area.
- **Name containers when you have multiple:** When you have multiple query container components and need to target specific ones with different queries, provide descriptive container names. Without names, all containers respond to the same queries.
- **Understand the relationship with CSS:** query container establishes the containment context, but you must write the actual container query CSS rules. The component doesn't automatically make content responsive - it enables you to write responsive CSS.
- **Consider performance impact:** Each query container adds browser work to track container dimensions and apply conditional styles. Use them where you need container-based responsiveness, not as a wrapper for every element.`,
    },
    {
      title: 'Limitations',
      type: 'Generic' as const,
      anchorLink: 'limitations',
      sectionContent: `- The query container component doesn't expose the container's current dimensions to JavaScript. It's purely for enabling CSS container queries. If you need to access container dimensions programmatically, you'll need to use the [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) directly.`,
    },
  ],
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the query container component.',
      type: 'QueryContainer',
    },
    {
      title: 'Slots',
      description:
        'The query container component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'QueryContainerSlots',
    },
  ],
  defaultExample: {
    image: 'ordered-list-default.png',
    description:
      "Wrap content in a query container to enable responsive styling based on the container's width. This example shows a box whose padding changes when the container exceeds 500px.",
    codeblock: {
      title: 'Add a responsive container',
      tabs: [
        {
          code: './examples/default.html',
          language: 'preview',
          title: '',
          layout: 'none',
        },
      ],
    },
  },
  related: [],
  examples: {
    description: 'Component examples',
    exampleGroups: [
      {
        title: '',
        examples: [
          {
            description:
              'Use the `containerName` property to target a specific query container when multiple containers are present. This example shows the same named container at two different widths (375px and 450px) to demonstrate how the responsive padding changes at the 400px breakpoint.',
            codeblock: {
              title: 'Target a named container for responsive queries',
              tabs: [
                {
                  code: './examples/basic-usage.html',
                  language: 'preview',
                  title: '',
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
