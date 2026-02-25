import {createRemoteComponent} from '@remote-ui/core';

/**
 * A reserved namespace and key for a customer standard metafield that
 * the template's query depends on. Learn more about
 * [standard metafield definitions](https://shopify.dev/docs/apps/custom-data/metafields/definitions/standard).
 */
type CustomerStandardMetafieldDependency = 'facts.birth_date';

/**
 * Props for the CustomerSegmentTemplate component, which defines a
 * reusable segment template that merchants can apply in the customer
 * segment editor.
 */
export interface CustomerSegmentTemplateProps {
  /**
   * The localized title displayed on the template card, such as
   * "Customers with birthdays this month".
   */
  title: string;
  /**
   * The localized description displayed below the title. Explains what
   * customers the segment targets. Pass an array of strings to render
   * multiple paragraphs.
   */
  description: string | string[];
  /**
   * The segment query displayed on the template card with syntax
   * highlighting. This query isn't validated at render time.
   */
  query: string;
  /**
   * The segment query inserted into the editor when the merchant applies
   * the template. Defaults to `query` if not provided. This query isn't
   * validated at render time.
   */
  queryToInsert?: string;
  /**
   * The metafields that the template's query depends on. Declaring
   * dependencies lets the admin verify that the required metafield
   * definitions exist before the merchant applies the template.
   */
  dependencies?: {
    /**
     * A list of customer standard metafield keys that the query
     * depends on, such as `'facts.birth_date'`.
     */
    standardMetafields?: CustomerStandardMetafieldDependency[];
    /**
     * A list of custom metafield keys that the query depends on.
     */
    customMetafields?: string[];
  };
  /**
   * The date the template was introduced, as an ISO 8601 string (such
   * as `'2025-01-15'`). Templates created within the last month display
   * a "New" badge.
   */
  createdOn?: string;
}

/**
 * Customer segmentation templates are used to give merchants a starting point to create segments.
 */
export const CustomerSegmentTemplate = createRemoteComponent<
  'CustomerSegmentTemplate',
  CustomerSegmentTemplateProps
>('CustomerSegmentTemplate');
