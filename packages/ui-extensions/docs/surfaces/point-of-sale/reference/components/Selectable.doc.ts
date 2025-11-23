import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Selectable',
  description:
    "The `Selectable` component allows you to wrap any non-interactive UI component to make it selectable. Use `Selectable` to add tap interactions to components that don't normally respond to user input while maintaining their original styling.\n\nWrap non-interactive components like `Text`, `Image`, `Icon`, or custom layouts that need tap functionality. Don't wrap components that already have built-in interactions like `Button` or `TextField`. `Selectable` components maintain consistent selection state across re-renders and navigation, ensuring merchants don't lose their choices when moving between screens or interacting with other interface elements.",
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Selectable` component.',
      type: 'SelectableProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'selectable-thumbnail.png',
  defaultExample: {
    image: 'selectable-default.png',
    codeblock: generateCodeBlock(
      'Make static components tappable',
      'selectable',
      'default.example',
    ),
    description:
      'Add tap interaction to non-interactive components while preserving their styling. This example shows how to wrap components like Text, Image, or custom layouts with Selectable to make them respond to user taps without changing their visual appearance.',
  },
};

export default data;
