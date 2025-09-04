import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Cash Drawer API',
  description: `
The Cash Drawer API is an API exposed to extensions for cash drawer functionality, specifically allowing UI extensions to control cash drawer operations.`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'CashDrawerApi',
      description: 'Interface for handling cash drawer operations.',
      type: 'CashDrawerApi',
    },
  ],
  category: 'APIs',
  related: [],
  examples: {
    description: 'Examples of using the Cash Drawer API',
    examples: [
      {
        codeblock: generateCodeBlock(
          'Cash Drawer API',
          'cash-drawer-api',
          'default.example',
        ),
      },
    ],
  },
};

export default data;
