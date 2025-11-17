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
      'Navigate to another screen',
      'navigate',
    ),
  },
  examples: {
    description:
      'Navigating using NavigationAPI with Screens within Navigators',
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
