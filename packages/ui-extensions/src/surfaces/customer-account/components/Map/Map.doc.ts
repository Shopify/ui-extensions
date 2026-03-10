import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import sharedContent from '../../../../docs/shared/components/Map';
import mapMarkerSharedContent from '../../../../docs/shared/components/MapMarker';
import {createComponentDoc} from '../../../../docs/shared/component-definitions';

const data: ReferenceEntityTemplateSchema = createComponentDoc({
  ...sharedContent,
  definitions: {properties: true, events: true},
  subcomponent: {
    ...mapMarkerSharedContent,
    definitions: {properties: true, events: true, slots: true},
  },
});

export default data;
