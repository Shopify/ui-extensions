import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
  description:
    'Renders a single interactive button component as a menu item in the post-return action menu. Use this target for post-return operations like generating return receipts, processing restocking workflows, or collecting return feedback.' +
    '\n\nExtensions at this target can access the order identifier through the Order API to perform return-specific operations. Menu items typically invoke `api.action.presentModal()` to launch the companion modal for complete post-return workflows.',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Create a post-return action menu item',
      'targets',
      'pos-return-post-action-menu-item-render',
    ),
    description:
      'Add an interactive menu item to the post-return action menu for operations after completing a return. This example shows how to create a menu item that accesses order data and launches modal workflows for tasks like generating return receipts, processing restocking, or collecting feedback.',
  },
  category: 'Targets',
  subCategory: 'Post-return',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
