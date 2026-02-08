import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Pressable',
  description:
    'The `Pressable` component creates a clickable area around its children without adding any visible button or link styling. It combines the layout capabilities of [`Box`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/box) with the navigation and click handling of [`Link`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link), making it useful for building custom interactive elements like clickable cards or list items.\n\nFor standard actions with button styling, use [`Button`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button).',
  requires: '',
  thumbnail: 'pressable-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Pressable` component.',
      type: 'PressableProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'pressable-default.png',
    codeblock: {
      title: 'Simple pressable example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Pressable/examples/basic-pressable.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-pressable.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      title: 'Best practices',
      anchorLink: 'best-practices',
      sectionContent: `- **Use for custom interactive layouts:** \`Pressable\` is ideal when you need to make a group of elements clickable as a single unit, such as a card that navigates to a detail page. For standard actions, prefer [\`Button\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) or [\`Link\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link).
- **Pair with visual hover cues:** \`Pressable\` changes the cursor on hover, but consider combining it with other visual feedback so the interactive area is obvious to all users.
- **Avoid nesting interactive elements:** Don't place [\`Button\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) or [\`Link\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link) components inside a \`Pressable\`. Nesting interactive elements creates confusing behavior for keyboard and screen reader users and can lead to unexpected click handling.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- \`Pressable\` doesn't render any visual styling beyond a cursor change on hover. All visual feedback, such as background color changes or borders, must be handled by the child components.
- \`Pressable\` inherits from both [\`Box\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/layout-and-structure/box) and [\`Link\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link), but it doesn't support \`accessibilityRole\` values beyond what [\`Link\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/link) provides. If you need a semantically distinct role (such as \`submit\` or \`reset\`), use a [\`Button\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) instead.
- When using \`href\` for navigation, the \`onClick\` callback fires before navigation. You can't conditionally prevent navigation from within the callback.`,
    },
  ],
  related: [],
};

export default data;
