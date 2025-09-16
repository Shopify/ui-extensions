import type {CSSProperties} from 'react';
import {
  ReferenceEntityTemplateSchema,
  CodeTabType,
} from '@shopify/generate-docs';

// Don't allow all CSS properties to be used in the customStyles property
type AllowedCSSProperties = Pick<CSSProperties, 'minHeight' | 'minBlockSize'>;

export interface AdminReferenceEntityTemplateSchema
  extends Omit<ReferenceEntityTemplateSchema, 'defaultExample'> {
  defaultExample?: Omit<
    NonNullable<ReferenceEntityTemplateSchema['defaultExample']>,
    'codeblock'
  > & {
    codeblock?: {
      title: string;
      tabs: (CodeTabType & {
        layout?: string;
        customStyles?: AllowedCSSProperties;
      })[];
    };
  };
}
