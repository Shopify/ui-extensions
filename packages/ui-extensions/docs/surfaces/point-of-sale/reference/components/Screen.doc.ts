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
      'Define screens within your navigation stack with full control over presentation and behavior. This example shows how to create Screen components with titles, actions, and proper navigation integration, handling transitions and back button behavior automatically.',
  },
  examples: {
    description:
      'Learn how to create screens with navigation, pass data between screens, and use different presentation styles.',
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
