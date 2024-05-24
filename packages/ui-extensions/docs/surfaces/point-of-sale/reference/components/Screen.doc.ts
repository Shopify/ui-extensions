import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Screen',
  description:
    'A component used in the root of a modal extension to define a screen.',
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
  examples: {
    description:
      'Navigating using NavigationAPI with Screens within Navigators',
    examples: [
      {
        codeblock: generateCodeBlockForComponent(
          'Navigate to another screen',
          'navigate',
        ),
      },
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
