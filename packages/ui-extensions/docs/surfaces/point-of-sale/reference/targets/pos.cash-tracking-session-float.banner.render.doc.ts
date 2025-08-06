import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';
import {ExtensionTargetType} from '../types/ExtensionTargetType';

const data: ReferenceEntityTemplateSchema = {
  name: ExtensionTargetType.PosCashTrackingSessionFloatBannerRender,
  description: `Renders a banner during the end cash tracking session flow within the set desired float screen 
  > Note:
  > This is part of a POS UI Extensions developer preview. More information to come.`,
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
  related: [
    {
      name: 'Banner',
      subtitle: 'Component',
      type: 'apps',
      url: '/docs/api/pos-ui-extensions/components/banner',
    },
    {
      name: ExtensionTargetType.PosCashTrackingSessionStartObserve,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-start-event-observe',
    },
    {
      name: ExtensionTargetType.PosCashTrackingSessionCompleteObserve,
      subtitle: 'Target',
      type: 'blocks',
      url: '/docs/api/pos-ui-extensions/targets/cash-tracking/pos-cash-tracking-session-complete-event-observe',
    },
  ],
  type: 'Target',
};

export default data;
