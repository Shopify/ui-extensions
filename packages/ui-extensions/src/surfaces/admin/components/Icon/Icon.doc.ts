import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The `Icon` component renders a Polaris icon from a predefined set of names. Icons are useful for reinforcing meaning alongside text, indicating actions in buttons, or providing visual cues in status indicators.\n\nFor displaying images from URLs, use [`Image`](/docs/api/admin-extensions/{API_VERSION}/ui-components/media-and-visuals/image).',
  requires: '',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Icon` component.',
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
    codeblock: {
      title: 'Simple Icon example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Icon/examples/basic-Icon.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Icon.example.ts',
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
      sectionContent: `- **Pair icons with text labels:** Icons work best when accompanied by a text label. Avoid using icons alone unless their meaning is universally understood (like a trash icon for delete).
- **Choose meaningful icons:** Select icons that clearly communicate the intended concept. Browse the [Polaris Icons documentation](https://polaris.shopify.com/icons) to find the best match.
- **Don't use icons for decoration:** Every icon should serve a functional purpose. Decorative icons add visual noise and can confuse merchants who rely on assistive technologies.`,
    },
    {
      type: 'Generic',
      title: 'Limitations',
      anchorLink: 'limitations',
      sectionContent: `- Only icons from the Polaris icon set are available. Custom SVGs or external icon libraries can't be used.
- \`Icon\` size and color are determined by the parent context and can't be directly customized through the \`Icon\` component's props.
- Icons are rendered as visual elements only. They don't support click handlers or interactive behavior. To make an icon clickable, wrap it in a [\`Button\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/button) or [\`Pressable\`](/docs/api/admin-extensions/{API_VERSION}/ui-components/actions/pressable) component.`,
    },
  ],
  related: [],
};

export default data;
