import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForBanner = (title: string, fileName: string) =>
  generateCodeBlock(title, 'box', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Box',
  description:
    'The Box component is a generic container that provides flexible layout with consistent spacing and styling. Use it to apply padding, to nest and group other components, or as the foundation for building structured layouts.\n\nThe component provides granular control over spacing through padding properties and sizing through width/height properties, serving as a building block for precise layouts. It simplifies the creation of containers with consistent spacing by using design system tokens, ensuring visual consistency and reducing the need for custom CSS in most layout scenarios.\n\nBox components provide shorthand properties for common padding patterns like equal padding on all sides or symmetric horizontal/vertical padding, reducing verbose property specifications for simpler layouts.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description: 'Configure the following properties on the Box component.',
      type: 'BoxProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  thumbnail: 'box-thumbnail.png',
  defaultExample: {
    image: 'box-default.png',
    codeblock: generateCodeBlockForBanner(
      'Create a container with padding',
      'default.example',
    ),
    description:
      'Create flexible layout containers with consistent spacing and styling. This example demonstrates a Box that applies padding, groups components, and provides granular control over spacing using design system tokens, serving as a foundation for structured layouts.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Apply consistent padding using the numeric scale:** Use the predefined numeric padding values (for example, \`'100'\`, \`'300'\`, \`'500'\`) to maintain consistency across your interface. Start with \`'300'\` for standard content and adjust up or down based on the visual hierarchy and spacing needs of your layout.\n- **Use directional padding for precise control:** Use specific padding properties like \`paddingInline\` and \`paddingBlock\` when you need different spacing on different sides. This is particularly useful for creating asymmetric layouts or aligning content with other interface elements.\n- **Combine Box with other layout components strategically:** Use Box as a foundation with other layout components like Stack for optimal results. Box handles spacing and sizing, while Stack manages the arrangement and alignment of child elements within the container.\n- **Consider content flow and reading patterns:** When using directional properties, remember that \`block\` refers to the main content flow direction (usually vertical) and \`inline\` refers to the text direction (usually horizontal).\n- **Optimize for touch interfaces:** Ensure adequate padding around interactive elements within Box containers. POS interfaces are primarily touch-based, so generous padding improves usability and reduces accidental interactions. Consider using padding values of \`'300'\` or higher for touch targets.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Box is a layout container and doesn't provide interactive functionality—use it in combination with interactive components like Button or Clickable for user interactions.\n- Padding values are limited to the predefined numeric scale—custom pixel values for padding aren't supported to maintain design consistency.\n- Box doesn't provide scrolling capabilities for overflow content—use ScrollView when content might exceed container dimensions.\n`,
    },
  ],
};

export default data;
