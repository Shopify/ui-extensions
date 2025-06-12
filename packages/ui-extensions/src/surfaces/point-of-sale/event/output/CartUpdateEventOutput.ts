import {ActionExtensionTarget} from '../../targets';
import {BaseOutput} from './BaseOutput';

export interface CartUpdateEventOutput extends BaseOutput {
  /**
   * The action target to render a modal.
   */
  modal?: ActionExtensionTarget;

  cart?: {
    /**
     * Add line items to the cart
     */
    addLineItems?: {
      variantId: number;
      quantity: number;
      properties?: Record<string, string>;
    }[];

    /**
     * Remove line items from the cart
     */
    removeLineItems?: {
      uuid: string;
    }[];
  };
}
