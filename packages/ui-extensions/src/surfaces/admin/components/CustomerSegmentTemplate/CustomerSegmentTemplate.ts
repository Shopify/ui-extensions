import {createRemoteComponent} from '@remote-ui/core';

/**
 * Reserved namespace and key for the customer standard metafield used in the template's query.
 * More info - https://shopify.dev/docs/apps/custom-data/metafields/definitions/standard
 */
type CustomerStandardMetafieldDependency = 'facts.birth_date';

export interface CustomerSegmentTemplateProps {
  /* Localized title of the template. */
  title: string;
  /* Localized description(s) of the template. */
  description: string | string[];
  /* Code snippet to render in the template with syntax highlighting. */
  templateQuery: string;
  /* Code snippet to insert in the segment editor. If missing, `templateQuery` will be used. */
  templateQueryToInsert?: string;
  /* List of customer standard metafields or custom metafields used in the template's query. */
  dependencies?: {
    standardMetafields?: CustomerStandardMetafieldDependency[];
    customMetafields?: string[];
  };
  /* ISO 8601-encoded date and time string. A "New" badge will be rendered for recently introduced templates. */
  dateAdded?: string;
}

/**
 * Customer segmentation templates are used to give merchants a starting point to create segments.
 */
export const CustomerSegmentTemplate = createRemoteComponent<
  'CustomerSegmentTemplate',
  CustomerSegmentTemplateProps
>('CustomerSegmentTemplate');
