import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getHookExample, getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useSettings',
  description: '',
  descriptionType: 'UseSettingsGeneratedType',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Storage',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseSettingsGeneratedType',
    },
  ],
  defaultExample: getHookExample('settings-access'),
  examples: {
    description: '',
    examples: [getHookExample('settings')],
  },
  related: getLinksByTag('configuration', 'UseSettingsGeneratedType'),
};

export default data;
