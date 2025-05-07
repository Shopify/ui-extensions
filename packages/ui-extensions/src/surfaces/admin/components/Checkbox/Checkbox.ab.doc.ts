import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  related: [
    {
      type: 'component',
      name: 'Switch',
      url: '/docs/api/app-home/polaris-web-components/forms/switch',
    },
    {
      type: 'component',
      name: 'Select',
      url: '/docs/api/app-home/polaris-web-components/forms/select',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/app-home/polaris-web-components/forms/choice-list',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/app-home/using-polaris-components#event-handling',
    },
  ],
};

export default data;
