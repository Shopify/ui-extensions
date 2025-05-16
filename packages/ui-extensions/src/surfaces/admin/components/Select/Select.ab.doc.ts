import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import {setRelatedUrl} from '../../uitls';

import globalShared from '../../../../docs/shared/components/Select';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...setRelatedUrl(globalShared, 'app-home'),
  ...shared,
};

export default data;
