import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';

const generateJsxCodeBlockForNavigationApi = (
  title: string,
  fileName: string,
) => generateJsxCodeBlock(title, 'navigation-api', fileName);

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
      type: 'Navigation',
    },
    {
      title: 'Window',
      description: '',
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
