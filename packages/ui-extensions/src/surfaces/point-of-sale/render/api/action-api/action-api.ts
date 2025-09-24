export interface ActionApiContent {
  /** Presents the `action-overlay.render` extension target on top of present view.
   *
   * For example: if we are calling presentModal() from pos.purchase.post.action.menu-item.render,
   * it should present pos.purchase.post.action.render.
   */
  presentModal(): void;

  /** Presents the adaptive selling interface on top of the present view.
   *
   * For example: if we are calling presentAdaptiveSelling() from pos.product-details.action.menu-item.render,
   * it should present the adaptive selling overlay to help staff make informed product recommendations.
   */
  presentAdaptiveSelling(): void;
}

/**
 * Access the Action API to present your app in a full screen modal.
 */
export interface ActionApi {
  action: ActionApiContent;
}
