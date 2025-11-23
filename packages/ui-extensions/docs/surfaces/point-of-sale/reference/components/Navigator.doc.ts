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
      'Navigate between screens',
      'navigate',
    ),
    description:
      'Create a multi-screen navigation flow within your extension. This example shows how to set up a Navigator with multiple Screen components and navigate between them, enabling complex workflows, wizards, or detailed views with proper navigation stack management.',
  },
  examples: {
    description:
      'Learn how to create multi-screen workflows with navigation, parameters, and different presentation styles.',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Pass data between screens',
          'navigate-params',
        ),
        description:
          'Navigate to screens while passing data as parameters. This example demonstrates how to send information from one screen to another using navigation parameters, enabling contextual data flow through multi-step workflows.',
      },
      {
        codeblock: generateCodeBlockForComponent(
          'Present a screen as a sheet',
          'navigate-sheet',
        ),
        description:
          'Show a screen using sheet presentation style for modal-like interactions. This example demonstrates how to present screens as overlays that slide up from the bottom, useful for quick actions or secondary information without losing the parent screen context.',
      },
    ],
  },
};

export default data;
