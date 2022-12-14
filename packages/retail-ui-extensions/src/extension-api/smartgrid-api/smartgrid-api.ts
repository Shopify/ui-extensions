import type {Modal} from '../types';

export interface SmartGridApiContent {
  /** Presents a new modal on top of the Smart Grid.
   * @param modal this interface contains the information about the path and any initial parameters.
   */
  presentModal(modal: Modal): void;
}

/**
 * Access the SmartGrid API to present your app in a full screen modal.
 */
export interface SmartGridApi {
  smartGrid: SmartGridApiContent;
}
