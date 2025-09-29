import type {CSSProperties} from 'react';
import {
  ReferenceEntityTemplateSchema,
  CodeTabType,
  ExampleType,
  ExampleSectionSchema,
  ExampleGroupType,
} from '@shopify/generate-docs';

// Don't allow all CSS properties to be used in the customStyles property
type AllowedCSSProperties = Pick<CSSProperties, 'minHeight' | 'minBlockSize'>;

type AdminCodeTabType = CodeTabType & {
  layout?: string;
  customStyles?: AllowedCSSProperties;
};

interface CodeLinkType {
  name: string;
  url: string;
  icon: string;
}

interface AdminCodeblockType {
  title: string;
  tabs: AdminCodeTabType[];
  links?: CodeLinkType[];
}

type AdminExampleType = Omit<ExampleType, 'codeblock'> & {
  codeblock: AdminCodeblockType | AdminCodeblockType[];
};

type AdminExampleGroupType = Omit<ExampleGroupType, 'examples'> & {
  examples: AdminExampleType[];
};

export interface AdminReferenceEntityTemplateSchema
  extends Omit<ReferenceEntityTemplateSchema, 'defaultExample' | 'examples'> {
  defaultExample?: AdminExampleType;
  examples?: Omit<ExampleSectionSchema, 'exampleGroups' | 'examples'> & {
    exampleGroups?: AdminExampleGroupType[] | null;
    examples?: AdminExampleType[] | null;
  };
}
