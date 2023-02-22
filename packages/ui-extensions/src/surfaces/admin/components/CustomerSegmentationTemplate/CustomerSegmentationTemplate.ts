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
  | 'followUpEmailMajor';

export interface CustomerSegmentationTemplateProps {
  /** Localized title of the template. */
  title: string;
  /** Localized description of the template. */
  description: string;
  /** Icon identifier for the template. This property is ignored for non-1P Segmentation templates as we fallback to the app icon */
  icon?: Source;
  /** ShopifyQL code snippet to render in the template with syntax highlighting **/
  templateQuery: string;
  /** ShopifyQL code snippet to insert in the segment editor. If missing, `templateQuery` will be used. */
  templateQueryToInsert?: string;
}

/**
 * Customer segmentation templates are used to give merchants a starting point to create segments.
 */
export const CustomerSegmentationTemplate = createRemoteComponent<
  'CustomerSegmentationTemplate',
  CustomerSegmentationTemplateProps
>('CustomerSegmentationTemplate');
