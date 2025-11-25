import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Divider',
  description:
    'The `Divider` component creates a visual separation between content sections. Use dividers to organize information and improve content hierarchy by providing clear section boundaries.' +
    '\n\nThe component renders a subtle horizontal line that follows design system specifications for color and thickness, maintaining visual consistency across the interface. It provides a clean way to separate content groups without adding significant visual weight, helping merchants scan and understand interface structure through strategic content segmentation.' +
    '\n\n`Divider` components support both full-width and inset dividers with configurable margins, allowing precise control over visual separation without adding custom CSS for common divider placement patterns.',
  thumbnail: 'divider-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Divider` component.',
      type: 'Divider',
    },
  ],
  category: 'Polaris web components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'divider-default.png',
    description:
      'Create visual separation between content sections using a `Divider` component. This example shows a horizontal divider that provides clear section boundaries.',
    codeblock: {
      title: 'Separate content sections with a divider',
      tabs: [
        {
          code: './examples/default.html',
          language: 'HTML',
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
- **Choose appropriate direction:** Use \`inline\` (horizontal) for most content separation. Use \`block\` (vertical) for columns or sidebar boundaries.
- **Avoid overuse:** Use dividers strategically. In dense interfaces, consider whitespace or typography hierarchy instead.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- \`Divider\` is a purely visual component and doesn't provide interactive functionality—it serves only to create visual separation between content areas.
- The component doesn't support custom styling beyond the available direction property—color, thickness, and other visual properties are controlled by the POS design system.
- Dividers don't automatically adjust spacing around themselves—you must manage appropriate margins and padding in surrounding content to achieve proper visual separation.
`,
    },
  ],
  related: [],
};

export default data;
