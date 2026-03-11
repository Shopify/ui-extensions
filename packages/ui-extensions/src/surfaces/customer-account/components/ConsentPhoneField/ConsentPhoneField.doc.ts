import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ConsentPhoneField';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  requires:
    'enabling of the `sms_marketing` capability of the [Customer Privacy](/docs/api/customer-account-ui-extensions/latest/configuration#collect-buyer-consent) capability group to work.',
  definitions: {properties: true, events: true, slots: true},
});

export default data;
