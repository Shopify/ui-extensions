import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {ExtensionTargetType, TargetLink} from '../types/ExtensionTargetType';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForDrawerApi = (title: string, fileName: string) =>
  generateCodeBlock(title, 'drawer-api', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'Drawer API',
  description: `
The Drawer API provides an extension with data about the current drawer/cash tracking session.

#### Supporting targets
- ${TargetLink.PosDrawerDetailsActionMenuItemRender}
- ${TargetLink.PosDrawerDetailsActionRender}
- ${TargetLink.PosDrawerDetailsBlockRender}
`,
  isVisualComponent: false,
  type: 'APIs',
  definitions: [
    {
      title: 'DrawerApi',
      description: '',
      type: 'DrawerApi',
    },
  ],
  examples: {
    description: 'Examples of using the Drawer API.',
    examples: [
      {
        codeblock: generateCodeBlockForDrawerApi(
          'Retrieve the ID of the drawer.',
          'id',
        ),
      },
    ],
  },
  category: 'APIs',
  related: [
    {
      name: ExtensionTargetType.PosDrawerDetailsActionMenuItemRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosDrawerDetailsActionRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-action-render',
    },
    {
      name: ExtensionTargetType.PosDrawerDetailsBlockRender,
      url: '/docs/api/pos-ui-extensions/targets/pos-drawer-details-block-render',
    },
  ],
};

export default data;
