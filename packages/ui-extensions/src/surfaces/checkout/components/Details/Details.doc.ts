import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Details';
import summarySharedContent from '../../../../docs/shared/components/Summary';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  subcomponent: {
    ...summarySharedContent,
    definitions: {properties: true},
  },
});

export default data;
