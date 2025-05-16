import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {setRelatedUrl} from '../../uitls';

import globalShared from '../../../../docs/shared/components/DatePicker';
import shared from './shared';

const data: ReferenceEntityTemplateSchema = {
  ...setRelatedUrl(globalShared, 'admin-extensions'),
  ...shared,
};

export default data;
