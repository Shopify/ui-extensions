import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

export interface SharedReferenceEntityTemplateSchema
  extends Pick<
    ReferenceEntityTemplateSchema,
    'name' | 'description' | 'category' | 'subCategory'
  > {}
