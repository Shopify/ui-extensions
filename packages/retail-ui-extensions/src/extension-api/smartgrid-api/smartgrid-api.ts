import {Destination} from 'extension-api/types';

export interface SmartGridApiContent {
  /** Presents the `pos.home.modal.render` extension point on top of the Smart Grid.
   * @param destination the `destination` `Screen` or `Modal` to navigate to.
   * @param params the parameters you want to pass to the destination.
   */
  navigate(destination: Destination, params?: any): void;
}

/**
 * Access the SmartGrid API to present your app in a full screen modal.
 */
export interface SmartGridApi {
  smartGrid: SmartGridApiContent;
}
