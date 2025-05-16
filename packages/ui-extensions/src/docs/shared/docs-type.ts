import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

export type SharedReferenceEntityTemplateSchema = Pick<
  ReferenceEntityTemplateSchema,
  'name' | 'description' | 'category' | 'subCategory' | 'related'
>;
