import {
  ReferenceEntityTemplateSchema,
  CodeTabType,
} from '@shopify/generate-docs';

export interface AdminReferenceEntityTemplateSchema
  extends Omit<ReferenceEntityTemplateSchema, 'defaultExample'> {
  defaultExample?: Omit<
    NonNullable<ReferenceEntityTemplateSchema['defaultExample']>,
    'codeblock'
  > & {
    codeblock?: {
      title: string;
      tabs: (CodeTabType & {layout?: string})[];
    };
  };
}
