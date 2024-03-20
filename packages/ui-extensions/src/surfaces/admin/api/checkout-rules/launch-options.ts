import {Metafield} from './metafields';

export interface ValidationData {
  validation?: {
    /**
     * the validation's gid when active in a shop
     */
    id: string;
    /**
     * the metafields owned by the validation
     */
    metafields: Metafield[];
  };
  shopifyFunction: {
    /**
     * the validation function's unique identifier
     */
    id: string;
  };
}
