import {createRemoteComponent} from '@remote-ui/core';

type Source =
  | 'categoriesMajor'
  | 'firstVisitMajor'
  | 'heartMajor'
  | 'marketingMajor'
  | 'checkoutMajor'
  | 'ordersMajor'
  | 'locationMajor'
  | 'emailNewsletterMajor'
  | 'firstOrderMajor'
  | 'billingStatementDollarMajor'
  | 'diamondAlertMajor'
  | 'abandonedCartMajor'
  | 'calendarMajor'
  | 'productsMajor'
  | 'globeMajor'
  | 'flagMajor'
  | 'uploadMajor'
  | 'buyButtonMajor'
  | 'followUpEmailMajor'
  | 'confettiMajor'
  | 'viewMajor';

type TemplateCategory =
  | 'firstTimeBuyers'
  | 'highValueCustomers'
  | 'reEngageCustomers'
  | 'abandonedCheckout'
  | 'purchaseBehaviour'
  | 'location';

/**
 * Reserved namespace and key for the customer standard metafield used in the template's query.
 * More info - https://shopify.dev/docs/apps/custom-data/metafields/definitions/standard
 */
type CustomerStandardMetafieldDependency = 'facts.birth_date';

export interface CustomerSegmentationTemplateProps {
  /* Localized title of the template. */
  title: string;
  /* Localized description(s) of the template. */
  description: string | string[];
  /* Icon identifier for the template. This property is ignored for non-1P Segmentation templates as we fallback to the app icon */
  icon?: Source;
  /* ShopifyQL code snippet to render in the template with syntax highlighting. */
  templateQuery: string;
  /* ShopifyQL code snippet to insert in the segment editor. If missing, `templateQuery` will be used. */
  templateQueryToInsert?: string;
  /* List of customer standard metafield used in the template's query. */
  standardMetafieldDependencies?: CustomerStandardMetafieldDependency[];
  /* ISO 8601-encoded date and time string. A "New" badge will be rendered for recently introduced templates. */
  dateAdded?: string;
  /* The category in which the template will be visible.
     When provided, the template will show in its respective category and aggregate sections.
     When missing, the template will show in the aggregate sections only */
  category?: TemplateCategory;
}

/**
 * Customer segmentation templates are used to give merchants a starting point to create segments.
 */
export const CustomerSegmentationTemplate = createRemoteComponent<
  'CustomerSegmentationTemplate',
  CustomerSegmentationTemplateProps
>('CustomerSegmentationTemplate');
