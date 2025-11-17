import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForNavigationApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'navigation-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation API',
  description:
    'The Navigation API provides screen-based navigation functionality for POS UI extensions, allowing you to navigate between screens, manage navigation stacks, and dismiss modal interfaces within full-screen modal workflows. The API enables multi-screen experiences with parameter passing and navigation control.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'NavigationApi',
      description:
        'The global `navigation` object provides web-standard navigation functionality. Access these properties and methods directly through the global `navigation` object to manage navigation within modal interfaces.',
      type: 'NavigationApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Navigation API',
    examples: [
      {
        codeblock: generateCodeBlockForNavigationApi(
          'Navigate between two screens',
          'two-screen',
        ),
      },
    ],
    exampleGroups: [
      {
        title: 'Navigation actions',
        examples: [
          {
            description:
              'Navigates to the specified screen. It is important to note that any screens you wish to navigate to must already exist in the Navigator.',
            codeblock: generateCodeBlockForNavigationApi(
              'Navigate to a route in current navigation tree',
              'navigation-tree',
            ),
          },
        ],
      },
    ],
  },
};

export default data;
