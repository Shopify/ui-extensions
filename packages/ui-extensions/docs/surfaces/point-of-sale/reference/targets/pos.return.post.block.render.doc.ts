import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateJsxCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosReturnPostBlockRender,
  description: `Renders a custom section within the native post return screen
  > Note:
  > This is part of a [POS UI Extensions developer preview](/docs/api/feature-previews#pos-ui-extensions-preview). More information to come.`,
  defaultExample: {
    codeblock: generateJsxCodeBlock(
      'Return Post Block',
      'targets',
      'pos-return-post-block-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Block',
  isVisualComponent: false,
  related: [
    {
      name: ExtensionTargetType.PosReturnPostActionMenuItemRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '../action/pos-return-post-action-menu-item-render',
    },
    {
      name: ExtensionTargetType.PosReturnPostActionRender,
      subtitle: 'Target',
      type: 'blocks',
      url: '../action/pos-return-post-action-render',
    },
  ],
  type: 'Target',
};

export default data;
