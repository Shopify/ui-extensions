import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Grid';
import gridItemSharedContent from '../../../../docs/shared/components/GridItem';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true},
  subcomponent: {
    ...gridItemSharedContent,
    definitions: {properties: true},
  },
});

export default data;
