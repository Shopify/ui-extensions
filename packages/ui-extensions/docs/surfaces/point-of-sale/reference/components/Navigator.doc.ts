import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigator',
  description:
    'The `Navigator` component manages navigation between multiple `Screen` components within a POS UI extension. Use it to create multi-screen workflows with proper navigation stack management and initial screen configuration.\n\n`Navigator` works with the Navigation API to provide complete navigation control for complex POS workflows that require multiple views and user interactions.\n\n`Navigator` components maintain navigation history across app lifecycle events and supports deep linking to specific screens, enabling merchants to return to their exact workflow state after interruptions The component supports gesture-based navigation like swipe-to-go-back on platforms where this is standard, providing familiar interaction patterns that feel native to each platform.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Navigator` component.',
      type: 'NavigatorProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'navigator-thumbnail.png',
  defaultExample: {
    image: 'navigator-default.png',
    codeblock: generateCodeBlockForComponent(
      'Navigate between multiple screens',
      'navigate',
    ),
    description:
      'Create a navigation hierarchy with multiple screens. This example demonstrates setting up a Navigator that manages navigation between screens, enabling multi-step workflows with proper back button behavior and navigation history management.',
  },
  examples: {
    description:
      'Learn how to create complex navigation flows with multiple screens, parameter passing, and different presentation styles.',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate to a screen with data',
          'navigate-params',
        ),
        description:
          'Navigate between screens while passing data through navigation parameters. This example shows how to pass information from one screen to another, enabling contextual workflows where subsequent screens depend on previous user choices or data.',
      },
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate with slide-up presentation',
          'navigate-sheet',
        ),
        description:
          'Display a screen that slides up from the bottom and overlays the current view. This example demonstrates how to configure screen presentation for temporary tasks or confirmations that appear as an overlay, useful for quick actions or secondary workflows.',
      },
    ],
  },
};

export default data;
