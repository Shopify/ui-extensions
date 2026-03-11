import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/ChoiceList';
import choiceSharedContent from '../../../../docs/shared/components/Choice';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  subcomponent: {
    ...choiceSharedContent,
    definitions: {properties: true, slots: true},
  },
});

export default data;
