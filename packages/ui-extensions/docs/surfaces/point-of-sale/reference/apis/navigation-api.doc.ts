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
    description:
      'Learn how to navigate between screens, manage navigation stacks, and control multi-screen modal experiences.',
    examples: [
      {
        codeblock: generateCodeBlockForNavigationApi(
          'Create a multi-screen modal',
          'two-screen',
        ),
        description:
          'Create a navigation flow with multiple screens in a modal interface. This example shows how to set up a Navigator with two screens and navigate between them, enabling multi-step workflows, wizards, or detailed views within your extension.',
      },
      {
        codeblock: generateCodeBlockForNavigationApi(
          'Navigate to another screen',
          'navigation-tree',
        ),
        description:
          'Navigate programmatically to a specific screen in your navigation hierarchy. This example demonstrates using the global `navigation` object to push a new screen onto the navigation stack. Note that the target screen must already be defined in your Navigator component before you can navigate to it.',
      },
    ],
  },
};

export default data;
