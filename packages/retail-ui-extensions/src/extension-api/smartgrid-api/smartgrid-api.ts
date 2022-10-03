export interface SmartGridApiContent {
  /** Opens a full screen with the Retail::SmartGrid::Modal extension point */
  presentModal(): void;
}

/**
 * Access the SmartGrid API to present your app in a full screen modal.
 */
export interface SmartGridApi {
  smartGrid: SmartGridApiContent;
}
