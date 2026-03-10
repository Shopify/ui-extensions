import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Sheet';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  requires:
    'configuration of the [Customer Privacy](/docs/api/customer-account-ui-extensions/latest/configuration#collect-buyer-consent) capability to be rendered.',
  definitions: {properties: true, events: true, slots: true, methods: true},
});

export default data;
