import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForComponent = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigator-screen', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigator',
  description: 'A component used to navigate between different screens.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Navigator',
      description: '',
      type: 'NavigatorProps',
    },
  ],
  category: 'Components',
  related: [],
  examples: {
    description: 'Using a Navigator to navigate between Screens',
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
