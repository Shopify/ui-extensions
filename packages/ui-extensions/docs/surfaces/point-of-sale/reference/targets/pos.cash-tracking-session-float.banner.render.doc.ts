import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionFloatBannerRender,
  description: 'Renders a custom banner within set desired float screen',
  defaultExample: {
    codeblock: generateCodeBlock(
      'Banner',
      'targets',
      'pos-cash-tracking-session-float-banner-render',
    ),
  },
  category: 'Targets',
  subCategory: 'Cash tracking',
  isVisualComponent: false,
  related: [],
  type: 'Target',
};

export default data;
