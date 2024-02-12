export interface ActionApiContent {
  /** Presents the `action-overlay.render` extension target on top of present view.
   *
   * For example: if we are calling presentModal() from pos.post-purchase.action.render,
   * it should present pos.post-purchase.action-overlay.render.
   */
  presentModal(): void;
}

/**
 * Access the Action API to present your app in a full screen modal.
 */
export interface ActionApi {
  Action: ActionApiContent;
}
