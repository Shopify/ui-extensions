export interface SmartGridApiContent {
  /** Presents the `pos.home.modal.render` extension point on top of the Smart Grid.
   */
  presentModal(): void;
}

/**
 * Access the SmartGrid API to present your app in a full screen modal.
 */
export interface SmartGridApi {
  smartGrid: SmartGridApiContent;
}
