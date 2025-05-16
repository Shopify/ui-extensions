import {AdminReferenceEntityTemplateSchema} from '../../docs-types';
import {setRelatedUrl} from '../../uitls';

import globalShared from '../../../../docs/shared/components/TextArea';
import shared from './shared';

const data: AdminReferenceEntityTemplateSchema = {
  ...setRelatedUrl(globalShared, 'app-home'),
  ...shared,
};

export default data;
