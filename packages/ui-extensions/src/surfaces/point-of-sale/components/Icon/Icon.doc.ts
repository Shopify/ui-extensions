import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The icon component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories. Use icons to enhance navigation or provide visual context alongside text.' +
    '\n\nFor interactive icons, wrap them in [button](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/button) or [clickable](/docs/api/pos-ui-extensions/{API_VERSION}/polaris-web-components/actions/clickable) components.',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the icon component.',
      type: 'Icon',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'icon-default.png',
    description:
      'Display standardized visual symbols using an icon component from the POS icon catalog. This example shows a basic icon with proper sizing and accessibility.',
    codeblock: {
      title: 'Display icons from the POS catalog',
      tabs: [
        {
          code: './examples/default.html',
          language: 'html',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Choose recognizable icons:** Use universally recognized symbols like \`search\`, \`cart\`, or \`settings\`. Avoid ambiguous icons.
- **Match size to context:** Use smaller sizes for inline text or secondary actions, \`base\` for standard elements, larger sizes for primary actions.
- **Apply tones for meaning:** Use \`critical\` for destructive actions, \`warning\` for cautions, \`success\` for confirmations, \`auto\` or \`neutral\` for general elements.
- **Pair with text for clarity:** Consider adding text labels, especially for complex or uncommon actions.
- **Use color for hierarchy:** Use \`subdued\` for secondary elements, \`base\` for standard visibility, \`strong\` for emphasis.
`,
    },
  ],
  related: [],
};

export default data;
