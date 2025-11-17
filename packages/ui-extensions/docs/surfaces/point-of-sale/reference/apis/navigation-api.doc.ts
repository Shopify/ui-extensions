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
    description: 'Examples of using the Navigation API',
    examples: [
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate between two screens',
          'two-screen',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate to a POS native screen with uri',
          'native-screen',
        ),
      },
      {
        codeblock: generateJsxCodeBlockForNavigationApi(
          'Navigate to a screen with state parameters',
          'state-params',
        ),
      },
    ],
  },
};

export default data;
