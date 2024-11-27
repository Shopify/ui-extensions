import type {Extension} from '../../extension';

import type {StandardApi} from './api';

interface ShouldRender {
  display: boolean;
}

export interface ExtensionTargets {
  /** Abandoned checkouts targets */
  /**
   * Determines whether an admin action trigger displays in the abandoned checkout details page.
   */
  'admin.abandoned-checkout-details.action.should-render': Extension<
    StandardApi<'admin.abandoned-checkout-details.action.should-render'>,
    ShouldRender
  >;

  /** Catalog targets */
  /**
   * Determines whether an admin action trigger displays in the catalog details page.
   */
  'admin.catalog-details.action.should-render': Extension<
    StandardApi<'admin.catalog-details.action.should-render'>,
    ShouldRender
  >;

  /** Collection targets */
  /**
   * Determines whether an admin action trigger displays in the collection index page.
   */
  'admin.collection-index.action.should-render': Extension<
    StandardApi<'admin.collection-index.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the collection details page.
   */
  'admin.collection-details.action.should-render': Extension<
    StandardApi<'admin.collection-details.action.should-render'>,
    ShouldRender
  >;

  /** Company targets */
  /**
   * Determines whether an admin action trigger displays in the company details page.
   */
  'admin.company-details.action.should-render': Extension<
    StandardApi<'admin.company-details.action.should-render'>,
    ShouldRender
  >;

  /** Customer targets */
  /**
   * Determines whether an admin action trigger displays in the customer index page.
   */
  'admin.customer-index.action.should-render': Extension<
    StandardApi<'admin.customer-index.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the customer bulk selection action.
   */
  'admin.customer-index.selection-action.should-render': Extension<
    StandardApi<'admin.customer-index.selection-action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the customer details page.
   */
  'admin.customer-details.action.should-render': Extension<
    StandardApi<'admin.customer-details.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether a customer segment admin action trigger displays in the customer details page.
   */
  'admin.customer-segment-details.action.should-render': Extension<
    StandardApi<'admin.customer-segment-details.action.should-render'>,
    ShouldRender
  >;

  /** Discount targets */
  /**
   * Determines whether an admin action trigger displays in the discount index page.
   */
  'admin.discount-index.action.should-render': Extension<
    StandardApi<'admin.discount-index.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the discount details page.
   */
  'admin.discount-details.action.should-render': Extension<
    StandardApi<'admin.discount-details.action.should-render'>,
    ShouldRender
  >;

  /** Draft order targets */
  /**
   * Determines whether an admin action trigger displays in the draft order index page.
   */
  'admin.draft-order-index.action.should-render': Extension<
    StandardApi<'admin.draft-order-index.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the draft order bulk selection action.
   */
  'admin.draft-order-index.selection-action.should-render': Extension<
    StandardApi<'admin.draft-order-index.selection-action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the draft order details page.
   */
  'admin.draft-order-details.action.should-render': Extension<
    StandardApi<'admin.draft-order-details.action.should-render'>,
    ShouldRender
  >;

  /** Gift card targets */
  /**
   * Determines whether an admin action trigger displays in the gift card details page.
   */
  'admin.gift-card-details.action.should-render': Extension<
    StandardApi<'admin.gift-card-details.action.should-render'>,
    ShouldRender
  >;

  /** Order targets */
  /**
   * Determines whether an admin action trigger displays in the order index page.
   */
  'admin.order-index.action.should-render': Extension<
    StandardApi<'admin.order-index.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the order bulk selection action.
   */
  'admin.order-index.selection-action.should-render': Extension<
    StandardApi<'admin.order-index.selection-action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the order details page.
   */
  'admin.order-details.action.should-render': Extension<
    StandardApi<'admin.order-details.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the order fulfilled card.
   */
  'admin.order-fulfilled-card.action.should-render': Extension<
    StandardApi<'admin.order-fulfilled-card.action.should-render'>,
    ShouldRender
  >;

  /** Product targets */
  /**
   * Determines whether an admin action trigger displays in the product index page.
   */
  'admin.product-index.action.should-render': Extension<
    StandardApi<'admin.product-index.action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the product bulk selection action.
   */
  'admin.product-index.selection-action.should-render': Extension<
    StandardApi<'admin.product-index.selection-action.should-render'>,
    ShouldRender
  >;

  /**
   * Determines whether an admin action trigger displays in the product details page.
   */
  'admin.product-details.action.should-render': Extension<
    StandardApi<'admin.product-details.action.should-render'>,
    ShouldRender
  >;

  /** Product variant targets */
  /**
   * Determines whether an admin action trigger displays in the product variant details page.
   */
  'admin.product-variant-details.action.should-render': Extension<
    StandardApi<'admin.product-variant-details.action.should-render'>,
    ShouldRender
  >;
}

export type ExtensionTarget = keyof ExtensionTargets;

export type ExtensionForExtensionTarget<T extends ExtensionTarget> =
  ExtensionTargets[T];
