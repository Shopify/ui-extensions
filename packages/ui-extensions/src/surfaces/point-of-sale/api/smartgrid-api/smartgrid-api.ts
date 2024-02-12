/**
 * @deprecated Use `ActionApi` instead.
 */
export interface SmartGridApiContent {
  /** Presents the `pos.home.modal.render` extension target on top of the Smart Grid.
   */
  presentModal(): void;
}

/**
 * Access the SmartGrid API to present your app in a full screen modal.
 *
 * @deprecated Use `ActionApi` instead.
 */
export interface SmartGridApi {
  smartGrid: SmartGridApiContent;
}
