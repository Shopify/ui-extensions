import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import {setRelatedUrl} from '../../uitls';

import globalShared from '../../../../docs/shared/components/Text';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...setRelatedUrl(globalShared, 'admin-extensions'),
  ...shared,
};

export default data;
