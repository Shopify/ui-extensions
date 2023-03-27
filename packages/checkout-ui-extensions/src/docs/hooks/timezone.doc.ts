import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getLinksByTag} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useTimezone',
  description:
    'Returns the time zone of the checkout, and automatically re-renders your component if the time zone changes.',
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Localization',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseTimezoneGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;
