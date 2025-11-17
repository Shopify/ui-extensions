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
      'Navigate to another screen',
      'navigate',
    ),
  },
  examples: {
    description: 'Using a Navigator to navigate between Screens',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate to another screen with parameters',
          'navigate-params',
        ),
      },
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate to another screen with sheet presentation',
          'navigate-sheet',
        ),
      },
    ],
  },
};

export default data;
