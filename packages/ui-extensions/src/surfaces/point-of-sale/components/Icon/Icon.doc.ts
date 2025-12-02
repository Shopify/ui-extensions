import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'The `Icon` component displays standardized visual symbols from the POS catalog to represent actions, statuses, or categories consistently. Use icons to enhance navigation or provide visual context alongside text in POS interfaces.' +
    '\n\n To use icons to create interactive UI elements, wrap them in [\`Button\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/button) or [\`Clickable\`](/docs/api/pos-ui-extensions/2026-01-rc/polaris-web-components/actions/clickable) components. Icons on their behave purely as images and don\'t support click events or interactive behaviors.' +
    '\n\n To maintain a consistent visual apperance, icon styling is controlled by the POS design system. Custom styling and external icon libraries aren\'t supported. Icons are optimized for readability at standard sizes and automatically scale to maintain visual consistency across different screen densities and device types.',
  thumbnail: 'icon-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Icon` component.',
      type: 'Icon',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Media and visuals',
  defaultExample: {
    image: 'icon-default.png',
    description:
      'Display standardized visual symbols using an `Icon` component from the POS icon catalog. This example shows a basic icon with proper sizing and accessibility.',
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
