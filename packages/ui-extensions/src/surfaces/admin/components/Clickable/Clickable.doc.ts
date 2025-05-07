import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/button',
    },
    {
      type: 'component',
      name: 'Link',
      url: '/docs/api/admin-extensions/polaris-web-components/actions/link',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/admin-extensions/2025-10-rc#handling-events',
    },
  ],
};

export default data;
