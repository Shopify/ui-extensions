import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminAction',
  description:
    'The AdminAction component configures the primary action, secondary action, and title for admin action extensions. Use AdminAction to define the core interaction points and header content that merchants see when your extension renders.' +
    '\n\nThis component is required for all admin action extensions and provides a standardized structure for action-based extension interfaces.' +
    '\n\nLearn how to [build an admin action extension](/docs/apps/build/admin/actions-blocks/build-admin-action).',
  requires: '',
  thumbnail:
    '/assets/templated-apis-screenshots/admin/components/adminaction.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the AdminAction component.',
      type: 'AdminActionProps',
    },
    {
      title: 'Slots',
      description:
        'The AdminAction component supports slots for additional content placement within the component. Learn more about [using slots](/docs/api/polaris/using-polaris-web-components#slots).',
      type: 'AdminActionSlots',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Settings and templates',
  subSections: [
    {
      title: 'Best practices',
      type: 'Generic' as const,
      anchorLink: 'best-practices',
      sectionContent: `- **Use action-oriented labels:** Write labels using the \`{verb}+{noun}\` format like **Save changes**, **Delete product**, or **Create discount** rather than generic labels like **Submit** or **OK**.
- **Follow action hierarchy:** Primary actions complete or advance the workflow (like **Save** or **Publish**), while secondary actions cancel or go back (like **Cancel** or **Discard changes**).
- **Write descriptive titles:** Titles should name the specific task like **Edit shipping settings** or **Archive old orders**, not generic phrases like **Actions** or **Settings**.
- **Limit to one task per action:** Each button should trigger a single operation. If you need multiple steps, guide merchants through them sequentially rather than combining operations.`,
    },
  ],
  defaultExample: {
    image:
      '/assets/templated-apis-screenshots/admin/components/adminaction-example.png',
    codeblock: {
      title: '',
      tabs: [
        {
          title: 'JSX',
          code: './examples/default.tsx',
          language: 'jsx',
        },
      ],
    },
  },
  related: [],
};

export default data;
