import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPOSBlockRow = (title: string, fileName: string) =>
  generateCodeBlock(title, 'pos-block-row', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'POSBlockRow',
  description:
    "The POSBlockRow component renders individual rows within a POSBlock container. Use it to create structured content rows with optional tap interactions inside POSBlock components.\n\nThe component follows Shopify's design system specifications to ensure visual consistency across the POS interface. It includes built-in support for different device sizes and orientations, providing a reliable and familiar experience for merchants across various retail environments and use cases.\n\nPOSBlockRow components handle edge cases and loading states gracefully, providing clear feedback during operations and maintaining interface responsiveness even when processing intensive tasks or handling large datasets.",
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'pos-block-row-thumbnail.png',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the POSBlockRow component.',
      type: 'POSBlockRowProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Layout and structure',
  related: [],
  defaultExample: {
    image: 'pos-block-row-default.png',
    codeblock: generateCodeBlockForPOSBlockRow(
      'Create structured rows within a block',
      'default.example',
    ),
    description:
      'Display individual rows within a POSBlock container with optional tap interactions. This example demonstrates creating structured content rows that follow POS design specifications, ensuring visual consistency and proper handling of various device sizes and orientations.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Organize content logically within rows:** Structure your POSBlockRow content to be scannable and focused. Each row should represent a discrete piece of information or functionality that users can easily understand and interact with.\n- **Provide visual feedback for interactive rows:** When rows are interactive (have \`onPress\` callbacks), ensure users understand they can be tapped.\n- **Keep row content concise and focused:** Design row content to be easily readable and actionable within the constrained space of a POSBlock. Focus on the most important information and avoid cluttering rows with excessive detail.\n- **Maintain consistent interaction patterns:** Use similar \`onPress\` behaviors across different POSBlockRow instances in your extension to create predictable user experiences. Consistent interaction patterns help merchants understand and trust your extension.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- POSBlockRow can only be used as children of POSBlock components—it can't be used independently or within other container types.\n- The component's visual styling and layout are controlled by the POS design system—custom row styling beyond content organization isn't supported.\n- Row content is provided through child components rather than direct content properties—organize your row content through component composition.\n- Interactive behavior is limited to the \`onPress\` callback—complex interactions or multiple actions for each row require custom implementation within the row content.\n`,
    },
  ],
};

export default data;
