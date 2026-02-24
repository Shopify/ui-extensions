import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Pressable',
  description:
    'The Pressable component creates a clickable area around its children without adding any visible button or link styling. It combines the layout capabilities of [Box](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/box) with the navigation and click handling of [Link](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link), making it useful for building custom interactive elements like clickable cards or list items.\n\nFor standard actions with button styling, use [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button).',
  requires: '',
  thumbnail: 'pressable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Pressable component.',
      type: 'PressableProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'pressable-default.png',
    description:
      'Trigger an inventory sync or a data export from icon-labeled action rows. This example uses `Pressable` with `onPress` callbacks and [Icon](/docs/api/admin-extensions/{API_VERSION}/components/media-and-visuals/icon) labels to create clickable rows that call backend APIs without visible button styling.',
    codeblock: {
      title: 'Build custom action rows',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Pressable/examples/basic-pressable.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-pressable.example.ts',
          language: 'ts',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description:
          "Use `href` and `target` props to make a `Pressable` behave as a link, wrapping rich content like [Image](/docs/api/admin-extensions/{API_VERSION}/components/media-and-visuals/image) and text. This example creates a clickable card that opens the product's storefront page in a new tab.",
        codeblock: {
          title: 'Create a clickable product card',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Pressable/examples/pressable-link.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/pressable-link.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Label custom tappable areas for screen readers using `accessibilityLabel`. This example renders warehouse location rows with [Badge](/docs/api/admin-extensions/{API_VERSION}/components/feedback-and-status-indicators/badge) indicators, where each row announces its stock level and location name to assistive technology.',
        codeblock: {
          title: 'Add accessible interactive regions',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Pressable/examples/pressable-accessible.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/pressable-accessible.example.ts',
              language: 'ts',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use for custom interactive layouts:** Pressable is ideal when you need to make a group of elements clickable as a single unit, such as a card that navigates to a detail page. For standard actions, prefer [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) or [Link](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link).
- **Pair with visual hover cues:** Pressable changes the cursor on hover, but consider combining it with other visual feedback so the interactive area is obvious to all users.
- **Avoid nesting interactive elements:** Don't place [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) or [Link](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link) components inside a Pressable. Nesting interactive elements creates confusing behavior for keyboard and screen reader users and can lead to unexpected click handling.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Pressable doesn't render any visual styling beyond a cursor change on hover. All visual feedback, such as background color changes or borders, must be handled by the child components.
- Pressable doesn't support form submission or reset behavior. Use a [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) to submit or reset forms.
- When using \`href\` for navigation, the \`onClick\` callback fires before navigation. You can't conditionally prevent navigation from within the callback.`,
    },
  ],
  related: [],
};

export default data;
