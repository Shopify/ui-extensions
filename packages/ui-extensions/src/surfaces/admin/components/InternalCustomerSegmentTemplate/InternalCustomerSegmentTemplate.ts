import {createRemoteComponent} from '@remote-ui/core';

export const customerSegmentTemplateIcons = [
  'categoriesMajor',
  'firstVisitMajor',
  'heartMajor',
  'marketingMajor',
  'checkoutMajor',
  'ordersMajor',
  'locationMajor',
  'emailNewsletterMajor',
  'firstOrderMajor',
  'billingStatementDollarMajor',
  'diamondAlertMajor',
  'abandonedCartMajor',
  'calendarMajor',
  'productsMajor',
  'globeMajor',
  'flagMajor',
  'uploadMajor',
  'buyButtonMajor',
  'followUpEmailMajor',
  'confettiMajor',
  'viewMajor',
  'buyButtonMajor',
] as const;

export type CustomerSegmentTemplateIcon =
  typeof customerSegmentTemplateIcons[number];

export const customerSegmentTemplateCategories = [
  'firstTimeBuyers',
  'highValueCustomers',
  'reEngageCustomers',
  'abandonedCheckout',
  'purchaseBehaviour',
  'location',
] as const;

export type CustomerSegmentTemplateCategory =
  typeof customerSegmentTemplateCategories[number];

/**
 * Reserved namespace and key for the customer standard metafield used in the template's query.
 * More info - https://shopify.dev/docs/apps/custom-data/metafields/definitions/standard
 */
type CustomerStandardMetafieldDependency = 'facts.birth_date';

export interface InternalCustomerSegmentTemplateProps {
  /* Localized title of the template. */
  title: string;
  /* Localized description(s) of the template. */
  description: string | string[];
  /* Icon identifier for the template. This property is ignored for non-1P Segmentation templates as we fallback to the app icon */
  icon?: CustomerSegmentTemplateIcon;
  /* DEPRECATED - Code snippet to render in the template with syntax highlighting. */
  templateQuery?: string;
  /* Code snippet to render in the template with syntax highlighting. */
  query: string;
  /* DEPRECATED - Code snippet to insert in the segment editor. If missing, `templateQuery` will be used. */
  templateQueryToInsert?: string;
  /* Code snippet to insert in the segment editor. If missing, `templateQuery` will be used. */
  queryToInsert?: string;
  /* DEPRECATED - List of customer standard metafield used in the template's query. */
  standardMetafieldDependencies?: CustomerStandardMetafieldDependency[];
  /* List of customer standard metafields or custom metafields used in the template's query. */
  dependencies?: {
    standardMetafields?: CustomerStandardMetafieldDependency[];
    customMetafields?: string[];
  };
  /* DEPRECATED - ISO 8601-encoded date and time string. A "New" badge will be rendered for recently introduced templates. */
  dateAdded?: string;
  /* ISO 8601-encoded date and time string. A "New" badge will be rendered for recently introduced templates. */
  createdOn?: string;
  /* The category in which the template will be visible.
     When provided, the template will show in its respective category and aggregate sections.
     When missing, the template will show in the aggregate sections only */
  category?: CustomerSegmentTemplateCategory;
}

/**
 * Customer segment templates are used to give merchants a starting point to create segments.
 */
export const InternalCustomerSegmentTemplate = createRemoteComponent<
  'InternalCustomerSegmentTemplate',
  InternalCustomerSegmentTemplateProps
>('InternalCustomerSegmentTemplate');
