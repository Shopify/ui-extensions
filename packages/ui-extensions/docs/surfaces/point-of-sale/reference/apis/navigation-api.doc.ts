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
  category: 'Target APIs',
  subCategory: 'Platform APIs',
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best practices',
      sectionContent: `
- **Use URL-based navigation:** Implement URL patterns for deep-linking and intuitive browser-like navigation within modals.
- **Manage state effectively:** Use the \`state\` parameter to pass data between screens and maintain workflow context.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'limitations',
      title: 'Limitations',
      sectionContent: `
- The Navigation API is only available in action (modal) targets and can't be used in action (menu item), block, or tile targets that don't support multi-screen navigation.
- Navigation state is limited to serializable data and can't contain functions, complex objects, or circular references.
`,
    },
  ],
  related: [],
  examples: {
    description:
      'Learn how to manage navigation between screens and pass state between views.',
    examples: [
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate between extension screens',
          'two-screen',
        ),
        description:
          'Create multi-screen workflows within your extension using web-standard navigation. This example demonstrates using `navigation.navigate()` to move between different screens in your modal interface. This enables complex multi-step processes with proper navigation history management.',
      },
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate to POS native screens',
          'native-screen',
        ),
        description:
          'Navigate to native POS screens from your extension using deep link URIs. This example shows how to use `navigation.navigate()` with POS screen URIs to transition to core POS functionality like cart, product details, or order screens. This enables direct transitions between your extension and native POS features.',
      },
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Pass state between screens',
          'state-params',
        ),
        description:
          'Share data between screens using navigation state parameters. This example demonstrates using the `state` option in `navigation.navigate()` to pass data when navigating. This enables screens to receive context and maintain workflow continuity across navigation transitions.',
      },
    ],
  },
};

export default data;
