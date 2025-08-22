import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateCodeBlockForNavigationApiLegacy = (
  title: string,
  fileName: string,
) => generateCodeBlock(title, 'navigation-api', fileName);

const generateCodeBlockForNavigationApi = (title: string, fileName: string) => {
  return {
    title,
    tabs: [
      {
        title: `${fileName}.jsx`,
        code: `../examples/navigation-api/${fileName}.jsx`,
        language: 'jsx',
      },
    ],
  };
};

const data: ReferenceEntityTemplateSchema = {
  name: 'Navigation API',
  description: `
The Navigation API enables POS UI extension to navigate between screens.

#### Supporting targets
- ${TargetLink.PosHomeModalRender}
- ${TargetLink.PosPurchasePostActionRender}
- ${TargetLink.PosProductDetailsActionRender}
- ${TargetLink.PosOrderDetailsActionRender}
- ${TargetLink.PosDraftOrderDetailsActionRender}
- ${TargetLink.PosCustomerDetailsActionRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'NavigationApi',
      description: '',
      type: 'NavigationApiContent',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Navigation API',
    examples: [
      {
        codeblock: generateCodeBlockForNavigationApiLegacy(
          'Navigate between two screens',
          'two-screen',
        ),
      },
      {
        codeblock: generateCodeBlockForNavigationApi(
          'Navigate to a POS native screen with uri',
          'NavigatePosNativeScreen',
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
            codeblock: generateCodeBlockForNavigationApiLegacy(
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
