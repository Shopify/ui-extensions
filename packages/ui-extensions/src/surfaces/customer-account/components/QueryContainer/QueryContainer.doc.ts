import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/QueryContainer';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  related: [
    {
      name: 'Responsive values',
      subtitle: 'Utility',
      url: '/docs/api/customer-account-ui-extensions/latest/using-web-components#responsive-values',
      type: 'utility',
    },
  ],
});

export default data;
