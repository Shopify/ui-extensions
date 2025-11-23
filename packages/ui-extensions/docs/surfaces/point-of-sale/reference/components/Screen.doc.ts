import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Screen',
  description:
    'The `Screen` component represents a screen in the navigation stack with full control over presentation, actions, and navigation lifecycle. Use it to create navigable screens with titles, loading states, and custom navigation behavior.\n\nThe component manages full-screen presentations with proper navigation stack integration, allowing extensions to push and pop screens as part of the POS navigation flow. It handles transitions, back button behavior, and safe area padding automatically, ensuring extensions provide native-feeling navigation experiences on both iOS and Android devices.\n\n`Screen` components maintain scroll position across navigation operations where appropriate, allowing merchants to return to their previous location after viewing details or completing sub-tasks.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Properties',
      description:
        'Configure the following properties on the `Screen` component.',
      type: 'ScreenProps',
    },
    {
      title: 'ScreenPresentationProps',
      description: '',
      type: 'ScreenPresentationProps',
    },
    {
      title: 'SecondaryActionProps',
      description: '',
      type: 'SecondaryActionProps',
    },
  ],
  category: 'Components',
  related: [],
  thumbnail: 'screen-thumbnail.png',
  defaultExample: {
    image: 'screen-default.png',
    codeblock: generateCodeBlockForComponent(
      'Create a navigable screen',
      'navigate',
    ),
    description:
      'Define a screen within a navigation flow with title, actions, and content. This example demonstrates setting up a Screen that integrates with the navigation stack, providing full-screen presentations with proper back button behavior and navigation lifecycle management.',
  },
  examples: {
    description:
      'Learn how to create screens with advanced navigation features including parameter passing and modal presentation styles.',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate to a screen with data',
          'navigate-params',
        ),
        description:
          'Pass data to screens during navigation to create contextual workflows. This example shows how screens can receive parameters during navigation, enabling data flow between screens and conditional rendering based on navigation context.',
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
