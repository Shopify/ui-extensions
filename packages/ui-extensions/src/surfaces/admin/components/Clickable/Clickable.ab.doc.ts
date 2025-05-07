import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/app-home/polaris-web-components/actions/button',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/app-home/polaris-web-components/actions/link',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/app-home/using-polaris-components#event-handling',
    },
  ],
};

export default data;
