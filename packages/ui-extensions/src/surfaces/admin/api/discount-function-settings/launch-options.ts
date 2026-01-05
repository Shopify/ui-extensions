import type {
  ReadonlySignalLike,
  UpdateSignalFunction,
} from '../../../../shared';

interface Metafield {
  description?: string;
  id: string;
  namespace: string;
  key: string;
  value: string;
  type: string;
}

type DiscountClass = 'product' | 'order' | 'shipping';

type DiscountMethod = 'automatic' | 'code';

/**
 * The object that exposes the validation with its settings.
 */
export interface DiscountFunctionSettingsData {
  /**
   * The unique identifier for the discount.
   */
  id: string;
  /**
   * The discount metafields.
   */
  metafields: Metafield[];
}

/**
 * Reactive Api for managing discount function configuration.
 */
export interface DiscountsApi {
  /**
   * A signal that contains the discount classes.
   */
  discountClasses: ReadonlySignalLike<DiscountClass[]>;
  /**
   * A function that updates the discount classes.
   */
  updateDiscountClasses: UpdateSignalFunction<DiscountClass[]>;
  /**
   * A signal that contains the discount method.
   */
  discountMethod: ReadonlySignalLike<DiscountMethod>;
}
