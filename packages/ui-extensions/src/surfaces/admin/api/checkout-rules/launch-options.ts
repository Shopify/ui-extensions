export interface ValidationData {
  validation?: {
    /**
     * the validation's gid when active in a shop
     */
    id: string;
  };
  shopifyFunction: {
    /**
     * the validation function's unique identifier
     */
    id: string;
  };
}
