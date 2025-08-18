import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionFloatBlockRenderBefore,
  description:
    'Renders a custom block before the cash tracking session float screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Banner',
      'targets',
      'pos-cash-tracking-session-float-block-render-before',
    ),
  },
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
