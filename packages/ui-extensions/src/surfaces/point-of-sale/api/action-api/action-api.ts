/**
 * @publicDocs
 */
export interface ActionApiContent {
  /**
   * Presents the corresponding action (modal) target on top of the current view as a full-screen modal. The companion modal target must be registered in the same extension. Calling this method from a menu item or block target presents the companion `.action.render` target for that target group; for example, calling it from `pos.purchase.post.action.menu-item.render` presents `pos.purchase.post.action.render`. Calling it from a tile target presents the companion `.modal.render` target; for example, calling it from `pos.home.tile.render` presents `pos.home.modal.render`. Use to launch detailed workflows, complex forms, or multi-step processes that require more screen space than simple components provide.
   */
  presentModal(): void;
}

/**
 * The `ActionApi` object provides methods for presenting modal interfaces. Access these methods through `shopify.action` to launch full-screen modal experiences.
 * @publicDocs
 */
export interface ActionApi {
  action: ActionApiContent;
}
