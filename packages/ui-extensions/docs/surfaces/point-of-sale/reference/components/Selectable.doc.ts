import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Selectable',
  description:
    "The Selectable component allows you to wrap any non-interactive UI component to make it selectable. Use Selectable to add tap interactions to components that don't normally respond to user input while maintaining their original styling.\n\nWrap non-interactive components like Text, Image, Icon, or custom layouts that need tap functionality. Don't wrap components that already have built-in interactions like Button or TextField. Selectable components maintain consistent selection state across re-renders and navigation, ensuring merchants don't lose their choices when moving between screens or interacting with other interface elements.",
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the Selectable component.',
      type: 'SelectableProps',
    },
  ],
  category: 'UI components',
  subCategory: 'Actions',
  related: [],
  thumbnail: 'selectable-thumbnail.png',
  defaultExample: {
    image: 'selectable-default.png',
    codeblock: generateCodeBlock(
      'Make components tappable',
      'selectable',
      'default.example',
    ),
    description:
      'Add tap interactions to non-interactive components while preserving their appearance. This example demonstrates wrapping components like Text, Image, or Icon with Selectable to make them respond to user input without changing their original styling or layout.',
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `\n- **Use meaningful press handlers:** Implement \`onPress\` callbacks that perform clear, expected actions. Users should understand what will happen when they tap the selectable content based on its visual presentation and context.\n- **Disable when appropriate:** Use the \`disabled\` property to prevent interactions when the selectable content shouldn't respond to user input, such as during loading states or when certain conditions aren't met.\n- **Maintain consistent interaction patterns:** Keep selectable interactions consistent with other interactive elements in your interface. Users should have predictable experiences when tapping different types of content.\n`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `\n- Selectable components don't provide built-in visual feedback for interactions. You must implement selection indicators yourself.\n- The component is designed for wrapping non-interactive content. Wrapping already-interactive components may cause unexpected behavior.\n- Complex nested interactions within selectable content aren't supported and may interfere with the tap functionality.\n- Selectable components don't support keyboard navigation or focus management beyond basic tap interactions.\n`,
    },
  ],
};

export default data;
