export interface ActionApiContent {
  /** Presents the corresponding `.action.render` extension target as a modal overlay.
   *
   * For example: if we are calling presentModal() from pos.purchase.post.action.menu-item.render,
   * it will present pos.purchase.post.action.render.
   */
  presentModal(): void;
}

/**
 * Access the Action API to present your app in a full screen modal.
 */
export interface ActionApi {
  action: ActionApiContent;
}
