import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForNavigationApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'navigation-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation API',
  description:
    'The Navigation API provides web-standard navigation functionality for POS UI extensions, allowing you to navigate between URLs, manage navigation history, and handle navigation events within modal interfaces. The API is available globally as the `navigation` object and follows web platform standards.',
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'NavigationApi',
      description:
        'The global `navigation` object provides web-standard navigation functionality. Access these properties and methods directly through the global `navigation` object to manage navigation within modal interfaces.',
      type: 'Navigation',
    },
    {
      title: 'Window',
      description:
        'The global `window` object provides control over the extension screen lifecycle. Access these properties and methods directly through the global `window` object to manage the modal interface.',
      type: 'Window',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description:
      'Learn how to navigate between screens and manage navigation state within modal interfaces.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate between multiple screens',
          'two-screen',
        ),
        description:
          'Create multi-screen modal experiences by navigating between different URLs within your extension. This example demonstrates using `navigation.navigate()` to move between screens and handle back navigation, enabling complex workflows with multiple steps or views.',
      },
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate to a native POS screen',
          'native-screen',
        ),
        description:
          'Launch native POS screens using URI schemes to access built-in functionality. This example shows how to use `navigation.navigate()` with a `pos://` URI to open native POS screens like product details or customer profiles, allowing seamless integration between your extension and native POS features.',
      },
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Pass state parameters between screens',
          'state-params',
        ),
        description:
          'Share data between screens using navigation state parameters. This example demonstrates how to pass state objects when navigating, allowing you to transfer information between different screens in your modal workflow without relying on external storage or global variables.',
      },
    ],
  },
};

export default data;
