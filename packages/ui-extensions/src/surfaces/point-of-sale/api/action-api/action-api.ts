export interface ActionApiContent {
  /**
   * Presents the corresponding action (modal) target extension target as a full-screen modal overlay on top of the current view. The modal target is automatically determined based on the current extension point—for example, calling this from `pos.purchase.post.action.menu-item.render` presents the `pos.purchase.post.action.render` modal target.
   *
   * The modal appears with a standard header (typically including a close button and title), occupies the full screen with proper backdrop/overlay, and blocks interaction with the underlying content until dismissed. The modal can be closed programmatically using `window.close()` or by the user dismissing it through UI controls. The method returns immediately without waiting for modal dismissal.
   *
   * Commonly used to launch detailed workflows requiring full screen space (multi-step wizards, complex forms, detailed product configuration), display rich content (product galleries, reports, charts), or present flows that need user focus without distractions from the main POS interface.
   */
  presentModal(): void;
}

/**
 * The `ActionApi` object provides methods for presenting modal interfaces. Access these methods through `api.action` to launch full-screen modal experiences.
 */
export interface ActionApi {
  action: ActionApiContent;
}
