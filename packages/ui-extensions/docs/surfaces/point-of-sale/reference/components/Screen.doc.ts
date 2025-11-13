import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Screen',
  description:
    'Define individual screens within action (modal) targets to create multi-step workflows.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Screen',
      description: '',
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
