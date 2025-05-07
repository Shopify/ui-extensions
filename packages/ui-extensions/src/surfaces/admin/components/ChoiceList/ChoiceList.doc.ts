import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...shared,
  category: 'Polaris web components',
  related: [
    {
      type: 'component',
      name: 'Select',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/select',
    },
    {
      type: 'component',
      name: 'Checkbox',
      url: '/docs/api/admin-extensions/polaris-web-components/forms/checkbox',
    },
    {
      type: 'information',
      name: 'Event handling',
      url: '/docs/api/admin-extensions/2025-10-rc#handling-events',
    },
  ],
};

export default data;
