import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The Icon component renders a Polaris icon from a predefined set of names. Icons are useful for reinforcing meaning alongside text, indicating actions in buttons, or providing visual cues in status indicators.\n\nFor displaying images from URLs, use [Image](/docs/api/admin-extensions/{API_VERSION}/ui-components/media-and-visuals/image).',
  requires: '',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Icon component.',
      type: 'IconProps',
    },
    {
      title: 'IconName',
      description:
        'The complete list of available icon names, corresponding to the Polaris icon set.',
      type: 'IconName',
    },
  ],
  category: 'UI components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'icon-default.png',
    description:
      'Pair status icons with text labels to indicate sync success and pricing errors. This example uses `Icon` with `CircleTickMajor` and `CircleAlertMajor` names inside an [InlineStack](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/inlinestack), with `accessibilityLabel` props for screen readers.',
    codeblock: {
      title: 'Show action status indicators',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Icon/examples/basic-icon.example.tsx',
          language: 'tsx',
        },
        {
          title: 'TS',
          code: './examples/basic-icon.example.ts',
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
          'Apply the `critical` tone to icons that represent failures or items requiring attention. This example shows passing and failing compliance checks, using the default tone for passes and `tone="critical"` for failures so merchants can spot problems at a glance.',
        codeblock: {
          title: 'Apply critical tone to warning icons',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Icon/examples/icon-tones.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/icon-tones.example.ts',
              language: 'ts',
            },
          ],
        },
      },
      {
        description:
          'Scale an icon to match its parent container for larger displays like status badges or app logos. This example places an icon with `size="fill"` inside a fixed-size [Box](/docs/api/admin-extensions/{API_VERSION}/components/layout-and-structure/box), allowing it to scale proportionally.',
        codeblock: {
          title: 'Fill a container with an icon',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Icon/examples/icon-fill.example.tsx',
              language: 'tsx',
            },
            {
              title: 'TS',
              code: './examples/icon-fill.example.ts',
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
      sectionContent: `- **Pair icons with text labels:** Icons work best when accompanied by a text label. Avoid using icons alone unless their meaning is universally understood (like a trash icon for delete).
- **Choose meaningful icons:** Select icons that clearly communicate the intended concept. Browse the [Polaris Icons documentation](https://polaris.shopify.com/icons) to find the best match.
- **Don't use icons for decoration:** Every icon should serve a functional purpose. Decorative icons add visual noise and can confuse merchants who rely on assistive technologies.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Only icons from the Polaris icon set are available. Custom SVGs or external icon libraries can't be used.
- Icon supports limited \`tone\` options (\`inherit\` and \`critical\`) and \`size\` options (\`base\` and \`fill\`). Arbitrary pixel sizes and custom colors aren't supported.
- Icons are rendered as visual elements only. They don't support click handlers or interactive behavior. To make an icon clickable, wrap it in a [Button](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) or [Pressable](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable) component.`,
    },
  ],
  related: [],
};

export default data;
